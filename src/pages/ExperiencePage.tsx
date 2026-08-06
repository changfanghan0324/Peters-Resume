import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, GraduationCap, Layers3, Lightbulb, MapPin, Route } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { experiences, type Experience, type ExperienceCategory } from '../content/portfolio'

type AtlasFilter = 'All' | 'Work' | 'Education' | 'Projects'
const filters: AtlasFilter[] = ['All', 'Work', 'Education', 'Projects']
const workCategories = new Set<ExperienceCategory>(['leadership', 'operations', 'entrepreneurship'])

const branchMeta: Record<ExperienceCategory, { label: string; icon: typeof Route }> = {
  life: { label: 'Life', icon: Route }, leadership: { label: 'Leadership', icon: Lightbulb }, operations: { label: 'Operations', icon: BriefcaseBusiness },
  education: { label: 'Education', icon: GraduationCap }, entrepreneurship: { label: 'Entrepreneurship', icon: Layers3 }, project: { label: 'FinTech', icon: Layers3 },
}

function included(item: Experience, filter: AtlasFilter) {
  if (filter === 'All') return true
  if (filter === 'Work') return workCategories.has(item.category)
  if (filter === 'Education') return item.category === 'education'
  return item.category === 'project'
}

export default function ExperiencePage() {
  const [filter, setFilter] = useState<AtlasFilter>('All')
  const [selectedSlug, setSelectedSlug] = useState('study-abroad-coordination')
  const roadRef = useRef<HTMLDivElement>(null)
  const visible = useMemo(() => experiences.filter((item) => included(item, filter)), [filter])
  const selected = experiences.find((item) => item.slug === selectedSlug) ?? visible[0]

  useEffect(() => {
    const road = roadRef.current
    const active = road?.querySelector<HTMLElement>('.atlas-node.active')
    if (!road || !active) return
    road.scrollTo({ left: active.offsetLeft - road.clientWidth / 2 + active.clientWidth / 2, behavior: 'smooth' })
  }, [filter, selectedSlug])

  const chooseFilter = (next: AtlasFilter) => {
    setFilter(next)
    const nextVisible = experiences.find((item) => included(item, next))
    if (nextVisible && !included(selected, next)) setSelectedSlug(nextVisible.slug)
  }

  return (
    <main className="atlas-page">
      <Header />
      <div className="atlas-landscape" aria-hidden="true"><img src="./assets/scenes/study-abroad.png" alt="" /><div /></div>
      <div className="atlas-content">
        <header className="atlas-intro">
          <h1>Every chapter<br />adds a new capability.</h1>
          <p>Explore the moments, roles, education, and projects that shaped my path across finance, analytics, and product development.</p>
          <div className="atlas-filters" aria-label="Filter experience atlas">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => chooseFilter(item)}>{item}</button>)}</div>
        </header>

        <div className="atlas-explorer">
          <div className="atlas-road" aria-label="Experience timeline" ref={roadRef}>
            <i className="atlas-road-line" />
            {visible.map((item, index) => {
              const meta = branchMeta[item.category]
              const Icon = meta.icon
              return (
                <button key={item.slug} className={`atlas-node ${item.slug === selected.slug ? 'active' : ''}`} onClick={() => setSelectedSlug(item.slug)} style={{ '--node-order': index } as CSSProperties}>
                  <span className="atlas-node-dot" />
                  <span className="atlas-node-year">{item.year}</span>
                  <strong>{item.title.en}</strong>
                  <small><Icon size={13} />{meta.label}</small>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.aside className="atlas-drawer" key={selected.slug} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}>
              <div className="atlas-drawer-top"><span>{selected.year}</span><small>{branchMeta[selected.category].label}</small></div>
              <h2>{selected.title.en}</h2>
              <p className="atlas-role">{selected.role.en}</p>
              <p>{selected.summary.en}</p>
              <div className="atlas-place"><MapPin size={14} />{selected.place.en} · {selected.period.en}</div>
              <ul>{selected.highlights.en.slice(0, 4).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="atlas-skill-line">{selected.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div>
              <Link to={`/experience/${selected.slug}`}>View full chapter <ArrowRight size={17} /></Link>
            </motion.aside>
          </AnimatePresence>
        </div>
        <div className="atlas-continuation"><span>Fifteen verified chapters · more can be added without rebuilding the page</span><Link to="/projects">Continue to projects <ArrowRight size={17} /></Link></div>
      </div>
    </main>
  )
}
