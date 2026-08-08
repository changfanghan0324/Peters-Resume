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
    yearLabel: { en: 'Starting point', zh: '起點' },
    title: { en: 'Origins', zh: '起點' },
    role: { en: 'A cross-cultural point of view', zh: '跨文化的視角' },
    summary: { en: 'A path connecting Taiwan, Utah, and Boston — and the context carried between communities, classrooms, and products.', zh: '連結台灣、猶他州與波士頓的路徑，在社群、課堂與產品之間保留脈絡。' },
    scene: 'assets/scenes/origins.webp',
    experienceSlugs: ['personal-journey'],
  },
  {
    id: 'operations',
    yearLabel: { en: '2019–2021', zh: '2019–2021' },
    title: { en: 'Learning Through Operations', zh: '從營運中學習' },
    role: { en: 'Lead Organizer · Assistant Manager', zh: '總召集人 · 副理' },
    summary: { en: 'Events and frontline service taught me to coordinate people, cash, vendors, orders, and contingencies under pressure.', zh: '活動與前線服務讓我學會在壓力下協調人員、現金、攤商、訂單與應變方案。' },
    scene: 'assets/scenes/night-market.webp',
    experienceSlugs: ['asian-night-market', 'sukiya-operations'],
  },
  {
    id: 'community',
    yearLabel: { en: '2021–2025', zh: '2021–2025' },
    title: { en: 'Building Community in Utah', zh: '在猶他州建立社群' },
    role: { en: 'Student · Club President · Teaching Assistant', zh: '學生 · 社團會長 · 中文助教' },
    summary: { en: 'Utah Valley University became a laboratory for leadership, membership growth, teaching, and cross-cultural communication.', zh: 'Utah Valley University 成為領導、會員成長、教學與跨文化溝通的實驗場。' },
    scene: 'assets/scenes/uvu.webp',
    experienceSlugs: ['uvu-start', 'uvu-community', 'chinese-teaching-assistant'],
  },
  {
    id: 'foundation',
    yearLabel: { en: '2023–2025', zh: '2023–2025' },
    title: { en: 'Coordination and Finance Foundation', zh: '協調與財務基礎' },
    role: { en: 'Study-abroad coordinator · Finance graduate', zh: '海外學習計畫協調 · 財務學士' },
    summary: { en: 'International logistics and formal finance training shaped a practical toolkit for structured decisions.', zh: '國際物流與正式財務訓練，共同形成結構化決策的實用工具箱。' },
    scene: 'assets/scenes/study-abroad.webp',
    experienceSlugs: ['study-abroad-coordination', 'uvu-graduation'],
  },
  {
    id: 'founder-judgment',
    yearLabel: { en: 'April–July 2026', zh: '2026 年 4–7 月' },
    title: { en: 'Founder Judgment', zh: '創辦人的判斷' },
    role: { en: 'Founder · Mochilune', zh: '創辦人 · Mochilune' },
    summary: { en: 'Market validation, manufacturer evaluation, and a disciplined go / no-go decision kept an uncertain launch from becoming an expensive one.', zh: '市場驗證、製造商評估與審慎的推出／暫停決策，避免不確定的上市變成昂貴的投入。' },
    scene: 'assets/scenes/mochilune.webp',
    experienceSlugs: ['mochilune'],
  },
  {
    id: 'first-products',
    yearLabel: { en: 'May–July 2026', zh: '2026 年 5–7 月' },
    title: { en: 'Building the First Products', zh: '建立第一批產品' },
    role: { en: 'Product Developer · Education and financial tools', zh: '產品開發者 · 教育與財務工具' },
    summary: { en: 'The first products turned user journeys and long-term financial questions into clearer web experiences.', zh: '第一批產品把使用者路徑與長期財務問題，轉化成更清楚的網頁體驗。' },
    scene: 'assets/scenes/tutor.webp',
    experienceSlugs: ['tutor-platform', 'investment-growth-calculator'],
  },
  {
    id: 'investment-credit',
    yearLabel: { en: 'July–August 2026', zh: '2026 年 7–8 月' },
    title: { en: 'Investment and Credit Analytics', zh: '投資與信用分析' },
    role: { en: 'Product Developer · FinTech decision support', zh: '產品開發者 · 金融科技決策支援' },
    summary: { en: 'InvestIQ and Northstar Credit Platform extend the product work into investment research, lending analysis, and model transparency.', zh: 'InvestIQ 與 Northstar Credit Platform 將產品工作延伸到投資研究、放款分析與模型透明度。' },
    scene: 'assets/scenes/investment-research.webp',
    experienceSlugs: ['investiq', 'northstar-credit-platform'],
  },
  {
    id: 'fpa-roadmap',
    yearLabel: { en: 'September 2026', zh: '2026 年 9 月' },
    title: { en: 'Corporate Finance Roadmap', zh: '企業財務路線圖' },
    role: { en: 'Planned FP&A decision platform', zh: '規劃中的 FP&A 決策平台' },
    summary: { en: 'A roadmap for driver-based forecasting, budget variance, working capital, and scenario planning — intentionally labeled as future scope.', zh: '規劃以 driver-based forecasting、預算差異、營運資金與情境規劃為核心，並明確標示為未來範圍。' },
    scene: 'assets/scenes/fpa-platform.webp',
    experienceSlugs: ['corporate-finance-fpa-platform'],
  },
  {
    id: 'boston-next',
    yearLabel: { en: '2026–2028', zh: '2026–2028' },
    title: { en: 'Boston and the Next Chapter', zh: '波士頓與下一章' },
    role: { en: 'M.S. Business Analytics · Boston University', zh: '商業分析碩士 · Boston University' },
    summary: { en: 'Boston University is the next environment for deepening business analytics, financial modeling, forecasting, and data-driven decision-making.', zh: 'Boston University 是深化商業分析、財務建模、預測與資料驅動決策的下一個環境。' },
    scene: 'assets/scenes/bu.webp',
    experienceSlugs: ['boston-university'],
  },
]
