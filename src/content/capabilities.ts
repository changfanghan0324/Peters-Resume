export type CapabilityStatus = 'demonstrated' | 'developing'
export type CapabilityCategory = 'Finance' | 'Analytics' | 'Technical' | 'Business' | 'Leadership' | 'Communication' | 'Product'

export type Capability = {
  name: string
  category: CapabilityCategory
  status: CapabilityStatus
  evidence: string
  detail: string
  href: string
}

const demonstrated: Record<CapabilityCategory, string[]> = {
  Finance: ['Corporate Finance', 'Financial Analysis', 'Capital Budgeting', 'Financial Modeling', 'Forecasting', 'Time Value of Money', 'Compound-growth Modeling', 'NPV', 'IRR', 'Financial Statement Analysis', 'Investment Analysis', 'Portfolio Analysis', 'Scenario Analysis', 'Risk-and-return Analysis', 'Budgeting', 'Pricing Research', 'Market Research', 'Competitive Analysis', 'Data-driven Financial Decision-making'],
  Analytics: ['Business Analytics', 'Financial Analytics', 'Data Analysis', 'Statistics Fundamentals', 'Forecasting', 'Scenario Modeling', 'Data Visualization', 'Excel Data Visualization', 'KPI Analysis', 'Trend Analysis', 'Dashboard Thinking', 'Business Intelligence Fundamentals', 'Translating Data into Actionable Insights', 'Structured Problem-solving'],
  Technical: ['Python', 'NumPy', 'SQL', 'Git', 'GitHub', 'Next.js', 'HTML', 'CSS', 'Vercel', 'Shopify', 'Canva', 'Microsoft Office', 'Excel', 'TypeScript Web Development', 'Deployment Workflow', 'Pull Requests', 'Version Control', 'Repository Management', 'Product Iteration', 'Responsive Web Interfaces', 'Error Debugging'],
  Business: ['Market Research', 'Competitive Analysis', 'Pricing Strategy', 'Product Positioning', 'Product Development', 'Customer Validation', 'Go / No-go Analysis', 'Budget Management', 'Vendor Sourcing', 'Manufacturer Evaluation', 'Business Case Development', 'Scenario Planning', 'Strategic Decision-making', 'Product Roadmapping', 'User Journey Design', 'Data-driven Decision-making', 'Project Execution', 'Risk Assessment'],
  Leadership: ['Team Leadership', 'Staff Coordination', 'Employee Training', 'Event Planning', 'Vendor Management', 'Budget Allocation', 'Membership Growth', 'Community Building', 'On-site Logistics', 'Contingency Planning', 'Cash Reconciliation', 'Order Flow Management', 'Customer Service', 'Resource Allocation', 'Conflict Resolution', 'Cross-functional Coordination', 'Operating Under Pressure'],
  Communication: ['Bilingual Communication', 'Chinese', 'English', 'Cross-cultural Communication', 'Teaching', 'Tutoring', 'Public Speaking', 'Presentation', 'Explaining Complex Concepts', 'Individualized Instruction', 'Active Listening', 'Stakeholder Communication', 'Relationship Building', 'Student Support', 'Audience Adaptation'],
  Product: ['Product Ideation', 'MVP Development', 'Web Product Development', 'User-centered Design', 'Product Validation', 'Market Validation', 'Founder Decision-making', 'Self-funded Budget Management', 'UI / UX Thinking', 'Product Iteration', 'Deployment', 'Multilingual Product Design', 'Educational Technology', 'FinTech Product Development'],
}

const developing: Record<CapabilityCategory, string[]> = {
  Finance: ['Equity Research', 'Backtesting', 'Portfolio Risk Analytics', 'Benchmark Analysis', 'DCF Valuation', 'Comparable-company Analysis', 'Sharpe Ratio', 'Maximum Drawdown', 'Beta', 'Correlation Analysis', 'Value at Risk', 'Corporate Credit Analysis', 'Debt Capacity', 'Credit Risk', 'DSCR', 'Interest Coverage', 'Covenant Analysis', 'Stress Testing', 'Credit Memo Writing', 'FP&A', 'Working Capital Management', 'Cash Flow Forecasting', 'Margin Analysis'],
  Analytics: ['Time-Series Forecasting', 'Variance Decomposition', 'Sensitivity Analysis', 'Risk Modeling', 'Credit Scoring', 'Reverse-stress Analysis', 'Financial Engine Validation'],
  Technical: ['pandas', 'FastAPI', 'PostgreSQL', 'API Design', 'Automated Testing', 'Data Pipelines', 'Power BI', 'DAX', 'Power Query', 'Power Automate', 'Accessibility Testing', 'Localization', 'Traditional Chinese Interface Design'],
  Business: ['Business Partnering', 'Management Reporting', 'Recommendation Development', 'Cross-functional Decision Support'],
  Leadership: ['Executive Presentation', 'People-centered Leadership'],
  Communication: ['Management Communication', 'Presentation to Executives'],
  Product: ['Deterministic Financial Engine Design', 'Independent Cross-model Verification'],
}

