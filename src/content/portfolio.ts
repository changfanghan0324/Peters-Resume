import type { Language } from './language'

type Localized = Record<Language, string>

export type ExperienceCategory = 'personal' | 'leadership' | 'operations' | 'education' | 'entrepreneurship' | 'project'

export type Experience = {
  slug: string
  year: string
  category: ExperienceCategory
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
    slug: 'personal-journey', year: 'Path', category: 'personal',
    title: { en: 'A cross-cultural point of view', zh: '跨文化的視角' },
    role: { en: 'Personal journey', zh: '個人路徑' },
    place: { en: 'Taiwan · Utah · Boston', zh: '台灣 · 猶他州 · 波士頓' },
    period: { en: 'Personal context', zh: '個人背景' },
    summary: { en: 'A cross-cultural perspective connecting the communities, products, and decisions represented throughout this portfolio.', zh: '跨文化視角串起這個作品集中的社群、產品與每一次決策。' },
    challenge: { en: 'Carry context across different communities, classrooms, operating environments, and product questions.', zh: '在不同社群、課堂、營運環境與產品問題之間保留脈絡。' },
    built: { en: 'A path shaped by finance education, frontline operations, community leadership, teaching, entrepreneurship, and analytical products.', zh: '由財務教育、前線營運、社群領導、教學、創業與分析產品共同形塑的路徑。' },
    outcome: { en: 'The public portfolio focuses on professional evidence while keeping private identity details private.', zh: '公開作品集聚焦專業證據，同時保護私人身分細節。' },
    highlights: { en: ['Cross-cultural perspective', 'Adaptability', 'Context across Taiwan, Utah & Boston'], zh: ['跨文化視角', '適應力', '串連台灣、猶他州與波士頓的脈絡'] },
    skills: ['Cross-cultural Communication', 'Adaptability'],
    sectionLabels: { en: ['Context', 'The path expands', 'Public evidence'], zh: ['背景', '路徑展開', '公開證據'] },
    scene: 'assets/scenes/origins.webp',
  },
  {
    slug: 'asian-night-market', year: '2019', category: 'leadership',
    title: { en: 'A night market for 600', zh: '為 600 人打造的亞洲夜市' },
    role: { en: 'Lead Organizer · Asian Night Market', zh: '總召集人 · Asian Night Market' },
    place: { en: 'Provo, Utah', zh: '猶他州 Provo' },
    period: { en: 'November 2019', zh: '2019 年 11 月' },
    summary: { en: 'A four-person team, eight vendors, and approximately 600 attendees — coordinated as one live experience.', zh: '由四人團隊協作，招募八家攤商並吸引約 600 名參與者。' },
    challenge: { en: 'Create a large community event with a small organizing team while keeping vendors, promotion, logistics, and contingencies aligned.', zh: '以精簡團隊完成大型社群活動，並整合攤商、宣傳、物流與應變規劃。' },
    built: { en: 'Led vendor recruitment, event promotion, on-site logistics, stakeholder communication, and contingency planning with three other organizers.', zh: '與另外三名夥伴共同負責攤商招募、活動宣傳、現場物流、利害關係人溝通與應變計畫。' },
    outcome: { en: 'The event brought together eight participating vendors and approximately 600 attendees.', zh: '活動成功串連八家攤商並吸引約 600 名參與者。' },
    highlights: { en: ['4-person organizing team', 'Approximately 600 attendees', '8 participating vendors', 'Promotion, logistics & contingency planning'], zh: ['四人籌備團隊', '約 600 名參與者', '八家參與攤商', '宣傳、物流與應變計畫'] },
    skills: ['Team Leadership', 'Event Planning', 'Vendor Recruitment', 'Logistics Coordination', 'Promotion', 'Contingency Planning', 'Stakeholder Management', 'On-site Problem Solving'],
    scene: 'assets/scenes/night-market.webp',
  },
  {
    slug: 'sukiya-operations', year: '2020–21', category: 'operations',
    title: { en: 'Leading through the rush', zh: '在尖峰時段領導團隊' },
    role: { en: 'Assistant Manager · Sukiya', zh: '副理 · Sukiya' },
    place: { en: 'Taipei, Taiwan', zh: '台灣台北' },
    period: { en: 'August 2020 — May 2021', zh: '2020 年 8 月—2021 年 5 月' },
    summary: { en: 'Coordinating people, orders, cash, and service standards for roughly 400 customers a day.', zh: '協調人員、訂單、現金與服務標準，每日服務約 400 名顧客。' },
    challenge: { en: 'Keep frontline service accurate and consistent during high-volume peak periods.', zh: '在高流量尖峰時段維持前線服務的準確性與一致性。' },
    built: { en: 'Coordinated staffing and order flow, reconciled more than NT$70,000 in daily cash receipts, trained three new employees, and executed operating standards.', zh: '協調人員配置與訂單流程、核對每日超過新台幣 70,000 元現金、培訓三名新進員工並落實營運標準。' },
    outcome: { en: 'Developed repeatable frontline leadership habits under real operational pressure.', zh: '在實際營運壓力下建立可重複的前線領導與流程執行能力。' },
    highlights: { en: ['Approximately 400 customers daily', 'NT$70K+ daily cash reconciliation', '3 new employees trained', 'Peak-period staff and order coordination'], zh: ['每日約 400 名顧客', '每日 70K+ 新台幣現金核對', '培訓三名新進員工', '尖峰時段人員與訂單協調'] },
    skills: ['Operations Management', 'Staff Coordination', 'Order Flow Management', 'Cash Reconciliation', 'Customer Service', 'Employee Training', 'Quality Control', 'Working Under Pressure', 'Process Execution', 'Frontline Leadership'],
    scene: 'assets/scenes/sukiya.webp',
  },
  {
    slug: 'uvu-start', year: '2021', category: 'education',
    title: { en: 'A finance foundation in Utah', zh: '在猶他州建立財務基礎' },
    role: { en: 'Student · Utah Valley University', zh: '學生 · Utah Valley University' },
    place: { en: 'Orem, Utah', zh: '猶他州 Orem' },
    period: { en: 'Entered August 2021', zh: '2021 年 8 月正式入學' },
    summary: { en: 'Beginning a path through finance, business management, and community leadership at Utah Valley University.', zh: '在 Utah Valley University 展開財務、商業管理與社群領導的學習路徑。' },
    challenge: { en: 'Build an academic and professional foundation in a new cultural environment.', zh: '在新的文化環境中建立學術與職涯基礎。' },
    built: { en: 'Studied corporate finance, investment analysis, economics, budgeting, and strategic decision-making while building technical skills.', zh: '研習公司財務、投資分析、經濟學、預算與策略決策，同時建立技術能力。' },
    outcome: { en: 'The university experience became the base for later leadership, teaching, entrepreneurship, and FinTech projects.', zh: '大學經驗成為後續領導、教學、創業與金融科技專案的基礎。' },
    highlights: { en: ['Entered August 2021', 'Finance & business management', 'Orem, Utah'], zh: ['2021 年 8 月入學', '財務與商業管理', '猶他州 Orem'] },
    skills: ['Corporate Finance', 'Financial Analysis', 'Business Management', 'Economics', 'Strategic Decision-making'],
    scene: 'assets/scenes/uvu.webp',
  },
  {
    slug: 'uvu-community', year: '2022–25', category: 'leadership',
    title: { en: 'Building a community from 21 to 264', zh: '把 21 人的社群成長到 264 人' },
    role: { en: 'President · Chinese Club, Utah Valley University', zh: '會長 · Utah Valley University Chinese Club' },
    place: { en: 'Orem, Utah', zh: '猶他州 Orem' },
    period: { en: 'January 2022 — May 2025', zh: '2022 年 1 月—2025 年 5 月' },
    summary: { en: 'Founded and grew a multicultural student organization from 21 to 264 members.', zh: '創立並發展多元文化學生組織，將會員人數從 21 人提升至 264 人。' },
    challenge: { en: 'Turn a small student group into a durable multicultural community with limited event resources.', zh: '在有限活動資源下，把小型學生團體發展為可持續的多元文化社群。' },
    built: { en: 'Planned two to four events each month, managed approximately $250 per event, and led promotion, vendor coordination, member engagement, and resource allocation.', zh: '每月規劃二至四場活動、管理每場約 250 美元預算，並負責宣傳、供應商協調、會員互動與資源配置。' },
    outcome: { en: 'Membership grew more than twelvefold, from 21 to 264 members.', zh: '會員人數成長超過十二倍，從 21 人增加至 264 人。' },
    highlights: { en: ['21 → 264 members', '2–4 events per month', 'Approximately $250 per-event budget', 'Multicultural community building'], zh: ['21 → 264 名會員', '每月 2–4 場活動', '每場約 250 美元預算', '多元文化社群建立'] },
    skills: ['Organizational Leadership', 'Membership Growth', 'Budget Management', 'Event Programming', 'Marketing and Promotion', 'Vendor Coordination', 'Community Building', 'Strategic Planning', 'Resource Allocation', 'Cross-cultural Leadership'],
    scene: 'assets/scenes/uvu.webp',
  },
  {
    slug: 'chinese-teaching-assistant', year: '2022–25', category: 'education',
    title: { en: 'Explaining for the person in front of me', zh: '為眼前的學習者調整解釋方式' },
    role: { en: 'Chinese Teaching Assistant · Utah Valley University', zh: '中文助教 · Utah Valley University' },
    place: { en: 'Orem, Utah', zh: '猶他州 Orem' },
    period: { en: 'January 2022 — May 2025', zh: '2022 年 1 月—2025 年 5 月' },
    summary: { en: 'Supporting four Chinese-language classes and approximately 60 students across different proficiency levels and cultural backgrounds.', zh: '支援四個中文課程班級與約 60 名不同程度、文化背景的學生。' },
    challenge: { en: 'Make language and cultural concepts understandable to learners with different starting points.', zh: '讓起點不同的學習者都能理解語言與文化概念。' },
    built: { en: 'Adapted explanations to student proficiency, supported classroom participation, listened actively, and provided individualized guidance.', zh: '依學生程度調整解釋、支持課堂參與、主動傾聽並提供個別指導。' },
    outcome: { en: 'Strengthened the ability to translate complex ideas for a specific audience — a skill now applied to financial products and analytics.', zh: '強化針對特定受眾解釋複雜概念的能力，並延伸應用於財務產品與分析。' },
    highlights: { en: ['4 course sections', 'Approximately 60 students', 'Individualized support', 'Cross-cultural instruction'], zh: ['四個課程班級', '約 60 名學生', '個別化支持', '跨文化教學'] },
    skills: ['Teaching', 'Presentation', 'Public Speaking', 'Cross-cultural Communication', 'Individualized Instruction', 'Explaining Complex Concepts', 'Student Support', 'Interpersonal Communication', 'Active Listening', 'Adaptability'],
    scene: 'assets/scenes/uvu.webp',
  },
  {
    slug: 'study-abroad-coordination', year: '2023', category: 'operations',
    title: { en: 'Coordinating across countries', zh: '跨國協調與執行' },
    role: { en: 'Multi-country Study-abroad Coordination', zh: '多國海外學習計畫協調' },
    place: { en: 'International', zh: '跨國' },
    period: { en: 'May — July 2023', zh: '2023 年 5 月—7 月' },
    summary: { en: 'Coordinating the administration, expenses, stakeholders, and live logistics of a multi-country study-abroad program.', zh: '協調多國海外學習計畫的行政、費用、利害關係人與現場物流。' },
    challenge: { en: 'Keep cross-border travel, accommodation, academic stakeholders, and expenses organized across changing conditions.', zh: '在變動情況下整合跨國行程、住宿、學術利害關係人與費用。' },
    built: { en: 'Tracked expenses, coordinated travel logistics, and communicated with students, hotels, faculty, and external partners.', zh: '追蹤支出、協調跨國行程，並與學生、飯店、教師及外部合作夥伴溝通。' },
    outcome: { en: 'Built an operational approach centered on clear records, stakeholder alignment, and adaptable on-site coordination.', zh: '建立以清楚紀錄、利害關係人協調與彈性現場執行為核心的營運方式。' },
    highlights: { en: ['Expense tracking', 'International logistics', 'Student, hotel & faculty communication', 'Cross-cultural coordination'], zh: ['費用追蹤', '國際物流', '學生、飯店與教師溝通', '跨文化協調'] },
    skills: ['Expense Tracking', 'International Logistics', 'Vendor Communication', 'Cross-cultural Coordination', 'Travel Planning', 'Stakeholder Management', 'Administrative Organization'],
    scene: 'assets/scenes/study-abroad.webp',
  },
  {
    slug: 'uvu-graduation', year: '2025', category: 'education',
    title: { en: 'Finance, management, and a wider toolkit', zh: '財務、管理與更完整的工具箱' },
    role: { en: 'B.S. Finance · A.S. Business Management', zh: '財務學士 · 商業管理副學士' },
    place: { en: 'Utah Valley University · Orem, Utah', zh: 'Utah Valley University · 猶他州 Orem' },
    period: { en: 'Graduated August 2025', zh: '2025 年 8 月畢業' },
    summary: { en: 'Graduated with a B.S. in Finance, an A.S. in Business Management, and a 3.55/4.0 GPA.', zh: '取得財務學士與商業管理副學士學位，GPA 3.55/4.0。' },
    challenge: { en: 'Connect finance theory, business management, and technical training into a practical decision-making toolkit.', zh: '把財務理論、商業管理與技術訓練整合成可實際使用的決策工具箱。' },
    built: { en: 'Developed foundations in corporate finance, financial analysis, capital budgeting, time value of money, NPV, IRR, investment analysis, economics, budgeting, and strategy.', zh: '建立公司財務、財務分析、資本預算、貨幣時間價值、NPV、IRR、投資分析、經濟學、預算與策略基礎。' },
    outcome: { en: 'Added technical training in Python, NumPy, Git/GitHub, statistics, and Excel data visualization.', zh: '補充 Python、NumPy、Git/GitHub、統計與 Excel 資料視覺化訓練。' },
    highlights: { en: ['B.S. in Finance', 'A.S. in Business Management', 'GPA 3.55 / 4.0', 'Graduated August 2025'], zh: ['財務學士', '商業管理副學士', 'GPA 3.55 / 4.0', '2025 年 8 月畢業'] },
    skills: ['Corporate Finance', 'Financial Analysis', 'Capital Budgeting', 'Time Value of Money', 'NPV', 'IRR', 'Investment Analysis', 'Financial Statement Analysis', 'Economics', 'Budgeting', 'Strategic Decision-making', 'Python', 'NumPy', 'Git/GitHub', 'Statistics', 'Excel Data Visualization'],
    credentials: ['B.S. in Finance', 'A.S. in Business Management', 'GPA 3.55 / 4.0'],
    scene: 'assets/scenes/uvu.webp',
  },
  {
    slug: 'mochilune', year: 'APR 2026', category: 'entrepreneurship',
    title: { en: 'Knowing when to pause', zh: '知道何時該暫停' },
    role: { en: 'Founder · Mochilune', zh: '創辦人 · Mochilune' },
    place: { en: 'Taiwan / Remote', zh: '台灣／遠端' },
    period: { en: 'April — July 2026', zh: '2026 年 4 月—7 月' },
    summary: { en: 'A self-funded fragrance brand tested through research, sourcing, pricing, and disciplined customer validation.', zh: '以研究、尋源、定價與審慎顧客驗證測試自籌香氛品牌。' },
    challenge: { en: 'Determine whether the fragrance concept had enough validated demand to justify the full launch budget.', zh: '判斷香氛概念是否具有足夠需求，值得投入完整上市預算。' },
    built: { en: 'Researched the market, positioning, pricing, and competition; evaluated manufacturers including two in Shenzhen Futian; and conducted customer validation.', zh: '研究市場、定位、定價與競爭，評估包含深圳福田區兩家製造商，並進行顧客驗證。' },
    outcome: { en: 'Paused the launch when risk and return were not compelling, limiting spend to $3,000 of a $10,000 budget.', zh: '在風險報酬不理想時暫停推出，將 10,000 美元預算中的支出控制在 3,000 美元。' },
    highlights: { en: ['Market, positioning & pricing research', 'Manufacturer sourcing and evaluation', '$3K of $10K budget used', 'Evidence-based go / no-go decision'], zh: ['市場、定位與定價研究', '製造商尋源與評估', '10K 預算中使用 3K', '以證據做出推出／暫停決策'] },
    skills: ['Entrepreneurship', 'Market Validation', 'Go / No-go Decision-making', 'Pricing Research', 'Manufacturer Sourcing', 'Product Positioning', 'Budget Control', 'Risk Assessment', 'Competitive Analysis', 'Vendor Evaluation', 'Strategic Judgment'],
    scene: 'assets/scenes/mochilune.webp',
  },
  {
    slug: 'tutor-platform', year: 'MAY 2026', category: 'project',
    title: { en: 'Learning support, organized', zh: '讓學習支援更有系統' },
    role: { en: 'Product Developer · Summit Mandarin / Tutor Platform', zh: '產品開發者 · Summit Mandarin / Tutor Platform' },
    place: { en: 'Orem, Utah / Remote', zh: '猶他州 Orem／遠端' },
    period: { en: 'May 2026', zh: '2026 年 5 月' },
    summary: { en: 'A tutor registration and learning-support website connecting profiles, resources, scheduling, and communication.', zh: '整合家教檔案、學習資源、排程與溝通的註冊與學習支持網站。' },
    challenge: { en: 'Reduce friction across the scattered steps of discovering tutors and coordinating learning.', zh: '降低尋找家教與協調學習流程中的資訊摩擦。' },
    built: { en: 'Integrated tutor profiles, organized learning resources, and scheduling and communication tools into one responsive user journey.', zh: '把家教檔案、分類學習資源、排程與溝通工具整合成一條響應式使用者路徑。' },
    outcome: { en: 'Created a more coherent path for students and tutors to find information and coordinate support.', zh: '讓學生與家教更容易取得資訊並協調學習支持。' },
    highlights: { en: ['Tutor profiles', 'Organized learning resources', 'Scheduling & communication tools', 'Responsive user journey'], zh: ['家教檔案', '分類學習資源', '排程與溝通工具', '響應式使用者路徑'] },
    skills: ['Product Development', 'Web Development', 'User Journey Design', 'Tutor Marketplace Design', 'Scheduling Workflow', 'Information Architecture', 'Education Technology', 'Responsive Web Design', 'UI / UX Thinking', 'GitHub Deployment Workflow'],
    scene: 'assets/scenes/tutor.webp',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324/utah.chinese.tutor' }, { label: 'Live site', href: 'https://utah-tutor-web.vercel.app' }],
  },
  {
    slug: 'investment-growth-calculator', year: 'JUN 2026', category: 'project',
    title: { en: 'Investment Growth Calculator', zh: 'Investment Growth Calculator' },
    role: { en: 'Product Developer · Financial Modeling', zh: '產品開發者 · 財務建模' },
    place: { en: 'Boston / Remote', zh: '波士頓／遠端' },
    period: { en: 'June — July 2026', zh: '2026 年 6 月—7 月' },
    summary: { en: 'An interactive financial model for compound growth, recurring contributions, and long-term portfolio scenarios.', zh: '用於複利成長、定期投入與長期投資組合情境的互動式財務模型。' },
    challenge: { en: 'Make the long-term impact of contributions and return assumptions easier to understand.', zh: '讓投入金額與報酬假設的長期影響更容易理解。' },
    built: { en: 'Modeled compound growth, recurring contributions, future portfolio outcomes, and three investment scenarios in an interactive web experience.', zh: '在互動網站中建立複利、定期投入、未來投資組合結果與三種投資情境。' },
    outcome: { en: 'The calculator became the early MVP that later expanded into InvestIQ.', zh: '此計算器成為後續擴充為 InvestIQ 的早期 MVP。' },
    highlights: { en: ['Compound-growth modeling', 'Recurring contributions', '3 investment scenarios', 'Early MVP for InvestIQ'], zh: ['複利成長建模', '定期投入', '三種投資情境', 'InvestIQ 的早期 MVP'] },
    skills: ['Compound-growth Modeling', 'Financial Modeling', 'Scenario Analysis', 'Recurring-contribution Modeling', 'Portfolio Projection', 'Data Visualization', 'Long-term Financial Planning', 'Front-end Product Development'],
    scene: 'assets/scenes/investment.webp',
  },
  {
    slug: 'investiq', year: 'JUL 2026', category: 'project',
    title: { en: 'InvestIQ', zh: 'InvestIQ' },
    role: { en: 'Product Developer · TypeScript, Vercel', zh: '產品開發者 · TypeScript, Vercel' },
    place: { en: 'Independent Project', zh: '獨立專案' },
    period: { en: 'July 28, 2026 — Present', zh: '2026 年 7 月 28 日—至今' },
    summary: { en: 'Personalized investment analytics for U.S. stocks and ETFs, evolving from the earlier Investment Growth Calculator MVP.', zh: '針對美國股票與 ETF 的個人化投資分析平台，由早期 Investment Growth Calculator MVP 延伸而來。' },
    challenge: { en: 'Move beyond a standalone calculator toward a broader investment decision-support product.', zh: '從單一計算器發展為更完整的投資決策支持產品。' },
    built: { en: 'A public TypeScript web application spanning company fundamentals, portfolio analytics, scenario comparison, and risk-and-return presentation.', zh: '建立公開 TypeScript 網站，涵蓋公司基本面、投資組合分析、情境比較與風險報酬呈現。' },
    outcome: { en: 'The project is in active iteration with a public GitHub repository and Vercel deployment.', zh: '專案持續迭代中，已有公開 GitHub repository 與 Vercel 部署。' },
    highlights: { en: ['U.S. stocks & ETFs', 'Personalized investment analytics', 'Public Vercel deployment', 'TypeScript-based product iteration'], zh: ['美國股票與 ETF', '個人化投資分析', '公開 Vercel 部署', 'TypeScript 產品迭代'] },
    skills: ['Investment Analytics', 'Portfolio Analysis', 'Scenario Analysis', 'Risk-and-return Analysis', 'TypeScript', 'Responsive Interface', 'GitHub Pull-request Workflow', 'Vercel', 'Product Iteration'],
    credentials: ['Status: In development', 'Repository created: July 28, 2026'],
    scene: 'assets/scenes/investment-research.webp',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324/investiq' }, { label: 'Live site', href: 'https://investiq-eight-xi.vercel.app' }],
  },
  {
    slug: 'northstar-credit-platform', year: 'AUG 2026', category: 'project',
    title: { en: 'Northstar Credit Platform', zh: 'Northstar Credit Platform' },
    role: { en: 'Financial Analytics Developer · Python', zh: '財務分析開發者 · Python' },
    place: { en: 'Independent Project', zh: '獨立專案' },
    period: { en: 'August 4, 2026 — Present', zh: '2026 年 8 月 4 日—至今' },
    summary: { en: 'A deterministic credit analysis engine with independent cross-model verification.', zh: '具備獨立跨模型驗證的確定性信用分析引擎。' },
    challenge: { en: 'Translate financial statements and downside assumptions into explainable lending decisions, constraints, and protections.', zh: '把財務報表與下行情境轉化為可解釋的放款決策、限制因素與保障條件。' },
    built: { en: 'In development: financial statement spreading, credit risk scoring, debt capacity, DSCR, interest coverage, stress and reverse-stress testing, covenant analysis, and credit memo generation.', zh: '開發中：財報攤分、信用風險評分、債務承受能力、DSCR、利息保障倍數、壓力與反向壓力測試、covenant 分析及信用備忘錄。' },
    outcome: { en: 'The intended output is a deterministic lending decision-support engine with independent validation.', zh: '預期成果是具備獨立驗證的確定性放款決策支持引擎。' },
    highlights: { en: ['Deterministic credit engine', 'Debt capacity, DSCR & coverage', 'Stress and reverse-stress analysis', 'Independent cross-model verification'], zh: ['確定性信用引擎', '債務承受力、DSCR 與保障倍數', '壓力與反向壓力分析', '獨立跨模型驗證'] },
    skills: ['Corporate Credit Analysis', 'Credit Underwriting', 'Financial Statement Spreading', 'Debt Capacity', 'Credit Risk Scoring', 'DSCR', 'Interest Coverage', 'Stress Testing', 'Reverse-stress Analysis', 'Covenant Analysis', 'Credit Memo Writing', 'Python', 'Testing and Model Validation'],
    credentials: ['Status: In development', 'Repository created: August 4, 2026'],
    scene: 'assets/scenes/credit-risk.webp',
    links: [{ label: 'GitHub', href: 'https://github.com/changfanghan0324/northstar-credit-platform' }],
  },
  {
    slug: 'corporate-finance-fpa-platform', year: 'SEP 2026', category: 'project',
    title: { en: 'Corporate Finance & FP&A Decision Platform', zh: 'Corporate Finance & FP&A Decision Platform' },
    role: { en: 'Financial Analytics Developer · Planned', zh: '財務分析開發者 · 規劃中' },
    place: { en: 'Independent Project', zh: '獨立專案' },
    period: { en: 'Planned for September 2026', zh: '預計 2026 年 9 月開始' },
    summary: { en: 'A planned management-planning platform connecting business drivers to budgets, margins, working capital, cash flow, and action.', zh: '規劃中的管理決策平台，把商業驅動因子連結至預算、利潤率、營運資金、現金流與行動。' },
    challenge: { en: 'Help management understand not only whether performance missed plan, but which price, volume, mix, cost, and working-capital drivers caused the variance.', zh: '協助管理層理解績效是否偏離計畫，以及價格、銷量、組合、成本與營運資金中的真正原因。' },
    built: { en: 'Planned scope: driver-based forecasting, budget versus actual, price-volume-mix analysis, working-capital simulation, scenario planning, and a CFO dashboard.', zh: '規劃範圍：driver-based forecast、預算與實際、price-volume-mix、營運資金模擬、情境規劃與 CFO dashboard。' },
    outcome: { en: 'The intended output is a clear chain from data to financial impact to management action.', zh: '預期成果是建立從資料到財務影響再到管理行動的清楚鏈結。' },
    highlights: { en: ['Planned: driver-based forecasting', 'Budget, variance & margin analysis', 'Working capital & cash flow', 'Management recommendations'], zh: ['規劃：driver-based forecasting', '預算、差異與利潤分析', '營運資金與現金流', '管理建議'] },
    skills: ['FP&A', 'Budgeting', 'Forecasting', 'Variance Analysis', 'Driver-Based Modeling', 'Scenario Planning', 'Working Capital Management', 'Cash Flow Forecasting', 'Margin Analysis', 'Excel', 'Power BI', 'DAX', 'Power Query', 'Python', 'SQL'],
    credentials: ['Status: Planned', 'Planned start: September 2026'],
    scene: 'assets/scenes/fpa-platform.webp',
  },
  {
    slug: 'boston-university', year: '2026–28', category: 'education',
    title: { en: 'The path ahead at Boston University', zh: 'Boston University 的下一段路徑' },
    role: { en: 'Incoming M.S. Business Analytics Student · Questrom', zh: '即將入學的商業分析碩士生 · Questrom' },
    place: { en: 'Boston, Massachusetts', zh: '麻薩諸塞州波士頓' },
    period: { en: 'Starts September 2, 2026 · Expected January 2028', zh: '2026 年 9 月 2 日入學 · 預計 2028 年 1 月畢業' },
    summary: { en: 'Preparing to deepen business analytics, financial analytics, forecasting, business intelligence, and data-driven decision-making.', zh: '準備深化商業分析、財務分析、預測、商業智慧與資料驅動決策。' },
    challenge: { en: 'Build the analytical depth to turn increasingly complex business questions into decisions people can use.', zh: '建立更深的分析能力，把日益複雜的商業問題轉化為可採取的決策。' },
    built: { en: 'The program begins September 2, 2026, with an expected graduation in January 2028.', zh: '課程將於 2026 年 9 月 2 日開始，預計 2028 年 1 月畢業。' },
    outcome: { en: 'The focus will connect statistical analysis, forecasting, business intelligence, financial modeling, strategy analytics, and data visualization.', zh: '學習重點將串連統計分析、預測、商業智慧、財務建模、策略分析與資料視覺化。' },
    highlights: { en: ['Program start: September 2, 2026', 'Expected graduation: January 2028', 'M.S. in Business Analytics', 'Questrom School of Business'], zh: ['2026 年 9 月 2 日入學', '預計 2028 年 1 月畢業', '商業分析碩士', 'Questrom School of Business'] },
    skills: ['Business Analytics', 'Financial Analytics', 'Forecasting', 'Business Intelligence', 'Statistical Analysis', 'Financial Modeling', 'Strategy Analytics', 'Data Visualization'],
    credentials: ['Incoming M.S. Business Analytics Student', 'Expected January 2028'],
    scene: 'assets/scenes/bu.webp',
  },
]

