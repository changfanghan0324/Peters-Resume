import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, GraduationCap, Layers3, Lightbulb, MapPin, Route } from 'lucide-react'
import { useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { copy, pathFor, useI18n } from '../content/language'
import { experiences, type Experience, type ExperienceCategory } from '../content/portfolio'

type AtlasFilter = 'professional' | 'leadership' | 'education' | 'projects' | 'personal'
const filters: AtlasFilter[] = ['professional', 'leadership', 'education', 'projects', 'personal']
const branchMeta: Record<ExperienceCategory, { en: string; zh: string; icon: typeof Route }> = {
  personal: { en: 'Personal journey', zh: '個人路徑', icon: Route }, leadership: { en: 'Leadership', zh: '領導經歷', icon: Lightbulb }, operations: { en: 'Professional', zh: '專業經歷', icon: BriefcaseBusiness }, education: { en: 'Education', zh: '教育', icon: GraduationCap }, entrepreneurship: { en: 'Professional', zh: '專業經歷', icon: BriefcaseBusiness }, project: { en: 'Projects', zh: '專案', icon: Layers3 },
}
function included(item: Experience, filter: AtlasFilter) {
  if (filter === 'professional') return item.category === 'operations' || item.category === 'entrepreneurship'
  if (filter === 'leadership') return item.category === 'leadership'
  if (filter === 'education') return item.category === 'education'
  if (filter === 'projects') return item.category === 'project'
  return item.category === 'personal'
}

export default function ExperiencePage() {
  const { language, t } = useI18n()
  const [filter, setFilter] = useState<AtlasFilter>('professional')
  const [selectedSlug, setSelectedSlug] = useState('sukiya-operations')
  const roadRef = useRef<HTMLDivElement>(null)
  const visible = useMemo(() => experiences.filter((item) => included(item, filter)), [filter])
  const selected = experiences.find((item) => item.slug === selectedSlug) ?? visible[0]
  const chooseFilter = (next: AtlasFilter) => { setFilter(next); const first = experiences.find((item) => included(item, next)); if (first) setSelectedSlug(first.slug) }
  return <main className="atlas-page" id="main-content"><Header /><div className="atlas-landscape" aria-hidden="true"><img src="/assets/scenes/study-abroad.webp" alt="" /><div /></div><div className="atlas-content"><header className="atlas-intro"><h1>{t.experience.title}</h1><p>{t.experience.description}</p><div className="atlas-filters" aria-label={t.experience.title}>{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => chooseFilter(item)} aria-pressed={filter === item}>{t.experience[item]}</button>)}</div></header><div className="atlas-explorer"><div className="atlas-road" aria-label={t.experience.title} ref={roadRef} tabIndex={0}><i className="atlas-road-line" />{visible.map((item, index) => { const meta = branchMeta[item.category]; const Icon = meta.icon; return <button key={item.slug} className={`atlas-node ${item.slug === selected.slug ? 'active' : ''}`} onClick={() => setSelectedSlug(item.slug)} style={{ '--node-order': index } as CSSProperties} aria-pressed={item.slug === selected.slug}><span className="atlas-node-dot" /><span className="atlas-node-year">{item.year}</span><strong>{copy(item.title, language)}</strong><small><Icon size={13} aria-hidden="true" />{meta[language]}</small></button> })}</div><AnimatePresence mode="wait"><motion.aside className="atlas-drawer" key={selected.slug} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}><div className="atlas-drawer-top"><span>{selected.year}</span><small>{branchMeta[selected.category][language]}</small></div><h2>{copy(selected.title, language)}</h2><p className="atlas-role">{copy(selected.role, language)}</p><p>{copy(selected.summary, language)}</p><div className="atlas-place"><MapPin size={14} aria-hidden="true" />{copy(selected.place, language)} · {copy(selected.period, language)}</div><ul>{selected.highlights[language].slice(0, 4).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="atlas-skill-line">{selected.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div><Link to={pathFor(`/experience/${selected.slug}`, language)}>{t.experience.view} <ArrowRight size={17} aria-hidden="true" /></Link></motion.aside></AnimatePresence></div><div className="atlas-continuation"><span>{t.experience.mapped}</span><Link to={pathFor('/projects', language)}>{t.nav.projects} <ArrowRight size={17} aria-hidden="true" /></Link></div></div></main>
}
