import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CircleCheck, Clock3, GitBranch, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { experiences } from '../content/portfolio'

const projectSlugs = ['tutor-platform', 'investment-growth-calculator', 'investiq', 'northstar-credit-platform', 'corporate-finance-fpa-platform']
const statuses: Record<string, { label: string; icon: typeof Clock3 }> = {
  'tutor-platform': { label: 'Built', icon: CircleCheck }, 'investment-growth-calculator': { label: 'MVP', icon: GitBranch },
  investiq: { label: 'In development', icon: Sparkles }, 'northstar-credit-platform': { label: 'In development', icon: Sparkles },
  'corporate-finance-fpa-platform': { label: 'Planned', icon: Clock3 },
}

export default function ProjectsPage() {
  const projects = useMemo(() => projectSlugs.map((slug) => experiences.find((item) => item.slug === slug)).filter(Boolean) as typeof experiences, [])
  const [selectedSlug, setSelectedSlug] = useState('investiq')
  const selected = projects.find((project) => project.slug === selectedSlug) ?? projects[0]
  const StatusIcon = statuses[selected.slug].icon

  return (
    <main className="projects-page">
      <Header />
      <div className="projects-backdrop" aria-hidden="true"><img src={selected.scene} alt="" /></div>
      <div className="projects-content">
        <header className="projects-intro"><h1>Products that turn<br />analysis into action.</h1><p>Explore finished MVPs, active public repositories, and planned financial decision-support systems.</p></header>
        <div className="project-horizon" aria-label="Project timeline">
          {projects.map((project) => <button key={project.slug} className={project.slug === selected.slug ? 'active' : ''} onClick={() => setSelectedSlug(project.slug)}><span>{project.year}</span><strong>{project.title.en}</strong><small>{statuses[project.slug].label}</small></button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.section className="project-focus" key={selected.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}>
            <div className="project-focus-copy">
              <span className="project-status"><StatusIcon size={15} />{statuses[selected.slug].label}</span>
              <h2>{selected.title.en}</h2><p className="project-role">{selected.role.en} · {selected.period.en}</p><p>{selected.summary.en}</p>
              <ul>{selected.highlights.en.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="project-actions"><Link to={`/experience/${selected.slug}`}>Full project story <ArrowRight size={16} /></Link>{selected.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={15} /></a>)}</div>
            </div>
            <div className="project-skill-river">{selected.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </motion.section>
        </AnimatePresence>
        <div className="project-evolution"><span>Product evolution</span><strong>Investment Growth Calculator</strong><i /><strong>InvestIQ</strong><p>The June–July calculator was the early MVP; InvestIQ became the expanded investment analytics platform on July 28, 2026.</p></div>
      </div>
    </main>
  )
}
