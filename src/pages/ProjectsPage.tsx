import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CircleCheck, Clock3, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { copy, pathFor, useI18n } from '../content/language'
import { experiences, projectMeta } from '../content/portfolio'

const projectSlugs = ['tutor-platform', 'investment-growth-calculator', 'investiq', 'northstar-credit-platform', 'corporate-finance-fpa-platform']
const statusIcon = { completed: CircleCheck, 'in-development': Sparkles, roadmap: Clock3 } as const

export default function ProjectsPage() {
  const { language, t } = useI18n()
  const projects = useMemo(() => projectSlugs.map((slug) => experiences.find((item) => item.slug === slug)).filter(Boolean) as typeof experiences, [])
  const [selectedSlug, setSelectedSlug] = useState('investiq')
  const selected = projects.find((project) => project.slug === selectedSlug) ?? projects[0]
  const meta = projectMeta[selected.slug]
  const StatusIcon = statusIcon[meta.status]
  const statusLabel = meta.status === 'completed' ? t.status.completed : meta.status === 'roadmap' ? t.status.roadmap : t.status.inDevelopment
  return <main className="projects-page" id="main-content"><Header /><div className="projects-backdrop" aria-hidden="true"><img src={`/${selected.scene}`} alt="" /></div><div className="projects-content"><header className="projects-intro"><h1>{t.projects.title}</h1><p>{t.projects.description}</p></header><div className="project-status-guide" role="note"><span><CircleCheck size={14} aria-hidden="true" />{t.status.completed}</span><span><Sparkles size={14} aria-hidden="true" />{t.status.inDevelopment}</span><span><Clock3 size={14} aria-hidden="true" />{t.status.roadmap}</span></div><div className="project-horizon" aria-label={t.projects.select}>{projects.map((project) => { const itemMeta = projectMeta[project.slug]; const itemStatus = itemMeta.status === 'completed' ? t.status.completed : itemMeta.status === 'roadmap' ? t.status.roadmap : t.status.inDevelopment; return <button key={project.slug} className={project.slug === selected.slug ? 'active' : ''} onClick={() => setSelectedSlug(project.slug)} aria-pressed={project.slug === selected.slug}><span>{project.year}</span><strong>{copy(project.title, language)}</strong><small>{itemStatus}</small></button> })}</div><AnimatePresence mode="wait"><motion.section className="project-focus" key={selected.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}><div className="project-focus-copy"><span className={`project-status ${meta.status}`}><StatusIcon size={15} aria-hidden="true" />{statusLabel}</span><h2>{copy(selected.title, language)}</h2><p className="project-role">{copy(selected.role, language)} · {copy(selected.period, language)}</p><p>{copy(selected.summary, language)}</p>{meta.lastUpdated && <p className="project-last-updated">{t.status.lastUpdated}: {copy(meta.lastUpdated, language)}</p>}<ul>{selected.highlights[language].map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="project-actions"><Link to={pathFor(`/projects/${selected.slug}`, language)}>{t.projects.caseStudy} <ArrowRight size={16} aria-hidden="true" /></Link>{selected.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label === 'GitHub' ? t.status.github : t.status.liveDemo}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></div><div className="project-skill-river">{selected.skills.slice(0, 8).map((skill) => <span key={skill}>{skill}</span>)}</div></motion.section></AnimatePresence><div className="project-evolution"><span>{t.projects.evolution}</span><strong>{copy(experiences.find((item) => item.slug === 'investment-growth-calculator')!.title, language)}</strong><i /><strong>InvestIQ</strong><p>{copy(experiences.find((item) => item.slug === 'investment-growth-calculator')!.outcome, language)}</p></div></div></main>
}
