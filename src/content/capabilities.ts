import type { Language } from './language'

export type CapabilityStatus = 'demonstrated' | 'developing'
export type CapabilityCategory = 'finance' | 'analytics' | 'technical' | 'business' | 'communication'
type Localized = Record<Language, string>

export type CapabilityEvidence = { label: Localized; href: string; type: 'project' | 'experience' | 'education' | 'credential' | 'artifact' }
export type Capability = {
  id: string
  name: Localized
  category: CapabilityCategory
  status: CapabilityStatus
  evidenceItems: CapabilityEvidence[]
  explanation: Localized
  lastVerifiedAt?: string
}

export const capabilities: Capability[] = [
  {
    id: 'financial-analysis', name: { en: 'Financial Analysis', zh: '財務分析' }, category: 'finance', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'B.S. Finance · UVU', zh: 'Utah Valley University · 財務學士' }, href: '/experience/uvu-graduation', type: 'education' }, { label: { en: 'InvestIQ', zh: 'InvestIQ' }, href: '/projects/investiq', type: 'project' }],
    explanation: { en: 'Finance coursework and applied investment products connect statements, assumptions, and decisions.', zh: '財務課程與投資產品經驗，將報表、假設與決策連結起來。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'financial-modeling', name: { en: 'Financial Modeling', zh: '財務建模' }, category: 'finance', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'Investment Growth Calculator', zh: 'Investment Growth Calculator' }, href: '/projects/investment-growth-calculator', type: 'project' }, { label: { en: 'Financial modeling coursework', zh: '財務建模課程基礎' }, href: '/experience/uvu-graduation', type: 'education' }],
    explanation: { en: 'Built an early MVP around compound growth, recurring contributions, and scenario assumptions.', zh: '以複利成長、定期投入與情境假設建立早期 MVP。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'business-analytics', name: { en: 'Business Analytics', zh: '商業分析' }, category: 'analytics', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'Incoming M.S. Business Analytics · Boston University', zh: '即將就讀 Boston University 商業分析碩士' }, href: '/experience/boston-university', type: 'education' }, { label: { en: 'Portfolio decision tools', zh: '作品集決策工具' }, href: '/projects', type: 'project' }],
    explanation: { en: 'Combines a finance foundation with structured analysis, visualization, and decision-support product work.', zh: '結合財務基礎、結構化分析、視覺化與決策支援產品工作。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'scenario-analysis', name: { en: 'Scenario Analysis', zh: '情境分析' }, category: 'analytics', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'Investment Growth Calculator', zh: 'Investment Growth Calculator' }, href: '/projects/investment-growth-calculator', type: 'project' }, { label: { en: 'Mochilune go / no-go decision', zh: 'Mochilune 推出／暫停判斷' }, href: '/experience/mochilune', type: 'experience' }],
    explanation: { en: 'Uses explicit assumptions and alternatives to make financial and product decisions easier to compare.', zh: '用明確假設與替代情境，讓財務與產品決策更容易比較。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'investment-analytics', name: { en: 'Investment Analytics', zh: '投資分析' }, category: 'finance', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'InvestIQ · active public repository', zh: 'InvestIQ · 公開進行中 repository' }, href: '/projects/investiq', type: 'project' }, { label: { en: 'Investment Growth Calculator', zh: 'Investment Growth Calculator' }, href: '/projects/investment-growth-calculator', type: 'project' }],
    explanation: { en: 'Applies financial questions to an evolving public product; advanced research claims remain clearly in development.', zh: '把財務問題應用到持續迭代的公開產品；進階研究聲明仍清楚標示為發展中。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'corporate-credit-analysis', name: { en: 'Corporate Credit Analysis', zh: '企業信用分析' }, category: 'finance', status: 'developing',
    evidenceItems: [{ label: { en: 'Northstar Credit Platform · in development', zh: 'Northstar Credit Platform · 開發中' }, href: '/projects/northstar-credit-platform', type: 'project' }],
    explanation: { en: 'Being strengthened through a deterministic credit engine covering debt capacity, DSCR, coverage, stress testing, and validation.', zh: '透過確定性信用引擎持續建立，範圍包含債務承受力、DSCR、保障倍數、壓力測試與驗證。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'technical-product-development', name: { en: 'Python & TypeScript Product Development', zh: 'Python 與 TypeScript 產品開發' }, category: 'technical', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'Public GitHub repositories', zh: '公開 GitHub repositories' }, href: 'https://github.com/changfanghan0324', type: 'artifact' }, { label: { en: 'Tutor Platform · live site', zh: 'Tutor Platform · 線上網站' }, href: 'https://utah-tutor-web.vercel.app', type: 'project' }],
    explanation: { en: 'Uses version control, responsive interfaces, debugging, and deployment workflows to turn analysis into usable products.', zh: '運用版本控制、響應式介面、除錯與部署流程，把分析轉成可使用的產品。' }, lastVerifiedAt: '2026-08-08',
  },
  {
    id: 'cross-cultural-stakeholder-communication', name: { en: 'Cross-cultural Stakeholder Communication', zh: '跨文化利害關係人溝通' }, category: 'communication', status: 'demonstrated',
    evidenceItems: [{ label: { en: 'Chinese Teaching Assistant', zh: '中文助教' }, href: '/experience/chinese-teaching-assistant', type: 'experience' }, { label: { en: 'Study-abroad coordination', zh: '海外學習計畫協調' }, href: '/experience/study-abroad-coordination', type: 'experience' }],
    explanation: { en: 'Adapts explanations, aligns stakeholders, and keeps communication practical across different backgrounds.', zh: '依不同背景調整解釋、協調利害關係人，並維持溝通的實用性。' }, lastVerifiedAt: '2026-08-08',
  },
]

export const capabilityCategories: CapabilityCategory[] = ['finance', 'analytics', 'technical', 'business', 'communication']

export const strengths = [
  { name: 'Individualization', summary: { en: 'Adapts explanations and support to the individual in front of him.', zh: '依照眼前每個人的需求調整解釋與支持。' }, workplace: { en: ['Personalized problem-solving', 'Team composition', 'Audience adaptation'], zh: ['個人化問題解決', '團隊組成', '受眾調整'] }, evidence: { en: 'Chinese teaching support across different proficiency levels.', zh: '針對不同程度學習者提供中文教學支持。' } },
  { name: 'Empathy', summary: { en: 'Recognizes another person’s perspective and context before choosing an approach.', zh: '在選擇方法前先理解他人的觀點與脈絡。' }, workplace: { en: ['Active listening', 'Relationship building', 'Student support'], zh: ['主動傾聽', '關係建立', '學生支持'] }, evidence: { en: 'Student support, tutoring, and cross-cultural communication.', zh: '學生支持、家教平台與跨文化溝通。' } },
  { name: 'Connectedness', summary: { en: 'Builds links across people, cultures, communities, and ideas.', zh: '連結人、文化、社群與想法。' }, workplace: { en: ['Cross-cultural collaboration', 'Community building', 'Stakeholder alignment'], zh: ['跨文化協作', '社群建立', '利害關係人對齊'] }, evidence: { en: 'Chinese Club growth and multi-country study-abroad coordination.', zh: 'Chinese Club 成長與多國海外學習計畫協調。' } },
  { name: 'Activator', summary: { en: 'Moves from an idea toward implementation and learns through doing.', zh: '把想法推向實作，並在行動中學習。' }, workplace: { en: ['Action orientation', 'Initiative', 'Project execution'], zh: ['行動導向', '主動性', '專案執行'] }, evidence: { en: 'Community events, public MVPs, and project iterations.', zh: '社群活動、公開 MVP 與專案迭代。' } },
  { name: 'Restorative', summary: { en: 'Investigates problems and works toward practical repairs.', zh: '調查問題，並朝向實際修正前進。' }, workplace: { en: ['Troubleshooting', 'Continuous improvement', 'Structured problem-solving'], zh: ['除錯', '持續改善', '結構化問題解決'] }, evidence: { en: 'Operational problem solving, debugging, and go / no-go decisions.', zh: '營運問題解決、除錯與推出／暫停判斷。' } },
]