export const profile = {
  displayName: 'Peter (Fang Han) Chang',
  email: 'chang324@bu.edu',
  linkedin: 'https://linkedin.com/in/fang-han-chang-7657011b1',
  github: 'https://github.com/changfanghan0324',
  location: 'Boston, Massachusetts',
}

export type ProjectStatus = 'completed' | 'in-development' | 'roadmap'
export type ProjectMeta = {
  status: ProjectStatus
  lastUpdated?: Localized
  problem: Localized
  targetUser: Localized
  methodology: Localized
  technology: Localized
  financialRelevance: Localized
  limitations: Localized
  nextSteps: Localized
  artifacts: Localized
}

export const projectMeta: Record<string, ProjectMeta> = {
  'tutor-platform': {
    status: 'completed', lastUpdated: { en: 'June 24, 2026', zh: '2026 年 6 月 24 日' },
    problem: { en: 'Students and tutors needed a clearer path from profile discovery to learning support.', zh: '學生與家教需要從檔案查看到學習支援的清楚流程。' },
    targetUser: { en: 'Students, tutors, and learning-support coordinators.', zh: '學生、家教與學習支援協調者。' },
    methodology: { en: 'Mapped the user journey, grouped resources, and connected profiles with scheduling and communication.', zh: '整理使用者路徑、分類資源，並串接家教檔案、排程與溝通。' },
    technology: { en: 'TypeScript, responsive web UI, GitHub, Vercel.', zh: 'TypeScript、響應式網頁介面、GitHub、Vercel。' },
    financialRelevance: { en: 'Shows product thinking and workflow design that can make analytical services easier to use.', zh: '展現讓分析服務更容易使用的產品思維與流程設計。' },
    limitations: { en: 'The public portfolio does not claim user counts, revenue, or learning outcomes.', zh: '公開作品集不宣稱使用者數量、營收或學習成果。' },
    nextSteps: { en: 'Add authentic product screenshots and a short implementation walkthrough when approved for publication.', zh: '取得發布許可後補上真實產品截圖與簡短實作說明。' },
    artifacts: { en: 'Public GitHub repository and live site supplied by the owner.', zh: '由本人提供的公開 GitHub repository 與線上網站。' },
  },
  'investment-growth-calculator': {
    status: 'completed', lastUpdated: { en: 'July 2026', zh: '2026 年 7 月' },
    problem: { en: 'Make recurring contributions and return assumptions easier to reason about over time.', zh: '讓使用者更容易理解定期投入與報酬假設的長期影響。' },
    targetUser: { en: 'People exploring long-term investment planning.', zh: '探索長期投資規劃的人。' },
    methodology: { en: 'Translate contribution, return, and scenario assumptions into an interactive financial model.', zh: '把投入、報酬與情境假設轉成互動式財務模型。' },
    technology: { en: 'Interactive web interface and financial modeling logic.', zh: '互動式網頁介面與財務建模邏輯。' },
    financialRelevance: { en: 'Early MVP for compound growth, recurring contributions, and portfolio projection.', zh: '以複利成長、定期投入與投資組合推估為核心的早期 MVP。' },
    limitations: { en: 'No public artifact link or validated user outcome was supplied.', zh: '目前未提供公開成果連結或經驗證的使用者結果。' },
    nextSteps: { en: 'Continue the product evolution through InvestIQ and publish artifacts after validation.', zh: '透過 InvestIQ 延伸產品，完成驗證後再發布成果檔案。' },
    artifacts: { en: 'Project description supplied; public artifact link is not currently supplied.', zh: '已提供專案描述；目前尚未提供公開成果連結。' },
  },
  investiq: {
    status: 'in-development', lastUpdated: { en: 'August 6, 2026 · repository activity', zh: '2026 年 8 月 6 日 · repository 活動' },
    problem: { en: 'Move from a single growth calculator toward a broader, explainable investment decision-support workspace.', zh: '從單一成長計算器延伸為更完整且可解釋的投資決策支援工作區。' },
    targetUser: { en: 'Individual investors and early-stage analysts working with U.S. stocks and ETFs.', zh: '研究美國股票與 ETF 的個人投資者與初階分析者。' },
    methodology: { en: 'Iterate a public product around fundamentals, portfolio analytics, scenario comparison, and risk/return presentation.', zh: '以公司基本面、投資組合分析、情境比較與風險報酬呈現持續迭代公開產品。' },
    technology: { en: 'TypeScript, Vercel, GitHub pull-request workflow.', zh: 'TypeScript、Vercel、GitHub pull-request workflow。' },
    financialRelevance: { en: 'Turns investment research questions into visible assumptions, comparisons, and decision context.', zh: '把投資研究問題轉成可見的假設、比較與決策脈絡。' },
    limitations: { en: 'The product is still in development; advanced metrics and research artifacts are not presented as completed evidence.', zh: '產品仍在開發中；進階指標與研究成果不會被呈現為已完成證據。' },
    nextSteps: { en: 'Continue validation, publish authentic screenshots or reports, and document model assumptions.', zh: '持續驗證、發布真實截圖或報告，並記錄模型假設。' },
    artifacts: { en: 'Public GitHub repository and live Vercel deployment.', zh: '公開 GitHub repository 與 Vercel 部署。' },
  },
  'northstar-credit-platform': {
    status: 'in-development', lastUpdated: { en: 'August 6, 2026 · repository activity', zh: '2026 年 8 月 6 日 · repository 活動' },
    problem: { en: 'Translate borrower financials and downside assumptions into explainable lending constraints and protections.', zh: '把借款企業財務資料與下行情境轉成可解釋的放款限制與保障條件。' },
    targetUser: { en: 'Corporate banking, credit risk, and lending analysts.', zh: '企業銀行、信用風險與授信分析者。' },
    methodology: { en: 'Build a deterministic engine with independent cross-model verification, transparent ratios, and stress scenarios.', zh: '建立具獨立跨模型驗證、透明比率與壓力情境的確定性引擎。' },
    technology: { en: 'Python; planned Next.js, FastAPI, PostgreSQL, and automated testing.', zh: 'Python；規劃中的 Next.js、FastAPI、PostgreSQL 與自動化測試。' },
    financialRelevance: { en: 'Models debt capacity, DSCR, interest coverage, covenant pressure, and lending recommendations.', zh: '建模債務承受力、DSCR、利息保障、covenant 壓力與授信建議。' },
    limitations: { en: 'No claim is made about production deployment, prediction accuracy, or lending decisions.', zh: '不宣稱已上線、預測準確率或實際授信決策。' },
    nextSteps: { en: 'Continue model validation, add authentic outputs, and document assumptions and edge cases.', zh: '持續模型驗證、補上真實輸出，並記錄假設與例外情況。' },
    artifacts: { en: 'Public GitHub repository; no live demo supplied.', zh: '公開 GitHub repository；尚未提供線上示範。' },
  },
  'corporate-finance-fpa-platform': {
    status: 'roadmap', lastUpdated: { en: 'Planned for September 2026', zh: '規劃於 2026 年 9 月' },
    problem: { en: 'Help management connect budget variance to price, volume, mix, cost, working capital, and cash decisions.', zh: '協助管理層把預算差異連結到價格、銷量、組合、成本、營運資金與現金決策。' },
    targetUser: { en: 'CFOs, FP&A teams, and operating leaders.', zh: 'CFO、FP&A 團隊與營運主管。' },
    methodology: { en: 'Proposed driver-based forecasting, budget-versus-actual analysis, scenario planning, and management recommendations.', zh: '規劃 driver-based forecasting、預算與實際差異、情境規劃與管理建議。' },
    technology: { en: 'Proposed Excel, Power BI, DAX, Power Query, Python, and SQL.', zh: '規劃使用 Excel、Power BI、DAX、Power Query、Python 與 SQL。' },
    financialRelevance: { en: 'The intended scope connects operating drivers to EBITDA, cash flow, liquidity, and resource allocation.', zh: '規劃將營運驅動因子連結至 EBITDA、現金流、流動性與資源配置。' },
    limitations: { en: 'Roadmap only. No implementation, artifact, user, or outcome is claimed.', zh: '目前僅為規劃，不宣稱已有實作、成果檔案、使用者或結果。' },
    nextSteps: { en: 'Define the first driver model and confirm scope before implementation.', zh: '確認第一個 driver model 與範圍後再開始實作。' },
    artifacts: { en: 'Artifact coming after validation.', zh: '完成驗證後補上成果檔案。' },
  },
}

export function copy<T extends Localized>(value: T, language: Language) { return value[language] }
