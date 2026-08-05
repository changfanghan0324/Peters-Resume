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
  scene: string
  links?: { label: string; href: string }[]
}

export const experiences: Experience[] = [
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
    slug: 'investment-calculator',
    year: '2026—',
    title: { en: 'Investment Growth Calculator', zh: '投資成長計算器' },
    role: { en: 'Product Developer · Investment Growth Calculator', zh: '產品開發者 · 投資成長計算器' },
    place: { en: 'Boston / Remote', zh: '波士頓／遠端' },
    period: { en: 'June 2026 — Present', zh: '2026 年 6 月—至今' },
    summary: { en: 'An interactive model for compound growth, recurring contributions, and three long-term investment scenarios.', zh: '用互動模型呈現複利、定期投入與三種長期投資情境。' },
    challenge: { en: 'Long-term investment outcomes are difficult to feel. Static calculations hide the impact of time and recurring behavior.', zh: '長期投資成果很難直覺感受；靜態計算也容易掩蓋時間與持續投入的影響。' },
    built: { en: 'A web application calculating compound growth, recurring contributions, and projected portfolio outcomes across three scenarios.', zh: '建立可計算複利、定期投入與三種情境下預估投資組合成果的網頁應用程式。' },
    outcome: { en: 'Users can compare long-term paths and make financial decisions with clearer expectations.', zh: '使用者可比較不同長期路徑，以更清楚的預期做出財務決策。' },
    highlights: { en: ['Compound growth', 'Recurring contributions', 'Three investment scenarios', 'Projected portfolio outcomes'], zh: ['複利成長', '定期投入', '三種投資情境', '預估投資組合成果'] },
    skills: ['Financial Modeling', 'Product Development', 'Next.js', 'Data Visualization'],
    scene: 'assets/scenes/investment.png',
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