const evidenceByCategory: Record<CapabilityCategory, { evidence: string; detail: string; href: string }> = {
  Finance: { evidence: 'B.S. Finance · UVU + finance products', detail: 'Supported by finance coursework and applied modeling in the Investment Growth Calculator and InvestIQ.', href: '/experience/uvu-graduation' },
  Analytics: { evidence: 'Education + portfolio projects', detail: 'Applied through finance coursework, scenario models, dashboards, and decision-support product development.', href: '/projects' },
  Technical: { evidence: 'Public GitHub repositories', detail: 'Demonstrated through TypeScript and Python repositories, version control, debugging, responsive interfaces, and Vercel deployment.', href: 'https://github.com/changfanghan0324' },
  Business: { evidence: 'Mochilune + Chinese Club', detail: 'Applied to market validation, pricing, sourcing, budgets, go / no-go judgment, and resource allocation.', href: '/experience/mochilune' },
  Leadership: { evidence: 'Chinese Club + Sukiya + Night Market', detail: 'Built through community growth, frontline operations, team coordination, training, and live-event execution.', href: '/experience/uvu-community' },
  Communication: { evidence: 'Chinese TA + study-abroad coordination', detail: 'Built through individualized teaching, public speaking, active listening, and cross-cultural stakeholder coordination.', href: '/experience/chinese-teaching-assistant' },
  Product: { evidence: 'Tutor Platform + InvestIQ + Mochilune', detail: 'Applied from MVP definition and user journeys through validation, iteration, deployment, and evidence-based product decisions.', href: '/projects' },
}

const developingEvidence: Partial<Record<string, { evidence: string; detail: string; href: string }>> = {
  'Equity Research': { evidence: 'InvestIQ · In development', detail: 'Part of the active investment analytics product scope; presented as developing until validated by completed analysis and artifacts.', href: '/experience/investiq' },
  'DCF Valuation': { evidence: 'InvestIQ · In development', detail: 'Planned and being strengthened within the investment decision-support workflow.', href: '/experience/investiq' },
  'Portfolio Risk Analytics': { evidence: 'InvestIQ · In development', detail: 'Risk and return presentation is active; advanced portfolio metrics remain explicitly marked as developing.', href: '/experience/investiq' },
  'Corporate Credit Analysis': { evidence: 'Northstar Credit Platform · In development', detail: 'Being developed through a deterministic credit engine covering debt capacity, coverage, stress testing, and validation.', href: '/experience/northstar-credit-platform' },
  'DSCR': { evidence: 'Northstar Credit Platform · In development', detail: 'A core model scope item, not represented as an advanced completed capability.', href: '/experience/northstar-credit-platform' },
  'Stress Testing': { evidence: 'Northstar Credit Platform · In development', detail: 'Being strengthened through downside, severe, and reverse-stress model design.', href: '/experience/northstar-credit-platform' },
  'FastAPI': { evidence: 'Project architecture · Planned', detail: 'Part of the planned service architecture; retained under in-development skills.', href: '/experience/northstar-credit-platform' },
  'PostgreSQL': { evidence: 'Project architecture · Planned', detail: 'Part of the planned data layer and therefore not shown as a completed advanced skill.', href: '/projects' },
  'FP&A': { evidence: 'FP&A Decision Platform · Planned', detail: 'Planned for September 2026 and kept separate from demonstrated skills until implementation evidence exists.', href: '/experience/corporate-finance-fpa-platform' },
  'Power BI': { evidence: 'FP&A Decision Platform · Planned', detail: 'Included in the planned project stack and intentionally labeled in development.', href: '/experience/corporate-finance-fpa-platform' },
}

export const capabilities: Capability[] = [
  ...Object.entries(demonstrated).flatMap(([category, names]) => names.map((name) => ({ name, category: category as CapabilityCategory, status: 'demonstrated' as const, ...evidenceByCategory[category as CapabilityCategory] }))),
  ...Object.entries(developing).flatMap(([category, names]) => names.map((name) => ({
    name,
    category: category as CapabilityCategory,
    status: 'developing' as const,
    ...(developingEvidence[name] ?? {
      evidence: `${category} project scope · In development`,
      detail: 'This capability is currently being strengthened through active or planned project work and is not represented as advanced.',
      href: '/projects',
    }),
  }))),
]

export const capabilityCategories = Object.keys(demonstrated) as CapabilityCategory[]

export const strengths = [
  { name: 'Individualization', summary: 'Understands the distinct needs and strengths of different people.', workplace: ['Personalized Problem-solving', 'Team Composition', 'Audience Adaptation'], evidence: 'Individualized teaching and people-centered community leadership.' },
  { name: 'Empathy', summary: 'Recognizes other people’s emotions, perspectives, and context.', workplace: ['Empathy', 'Active Listening', 'Relationship Building'], evidence: 'Student support, tutoring, and cross-cultural communication.' },
  { name: 'Connectedness', summary: 'Builds links across people, cultures, communities, and ideas.', workplace: ['Cross-cultural Collaboration', 'Community Building', 'Stakeholder Alignment'], evidence: 'Chinese Club growth and multi-country study-abroad coordination.' },
  { name: 'Activator', summary: 'Moves ideas toward action and learns through doing.', workplace: ['Action Orientation', 'Initiative', 'Project Execution'], evidence: 'Launching community events, products, and public project iterations.' },
  { name: 'Restorative', summary: 'Finds problems, investigates causes, and works toward practical repairs.', workplace: ['Troubleshooting', 'Continuous Improvement', 'Structured Problem-solving'], evidence: 'Operational problem solving, debugging, and evidence-based go / no-go decisions.' },
]
