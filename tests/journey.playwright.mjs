/* global process, console, document, window, getComputedStyle */
/*
 * Journey smoke coverage without adding a browser-test dependency to the app.
 * Run with the workspace Playwright runtime, for example:
 *
 * NODE_PATH=/path/to/playwright/node_modules node tests/journey.playwright.mjs
 *
 * BASE_URL may be set to a deployed preview for a production smoke check.
 */
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { chromium } = require('playwright')
const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5173'
const chapterCount = 6

function check(condition, message) {
  if (!condition) throw new Error(message)
}

async function journeySweep(page, locale) {
  const errors = []
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto(`${baseUrl}/${locale}/journey`, { waitUntil: 'networkidle' })
  await page.locator('[data-journey-index="0"]').waitFor()
  check(await page.locator('[data-journey-index]').count() === chapterCount, `${locale}: expected ${chapterCount} chapters`)
  check(await page.locator('.journey-scene img').count() <= 3, `${locale}: scene image cap exceeded`)

  for (let index = 0; index < chapterCount; index += 1) {
    await page.locator(`[data-journey-index="${index}"]`).scrollIntoViewIfNeeded()
    await page.waitForTimeout(260)
    check(await page.locator(`[data-journey-index="${index}"].is-active`).count() === 1, `${locale}: chapter ${index} did not become active`)
    check(await page.locator('.journey-scene img').count() <= 3, `${locale}: chapter ${index} exceeded scene image cap`)
    check(await page.locator('.journey-scene img').evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)), `${locale}: chapter ${index} has an unloaded scene`)
  }

  await page.locator('[data-journey-index="5"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(260)
  check((await page.locator('[data-journey-index="5"] h2').allTextContents()).some((text) => text.trim().length > 0), `${locale}: Boston chapter title is missing`)
  check((await page.locator('.progress-line i').evaluate((node) => getComputedStyle(node).transform)) !== 'none', `${locale}: progress rail did not fill`)

  // A rapid sweep catches stale async scene swaps and observer races.
  for (let pass = 0; pass < 2; pass += 1) {
    for (const index of [...Array(chapterCount).keys(), ...[...Array(chapterCount).keys()].reverse()]) {
      await page.locator(`[data-journey-index="${index}"]`).scrollIntoViewIfNeeded({ timeout: 3000 })
    }
  }
  await page.waitForTimeout(300)
  check(errors.length === 0, `${locale}: console/page errors: ${errors.join(' | ')}`)
}

async function run() {
  const browser = await chromium.launch({ headless: true })
  try {
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
    await journeySweep(desktop, 'en')
    await desktop.emulateMedia({ reducedMotion: 'reduce' })
    await desktop.goto(`${baseUrl}/en/journey`, { waitUntil: 'networkidle' })
    check(await desktop.locator('.journey-scene-current').evaluate((node) => {
      node.classList.add('is-transitioning')
      const duration = getComputedStyle(node).transitionDuration
      node.classList.remove('is-transitioning')
      return Number.parseFloat(duration) <= 0.001
    }), 'reduced motion did not shorten scene transition')
    await desktop.locator('.progress-dots button').nth(4).focus()
    await desktop.keyboard.press('Enter')
    await desktop.waitForTimeout(100)
    check(await desktop.locator('[data-journey-index="4"].is-active').count() === 1, 'keyboard progress navigation failed')
    await journeySweep(desktop, 'zh-tw')
    await desktop.close()

    const wide = await browser.newPage({ viewport: { width: 1920, height: 900 } })
    await journeySweep(wide, 'en')
    check(await wide.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'wide desktop page has horizontal overflow')
    await wide.close()

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
    await journeySweep(mobile, 'en')
    check(await mobile.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'mobile page has horizontal overflow')
    check(await mobile.locator('.progress-dots button').evaluateAll((buttons) => buttons.every((button) => button.getBoundingClientRect().width >= 44 && button.getBoundingClientRect().height >= 44)), 'mobile progress targets are too small')
    await mobile.close()

    const oldRoutes = await browser.newPage({ viewport: { width: 1440, height: 900 } })
    for (const route of ['/en', '/zh-tw', '/en/projects', '/en/capabilities', '/en/contact']) {
      const response = await oldRoutes.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' })
      check(response && response.ok(), `${route} did not remain valid`)
    }
    await oldRoutes.close()
    console.log('Journey Playwright smoke tests passed.')
  } finally {
    await browser.close()
  }
}

run().catch((error) => {
  console.error(error.stack || error)
  process.exitCode = 1
})
