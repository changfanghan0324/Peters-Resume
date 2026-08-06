import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CircleCheck, FlaskConical } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { capabilities, capabilityCategories, type CapabilityCategory, type CapabilityStatus } from '../content/capabilities'

export default function SkillsPage() {
  const [status, setStatus] = useState<CapabilityStatus>('demonstrated')
  const [category, setCategory] = useState<CapabilityCategory>('Finance')
  const visible = useMemo(() => capabilities.filter((item) => item.status === status && item.category === category), [status, category])
  const [selectedName, setSelectedName] = useState('Corporate Finance')
  const selected = visible.find((item) => item.name === selectedName) ?? visible[0]

  const chooseStatus = (next: CapabilityStatus) => { setStatus(next); const first = capabilities.find((item) => item.status === next && item.category === category); if (first) setSelectedName(first.name) }
  const chooseCategory = (next: CapabilityCategory) => { setCategory(next); const first = capabilities.find((item) => item.status === status && item.category === next); if (first) setSelectedName(first.name) }

  return (
    <main className="capability-page">
      <Header />
      <div className="capability-landscape" aria-hidden="true"><img src="./assets/scenes/bu.png" alt="" /></div>
      <div className="capability-content">
        <header className="capability-intro"><h1>Capability grows<br />through evidence.</h1><p>Explore what I can demonstrate today and what I am deliberately strengthening through current projects.</p></header>
        <div className="capability-status" aria-label="Capability status">
          <button className={status === 'demonstrated' ? 'active' : ''} onClick={() => chooseStatus('demonstrated')}><CircleCheck size={17} /><span>01</span>Demonstrated</button>
          <button className={status === 'developing' ? 'active developing' : 'developing'} onClick={() => chooseStatus('developing')}><FlaskConical size={17} /><span>02</span>In development</button>
        </div>
        <div className="capability-categories" aria-label="Skill categories">{capabilityCategories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => chooseCategory(item)}>{item}</button>)}</div>
        <div className="capability-explorer">
          <div className="capability-rail">{visible.map((item) => <button key={item.name} className={item.name === selected.name ? 'active' : ''} onClick={() => setSelectedName(item.name)} onMouseEnter={() => setSelectedName(item.name)}><i />{item.name}</button>)}</div>
          <AnimatePresence mode="wait"><motion.aside className="evidence-drawer" key={`${status}-${selected.name}`} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
            <span>{status === 'demonstrated' ? 'Evidence-backed capability' : 'Development status'}</span><h2>{selected.name}</h2><strong>{selected.evidence}</strong><p>{selected.detail}</p>
            {selected.href.startsWith('http') ? <a href={selected.href} target="_blank" rel="noreferrer">Open evidence <ArrowUpRight size={16} /></a> : <Link to={selected.href}>Open evidence <ArrowRight size={16} /></Link>}
          </motion.aside></AnimatePresence>
        </div>
        <footer className="capability-footer"><p>In-development skills are intentionally separated from demonstrated capabilities. No proficiency percentages or “advanced” labels are used.</p><Link to="/strengths">Explore CliftonStrengths <ArrowRight size={17} /></Link></footer>
      </div>
    </main>
  )
}
