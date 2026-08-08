/* global process, console, document, window, getComputedStyle */
/*
 * Responsive acceptance matrix for the recruiter-facing storytelling pages.
 * Run with the workspace Playwright runtime:
 * NODE_PATH=<workspace Playwright modules> node tests/responsive-layout.playwright.mjs
 */
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { chromium } = require('playwright')
const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:5173'
const widths = [320, 375, 390, 768, 1024, 1440]
const routes = ['/en/journey', '/zh-tw/journey', '/en/experience', '/zh-tw/experience', '/en/about', '/zh-tw/about']

function check(condition, message) {
  if (!condition) throw new Error(message)
}

async function run() {
  const browser = await chromium.launch({ headless: true })
  try {
    for (const width of widths) {
      for (const route of routes) {
        const page = await browser.newPage({ viewport: { width, height: 844 } })
        const errors = []
        page.on('pageerror', (error) => errors.push(error.message))
        page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' })
        await page.waitForTimeout(220)
        const metrics = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
        }))
        check(!metrics.overflow, `${route} at ${width}px has horizontal page overflow (${metrics.scrollWidth}px)`)

        if (route.endsWith('/journey')) {
          check(await page.locator('[data-journey-index]').count() === 6, `${route} at ${width}px did not render six chapters`)
          check(await page.locator('.journey-chapter-copy').evaluateAll((nodes) => nodes.every((node) => node.scrollWidth <= node.clientWidth + 1)), `${route} at ${width}px has clipped chapter copy`)
          const center = await page.locator('.progress-dots button.active').evaluate((node) => {
            const rect = node.getBoundingClientRect()
            return Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2)
          })
          check(center <= 2, `${route} at ${width}px active journey node is not centered (${center}px)`)
          for (let index = 0; index < 6; index += 1) {
            await page.locator(`[data-journey-index="${index}"]`).scrollIntoViewIfNeeded()
            await page.waitForTimeout(220)
            check(await page.locator(`[data-journey-index="${index}"].is-active`).count() === 1, `${route} at ${width}px chapter ${index} is not active`)
          }
        }

        if (route.endsWith('/experience')) {
          const collisions = await page.locator('.atlas-node').evaluateAll((nodes) => nodes.map((node) => {
            const dot = node.querySelector('.atlas-node-dot')?.getBoundingClientRect()
            const text = [...node.querySelectorAll('.atlas-node-year, strong, small')].map((element) => element.getBoundingClientRect())
            return { separated: dot && text.every((rect) => rect.top > dot.bottom + 8) }
          }))
          check(collisions.every((item) => item.separated), `${route} at ${width}px has a node/text collision`)
          check(await page.locator('.atlas-drawer').evaluate((node) => node.scrollWidth <= node.clientWidth + 1), `${route} at ${width}px has clipped experience detail copy`)
        }

        if (route.endsWith('/about')) {
          const card = await page.locator('.about-how-work').evaluate((node) => {
            const style = getComputedStyle(node)
            return { radius: style.borderRadius, background: style.backgroundColor, width: node.getBoundingClientRect().width, steps: node.querySelectorAll('li').length }
          })
          check(card.width <= width && card.steps === 3 && card.radius === '24px', `${route} at ${width}px How I Work card is incomplete`)
          check(await page.locator('.about-how-work').evaluate((node) => node.scrollWidth <= node.clientWidth + 1), `${route} at ${width}px has clipped How I Work copy`)
        }

        check(errors.length === 0, `${route} at ${width}px emitted errors: ${errors.join(' | ')}`)
        await page.close()
      }
    }
    console.log('Responsive layout Playwright tests passed.')
  } finally {
    await browser.close()
  }
}

run().catch((error) => {
  console.error(error.stack || error)
  process.exitCode = 1
})
