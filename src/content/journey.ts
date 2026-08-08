import type { Language } from './language'

export type LocalizedText = Record<Language, string>

export type JourneyChapter = {
  id: string
  yearLabel: LocalizedText
  title: LocalizedText
  role: LocalizedText
  summary: LocalizedText
  scene: string
  experienceSlugs: string[]
}

export const journeyChapters: JourneyChapter[] = [
  {
    id: 'origins',
    yearLabel: { en: 'Taiwan', zh: '台灣' },
    title: { en: 'Origins', zh: '起點' },
    role: { en: 'Taiwan foundation · early education', zh: '台灣基礎 · 早期教育' },
    summary: { en: 'A cross-cultural foundation shaped how I listen, adapt, and carry context between communities, classrooms, and products.', zh: '跨文化的基礎，讓我學會傾聽、調整，並在社群、課堂與產品之間保留脈絡。' },
    scene: 'assets/scenes/origins.webp',
    experienceSlugs: ['personal-journey'],
  },
  {
    id: 'operations',
    yearLabel: { en: '2019–2021', zh: '2019–2021' },
    title: { en: 'Learning Through Operations', zh: '從營運中學習' },
    role: { en: 'Sukiya · Asian Night Market', zh: 'Sukiya · Asian Night Market' },
    summary: { en: 'Events and frontline service taught me to coordinate people, cash, vendors, orders, and contingencies under pressure.', zh: '活動與前線服務讓我學會在壓力下協調人員、現金、攤商、訂單與應變方案。' },
    scene: 'assets/scenes/night-market.webp',
    experienceSlugs: ['asian-night-market', 'sukiya-operations'],
  },
  {
    id: 'community',
    yearLabel: { en: '2021–2025', zh: '2021–2025' },
    title: { en: 'Building Community', zh: '建立社群' },
    role: { en: 'Utah Valley University · Chinese Club · Teaching Assistant', zh: 'Utah Valley University · Chinese Club · 中文助教' },
    summary: { en: 'UVU became a laboratory for leadership, membership growth, teaching, and cross-cultural communication.', zh: 'UVU 成為領導、會員成長、教學與跨文化溝通的實驗場。' },
    scene: 'assets/scenes/uvu.webp',
    experienceSlugs: ['uvu-start', 'uvu-community', 'chinese-teaching-assistant'],
  },
  {
    id: 'finance-transition',
    yearLabel: { en: '2026', zh: '2026' },
    title: { en: 'Finance and Analytics Transition', zh: '財務與分析的轉向' },
    role: { en: 'Investment Growth Calculator · InvestIQ', zh: 'Investment Growth Calculator · InvestIQ' },
    summary: { en: 'Financial modeling became a product discipline: turning compounding, scenarios, and investment questions into useful interfaces.', zh: '財務建模成為產品實踐：把複利、情境與投資問題轉化成實用介面。' },
    scene: 'assets/scenes/investment-research.webp',
    experienceSlugs: ['investment-growth-calculator', 'investiq'],
  },
  {
    id: 'decision-tools',
    yearLabel: { en: '2026', zh: '2026' },
    title: { en: 'Building Decision Tools', zh: '建立決策工具' },
    role: { en: 'Northstar Credit Platform · Financial analytics', zh: 'Northstar Credit Platform · 財務分析' },
    summary: { en: 'The work now focuses on transparent decision support: credit risk, debt capacity, stress testing, and financial planning.', zh: '現在的工作聚焦於透明的決策支援：信用風險、債務承受力、壓力測試與財務規劃。' },
    scene: 'assets/scenes/credit-risk.webp',
    experienceSlugs: ['northstar-credit-platform', 'corporate-finance-fpa-platform'],
  },
  {
    id: 'boston-next',
    yearLabel: { en: '2026–2028', zh: '2026–2028' },
    title: { en: 'Boston Chapter', zh: '波士頓篇章' },
    role: { en: 'M.S. Business Analytics · Boston University', zh: '商業分析碩士 · Boston University' },
    summary: { en: 'Boston University is the next environment for deepening business analytics, financial modeling, forecasting, and data-driven decisions.', zh: 'Boston University 是深化商業分析、財務建模、預測與資料驅動決策的下一個環境。' },
    scene: 'assets/scenes/bu.webp',
    experienceSlugs: ['boston-university'],
  },
]
