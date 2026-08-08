import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n, localeFor } from '../content/language'
import { experiences, projectMeta } from '../content/portfolio'

const socialImage = '/social-card.svg'

export default function RouteMeta() {
  const { language, t } = useI18n()
  const location = useLocation()
  useEffect(() => {
    const path = location.pathname
    const knownPath = /^\/(?:en|zh-tw)(?:\/(?:journey|experience(?:\/[^/]+)?|projects(?:\/[^/]+)?|capabilities|skills|about|strengths|contact))?\/?$/.test(path)
    const pageKey = !knownPath ? 'notFound' : path.includes('/projects') ? 'projects' : path.includes('/capabilities') ? 'capabilities' : path.includes('/about') ? 'about' : path.includes('/journey') ? 'journey' : path.includes('/contact') ? 'contact' : path.includes('/experience') ? 'experience' : 'overview'
    const titles = { en: { overview: 'Peter Chang | Finance & Business Analytics Portfolio', experience: 'Experience | Peter Chang', projects: 'Projects | Peter Chang', capabilities: 'Capabilities | Peter Chang', about: 'About | Peter Chang', journey: 'Interactive Journey | Peter Chang', contact: 'Contact | Peter Chang', notFound: 'Page not found | Peter Chang' }, zh: { overview: 'Peter Chang｜財務與商業分析作品集', experience: '經歷｜Peter Chang', projects: '作品｜Peter Chang', capabilities: '能力｜Peter Chang', about: '關於我｜Peter Chang', journey: '互動人生路徑｜Peter Chang', contact: '聯絡｜Peter Chang', notFound: '找不到頁面｜Peter Chang' } } as const
    const descriptions = { en: { overview: t.hero.body, experience: t.experience.description, projects: t.projects.description, capabilities: t.capabilities.description, about: t.about.description, journey: t.journey.description, contact: t.contact.description, notFound: t.common.notFoundDescription }, zh: { overview: t.hero.body, experience: t.experience.description, projects: t.projects.description, capabilities: t.capabilities.description, about: t.about.description, journey: t.journey.description, contact: t.contact.description, notFound: t.common.notFoundDescription } } as const
    const title = titles[language][pageKey]
    const description = descriptions[language][pageKey]
    document.title = title
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en'
    const canonical = `${window.location.origin}${path || `/${localeFor(language)}`}`
    const setMeta = (selector: string, attribute: string, content: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      if (element) element.setAttribute(attribute, content)
    }
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[property="og:image"]', 'content', `${window.location.origin}${socialImage}`)
    const canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.href = canonical
    const alternates = document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]')
    alternates.forEach((link) => { if (link.hreflang === 'en') link.href = `${window.location.origin}${path.replace(/^\/zh-tw/, '/en') || '/en'}`; if (link.hreflang === 'zh-Hant') link.href = `${window.location.origin}${path.replace(/^\/en/, '/zh-tw') || '/zh-tw'}` })
    const projectSlug = path.match(/\/projects\/([^/]+)/)?.[1]
    const structured = document.head.querySelector<HTMLScriptElement>('#project-structured-data')
    if (structured && projectSlug && projectMeta[projectSlug]) {
      const item = experiences.find((experience) => experience.slug === projectSlug)
      const meta = projectMeta[projectSlug]
      structured.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': meta.status === 'completed' ? 'SoftwareApplication' : 'CreativeWork', name: item ? item.title.en : projectSlug, url: canonical, description: item?.summary.en, codeRepository: item?.links?.find((link) => link.label === 'GitHub')?.href, isPartOf: { '@type': 'Person', name: 'Peter Chang' } })
    } else if (structured) structured.textContent = ''
  }, [language, location.pathname, t])
  return null
}
