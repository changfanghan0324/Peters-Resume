import type { Language } from './language'

type Localized = Record<Language, string>

export type Experience = {
  slug: string
  year: string
  title: Localized
  role: Localized
  place: Localized
  period: Localized
  summary: Localized
  challenge: Localized
  built: Localized
  outcome: Localized
  highlights: Record<Language, string[]>
  skills: string[]
  credentials?: string[]
  sectionLabels?: Record<Language, [string, string, string]>
  skillLabel?: Localized
  credentialLabel?: Localized
  scene: string
  links?: { label: string; href: string }[]
}

export const experiences: Experience[] = [
  {
    slug: 'taiwan-origins',
    year: '2003',
    title: { en: 'A beginning in Taiwan', zh: '從台灣開始的人生路徑' },
    role: { en: 'Born March 24, 2003', zh: '出生於 2003 年 3 月 24 日' },
    place: { en: 'Taiwan', zh: '台灣' },
    period: { en: 'March 24, 2003', zh: '2003 年 3 月 24 日' },
    summary: { en: 'The first point on a path that would later connect Taiwan, Utah, and Boston.', zh: '人生的第一個座標，後來一路連結台灣、猶他州與波士頓。' },
    challenge: { en: 'I was born in Taiwan on March 24, 2003. This is the factual starting point of the journey.', zh: '我於 2003 年 3 月 24 日出生於台灣；這是整段人生路徑的真實起點。' },
    built: { en: 'The timeline later moves from Taiwan to Orem, Utah, and Boston as education, leadership, and product work unfold.', zh: '隨著求學、領導與產品經驗展開，時間線從台灣延伸到猶他州 Orem，再到波士頓。' },
    outcome: { en: 'A cross-regional perspective now connects the places, communities, and decisions represented throughout this portfolio.', zh: '跨地域的視角，逐漸串起這個作品集中出現的地方、社群與每一次選擇。' },
    highlights: { en: ['Born March 24, 2003', 'Taiwan', 'Later: Utah and Boston'], zh: ['2003 年 3 月 24 日出生', '台灣', '後來前往猶他州與波士頓'] },
    skills: ['Taiwan', 'Orem, Utah', 'Boston, Massachusetts'],
    credentials: ['March 24, 2003', 'Taiwan'],
    sectionLabels: {
      en: ['Origins', 'The path expands', 'The thread forward'],
      zh: ['起點', '路徑展開', '延續至今'],
    },
    skillLabel: { en: 'Places in this journey', zh: '人生路徑中的地點' },
    credentialLabel: { en: 'At a glance', zh: '基本資訊' },
    scene: 'assets/scenes/origins.png',
  },
  {
    slug: 'asian-night-market',
    year: '2019',
    title: { en: 'A night market for 600', zh: '為 600 人打造的亞洲夜市' },
    role: { en: 'Lead Organizer · Asian Night Market', zh: '總召集人 · 亞洲夜市' },
    place: { en: 'Taiwan', zh: '台灣' },
    period: { en: 'November 2019', zh: '2019 年 11 月' },
    summary: { en: 'Four organizers, eight vendors, 600 attendees — and a contingency plan for every moving part.', zh: '四人團隊、八個攤商、約 600 位參與者，並為每個變數準備備案。' },
    challenge: { en: 'Turn a compact team and limited planning window into a public event that could handle vendors, promotion, logistics, and surprises.', zh: '用精簡團隊與有限籌備時間，完成攤商、宣傳、現場動線與突發狀況管理。' },
    built: { en: 'A full event plan covering vendor recruitment, on-site operations, promotion, and contingencies.', zh: '建立涵蓋攤商招募、現場營運、宣傳與應變的完整活動計畫。' },
    outcome: { en: 'The night market brought together approximately 600 attendees and eight vendors.', zh: '活動成功吸引約 600 位參與者與八個攤商。' },
    highlights: { en: ['Led a four-person team', 'Recruited eight vendors', 'Owned on-site logistics'], zh: ['領導四人團隊', '招募八個攤商', '負責現場物流與應變'] },
    skills: ['Event Operations', 'Vendor Coordination', 'Promotion', 'Contingency Planning'],
    scene: 'assets/scenes/night-market.png',
  },
  {
    slug: 'sukiya-operations',
    year: '2020—21',
    title: { en: 'Leading through the rush', zh: '在尖峰時段領導團隊' },
    role: { en: 'Assistant Manager · Sukiya', zh: '副理 · Sukiya' },
    place: { en: 'Taipei, Taiwan', zh: '台灣台北' },
    period: { en: 'August 2020 — May 2021', zh: '2020 年 8 月—2021 年 5 月' },
    summary: { en: 'Coordinated service for roughly 400 daily customers while protecting accuracy, cash control, and team standards.', zh: '每日協調約 400 位顧客服務，同時守住準確度、現金控管與團隊標準。' },
    challenge: { en: 'Keep staffing, orders, and service quality moving together during high-volume shifts.', zh: '在高流量班次中，同步維持人力、出餐與服務品質。' },
    built: { en: 'Clear operating routines for peak service, reconciliation, and onboarding.', zh: '建立尖峰服務、帳務核對與新人訓練的清楚流程。' },
    outcome: { en: 'Reconciled more than NT$70,000 in cash receipts and trained three new employees on operating standards.', zh: '完成超過新台幣 70,000 元的現金核對，並訓練三位新進員工。' },
    highlights: { en: ['~400 customers daily', 'NT$70K+ cash reconciliation', 'Trained three employees'], zh: ['每日約 400 位顧客', '核對超過 NT$70K 現金', '訓練三位員工'] },
    skills: ['Operations', 'Team Leadership', 'Cash Reconciliation', 'Training'],
    scene: 'assets/scenes/sukiya.png',
  },
  {
    slug: 'uvu-community',
    year: '2022—25',
    title: { en: 'Building a community from 21 to 264', zh: '把 21 人的社群成長到 264 人' },
    role: { en: 'President & Chinese Teaching Assistant · Utah Valley University', zh: '社長暨中文助教 · Utah Valley University' },
    place: { en: 'Orem, Utah', zh: '猶他州 Orem' },
    period: { en: 'January 2022 — May 2025', zh: '2022 年 1 月—2025 年 5 月' },
    summary: { en: 'Four course sections. Two to four events every month. One community built across cultures.', zh: '支援四個課程班級、每月二到四場活動，建立一個跨文化社群。' },
    challenge: { en: 'Grow a small student organization while keeping programming useful, inclusive, and financially disciplined.', zh: '擴大小型學生組織，同時維持活動價值、包容性與預算紀律。' },
    built: { en: 'A repeatable event rhythm spanning programming, promotion, vendors, and adaptive language support.', zh: '建立涵蓋企劃、宣傳、攤商協調與差異化語言輔導的可重複運作模式。' },
    outcome: { en: 'Membership grew from 21 to 264 within a $250 event budget, while supporting students across four course sections.', zh: '會員由 21 人成長至 264 人；並在 250 美元活動預算內運作，同時支援四個課程班級。' },
    highlights: { en: ['21 → 264 members', '2–4 events monthly', '$250 program budget', 'Supported four course sections'], zh: ['21 → 264 位會員', '每月 2–4 場活動', '250 美元活動預算', '支援四個課程班級'] },
    skills: ['Leadership', 'Teaching', 'Budgeting', 'Community Building'],
    credentials: ['B.S. Finance', 'A.S. Business Management'],
    scene: 'assets/scenes/uvu.png',
  },
  {
    slug: 'tutor-platform',
    year: '2026',
    title: { en: 'Learning support, organized', zh: '讓學習支援更有系統' },
    role: { en: 'Product Developer · Tutor Learning Support Platform', zh: '產品開發者 · 家教學習支援平台' },
    place: { en: 'Orem / Remote', zh: 'Orem／遠端' },
    period: { en: 'May 2026', zh: '2026 年 5 月' },
    summary: { en: 'A tutor registration experience connecting profiles, resources, scheduling, and communication.', zh: '整合家教檔案、學習資源、排程與溝通的註冊體驗。' },
    challenge: { en: 'Reduce friction across the scattered steps of discovering tutors and coordinating learning.', zh: '降低尋找家教與協調學習過程中分散步驟所造成的摩擦。' },
    built: { en: 'A registration website integrating tutor profiles, organized learning resources, and scheduling and communication tools.', zh: '建立整合家教檔案、分類學習資源、排程與溝通工具的註冊網站。' },
    outcome: { en: 'A more accessible, coherent tutoring process built around three core user needs.', zh: '以三項核心使用者需求為中心，打造更易用且連貫的家教流程。' },
    highlights: { en: ['Tutor profiles', 'Learning resources', 'Scheduling & communication'], zh: ['家教檔案', '學習資源', '排程與溝通'] },
    skills: ['Product Development', 'Next.js', 'HTML/CSS', 'User Flows'],
    scene: 'assets/scenes/tutor.png',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324' }],
  },
  {
    slug: 'mochilune',
    year: '2026',
    title: { en: 'Knowing when to pause', zh: '知道何時該暫停' },
    role: { en: 'Founder · Mochilune', zh: '創辦人 · Mochilune' },
    place: { en: 'Taiwan / Remote', zh: '台灣／遠端' },
    period: { en: 'April — July 2026', zh: '2026 年 4 月—7 月' },
    summary: { en: 'A self-funded fragrance brand explored through research, sourcing, pricing, and disciplined validation.', zh: '以市場研究、製造商尋源、定價與審慎驗證探索自籌香氛品牌。' },
    challenge: { en: 'Test whether a fragrance concept could earn customer demand before committing the full budget.', zh: '在投入完整預算前，驗證香氛概念能否獲得真實顧客需求。' },
    built: { en: 'A research and sourcing foundation spanning the Taiwan market, pricing analysis, and manufacturer conversations.', zh: '建立涵蓋台灣市場、價格分析與製造商洽談的研究與尋源基礎。' },
    outcome: { en: 'Paused at customer validation and capped spend at $3,000 of a $10,000 budget — preserving capital when evidence was not yet strong enough.', zh: '在顧客驗證階段暫停，將 10,000 美元預算中的支出控制在 3,000 美元；當證據不足時保留資本。' },
    highlights: { en: ['Market & pricing research', 'Manufacturer sourcing', '$3K of $10K budget used'], zh: ['市場與定價研究', '製造商尋源', '10K 預算中使用 3K'] },
    skills: ['Market Research', 'Pricing', 'Sourcing', 'Capital Discipline', 'Shopify'],
    scene: 'assets/scenes/mochilune.png',
  },
  {
    slug: 'investment-research-platform',
    year: 'JUL 2026',
    title: { en: 'Investment Research & Portfolio Analytics', zh: 'Investment Research & Portfolio Analytics' },
    role: { en: 'Product Developer · Python, SQL, Next.js', zh: 'Product Developer · Python, SQL, Next.js' },
    place: { en: 'Independent Project', zh: 'Independent Project' },
    period: { en: 'July 2026 — Present', zh: 'July 2026 — Present' },
    summary: { en: 'Building a decision-support platform that connects company fundamentals, valuation, portfolio performance, and risk.', zh: 'Building a decision-support platform that connects company fundamentals, valuation, portfolio performance, and risk.' },
    challenge: { en: 'Individual investors often evaluate price, news, or one ratio in isolation. The platform is designed to connect business quality, fair value, and portfolio risk in one research process.', zh: 'Individual investors often evaluate price, news, or one ratio in isolation. The platform is designed to connect business quality, fair value, and portfolio risk in one research process.' },
    built: { en: 'In development: financial-statement analysis, DCF and comparable-company valuation, bull/base/bear scenarios, portfolio analytics, benchmark comparison, and structured investment memos.', zh: 'In development: financial-statement analysis, DCF and comparable-company valuation, bull/base/bear scenarios, portfolio analytics, benchmark comparison, and structured investment memos.' },
    outcome: { en: 'The intended output is a repeatable investment decision-support system that translates financial data into valuation ranges, risk context, catalysts, and downside considerations.', zh: 'The intended output is a repeatable investment decision-support system that translates financial data into valuation ranges, risk context, catalysts, and downside considerations.' },
    highlights: { en: ['Company financial analysis', 'DCF & comparable valuation', 'Portfolio performance & risk', 'One-page investment memo'], zh: ['Company financial analysis', 'DCF & comparable valuation', 'Portfolio performance & risk', 'One-page investment memo'] },
    skills: ['Financial Statement Analysis', 'Equity Research', 'DCF Valuation', 'Comparable Company Analysis', 'Portfolio Analytics', 'Scenario Analysis', 'Python', 'SQL', 'Next.js'],
    credentials: ['Status: In development', 'Started: July 2026'],
    sectionLabels: { en: ['The decision problem', 'What I am building', 'Intended decision output'], zh: ['The decision problem', 'What I am building', 'Intended decision output'] },
    skillLabel: { en: 'Core capabilities', zh: 'Core capabilities' },
    credentialLabel: { en: 'Project status', zh: 'Project status' },
    scene: 'assets/scenes/investment-research.png',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324' }],
  },
  {
    slug: 'corporate-credit-risk-model',
    year: 'AUG 2026',
    title: { en: 'Corporate Credit & Banking Risk Model', zh: 'Corporate Credit & Banking Risk Model' },
    role: { en: 'Financial Analytics Developer · Python, SQL, Power BI', zh: 'Financial Analytics Developer · Python, SQL, Power BI' },
    place: { en: 'Independent Project', zh: 'Independent Project' },
    period: { en: 'August 2026 — Present', zh: 'August 2026 — Present' },
    summary: { en: 'Building an explainable underwriting model for borrower quality, debt capacity, stress testing, and lending terms.', zh: 'Building an explainable underwriting model for borrower quality, debt capacity, stress testing, and lending terms.' },
    challenge: { en: 'A lending decision must go beyond profitability to test cash-flow stability, leverage, debt service, liquidity, industry exposure, and covenant resilience.', zh: 'A lending decision must go beyond profitability to test cash-flow stability, leverage, debt service, liquidity, industry exposure, and covenant resilience.' },
    built: { en: 'In development: standardized financial-statement spreading, credit-ratio trends, a transparent weighted score, debt-capacity analysis, and base/downside/severe stress scenarios.', zh: 'In development: standardized financial-statement spreading, credit-ratio trends, a transparent weighted score, debt-capacity analysis, and base/downside/severe stress scenarios.' },
    outcome: { en: 'The intended output is a credit memo with an explainable risk grade, lending recommendation, proposed loan amount, maturity, spread, collateral, and covenants.', zh: 'The intended output is a credit memo with an explainable risk grade, lending recommendation, proposed loan amount, maturity, spread, collateral, and covenants.' },
    highlights: { en: ['Financial statement spreading', 'Explainable credit scoring', 'Debt capacity & loan structure', 'Stress testing & credit memo'], zh: ['Financial statement spreading', 'Explainable credit scoring', 'Debt capacity & loan structure', 'Stress testing & credit memo'] },
    skills: ['Corporate Credit Analysis', 'Credit Underwriting', 'Debt Capacity Analysis', 'Loan Structuring', 'Stress Testing', 'Covenant Analysis', 'Python', 'SQL', 'Power BI'],
    credentials: ['Status: In development', 'Started: August 2026'],
    sectionLabels: { en: ['The underwriting problem', 'What I am building', 'Intended lending output'], zh: ['The underwriting problem', 'What I am building', 'Intended lending output'] },
    skillLabel: { en: 'Core capabilities', zh: 'Core capabilities' },
    credentialLabel: { en: 'Project status', zh: 'Project status' },
    scene: 'assets/scenes/credit-risk.png',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324' }],
  },
  {
    slug: 'corporate-finance-fpa-platform',
    year: 'SEP 2026',
    title: { en: 'Corporate Finance & FP&A Decision Platform', zh: 'Corporate Finance & FP&A Decision Platform' },
    role: { en: 'Financial Analytics Developer · Power BI, Python, SQL', zh: 'Financial Analytics Developer · Power BI, Python, SQL' },
    place: { en: 'Independent Project', zh: 'Independent Project' },
    period: { en: 'September 2026 — Present', zh: 'September 2026 — Present' },
    summary: { en: 'Building a management-planning platform that links business drivers to budgets, margins, cash flow, and action.', zh: 'Building a management-planning platform that links business drivers to budgets, margins, cash flow, and action.' },
    challenge: { en: 'Management teams need to understand not only whether performance missed plan, but which price, volume, mix, cost, and working-capital drivers caused the variance.', zh: 'Management teams need to understand not only whether performance missed plan, but which price, volume, mix, cost, and working-capital drivers caused the variance.' },
    built: { en: 'In development: driver-based forecasts, budget-versus-actual and price-volume-mix analysis, working-capital and cash-flow simulations, five planning scenarios, and a CFO dashboard.', zh: 'In development: driver-based forecasts, budget-versus-actual and price-volume-mix analysis, working-capital and cash-flow simulations, five planning scenarios, and a CFO dashboard.' },
    outcome: { en: 'The intended output is a clear chain from data to financial impact to management action, including recommendations for pricing, cost control, liquidity, and capital allocation.', zh: 'The intended output is a clear chain from data to financial impact to management action, including recommendations for pricing, cost control, liquidity, and capital allocation.' },
    highlights: { en: ['Driver-based forecasting', 'Budget, variance & margin analysis', 'Working capital & cash flow', 'CFO dashboard & recommendations'], zh: ['Driver-based forecasting', 'Budget, variance & margin analysis', 'Working capital & cash flow', 'CFO dashboard & recommendations'] },
    skills: ['FP&A', 'Forecasting', 'Variance Analysis', 'Scenario Planning', 'Working Capital Management', 'Cash Flow Forecasting', 'Power BI', 'Python', 'SQL'],
    credentials: ['Status: In development', 'Started: September 2026'],
    sectionLabels: { en: ['The planning problem', 'What I am building', 'Intended management output'], zh: ['The planning problem', 'What I am building', 'Intended management output'] },
    skillLabel: { en: 'Core capabilities', zh: 'Core capabilities' },
    credentialLabel: { en: 'Project status', zh: 'Project status' },
    scene: 'assets/scenes/fpa-platform.png',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324' }],
  },
  {
    slug: 'boston-university',
    year: '2028',
    title: { en: 'The path ahead', zh: '下一段路徑' },
    role: { en: 'M.S. Business Analytics · Boston University Questrom', zh: '商業分析碩士 · Boston University Questrom' },
    place: { en: 'Boston, Massachusetts', zh: '麻薩諸塞州波士頓' },
    period: { en: 'Expected January 2028', zh: '預計 2028 年 1 月畢業' },
    summary: { en: 'Deepening the connection between financial judgment, forecasting, business intelligence, and product decisions.', zh: '深化財務判斷、預測、商業智慧與產品決策之間的連結。' },
    challenge: { en: 'Build the analytical depth to turn increasingly complex business questions into decisions people can use.', zh: '建立更深的分析能力，把日益複雜的商業問題轉化為人們可採取的決策。' },
    built: { en: 'Graduate work across business and financial analytics, forecasting, business intelligence, and data-driven decision making.', zh: '研習商業與財務分析、預測、商業智慧與資料驅動決策。' },
    outcome: { en: 'A growing toolkit for translating data into clear products, models, and business action.', zh: '持續擴充把資料轉化為清楚產品、模型與商業行動的工具箱。' },
    highlights: { en: ['Business & financial analytics', 'Forecasting', 'Business intelligence', 'Data-driven decisions'], zh: ['商業與財務分析', '預測', '商業智慧', '資料驅動決策'] },
    skills: ['Python', 'SQL', 'Forecasting', 'Business Intelligence'],
    credentials: ['DataCamp: Python', 'DataCamp: NumPy', 'DataCamp: Git/GitHub', 'DataCamp: Statistics', 'Excel Data Visualization'],
    scene: 'assets/scenes/bu.png',
  },
]

export const profile = {
  birthDate: '2003-03-24',
  birthPlace: 'Taiwan',
  email: 'chang324@bu.edu',
  phone: '385-477-9823',
  linkedin: 'https://linkedin.com/in/fang-han-chang-7657011b1',
  github: 'https://github.com/changfanghan0324',
  instagram: 'https://www.instagram.com/rich_mochi7777/',
  handshake: 'https://app.joinhandshake.com/profiles/6pqze6',
  location: 'Boston, MA',
}

export function copy<T extends Localized>(value: T, language: Language) {
  return value[language]
}
