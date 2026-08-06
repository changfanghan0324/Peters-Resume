import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { strengths } from '../content/capabilities'

export default function StrengthsPage() {
  const [selectedName, setSelectedName] = useState('Connectedness')
  const selected = strengths.find((strength) => strength.name === selectedName) ?? strengths[0]
  return (
    <main className="strengths-page">
      <Header />
      <div className="strengths-landscape" aria-hidden="true"><img src="./assets/scenes/origins.png" alt="" /></div>
      <div className="strengths-content">
        <header><h1>How I naturally<br />move work forward.</h1><p>Gallup CliftonStrengths · Top Five completed in 2026</p></header>
        <div className="strength-constellation" aria-label="Top five CliftonStrengths"><i />{strengths.map((strength, index) => <button key={strength.name} className={selected.name === strength.name ? 'active' : ''} onClick={() => setSelectedName(strength.name)} onMouseEnter={() => setSelectedName(strength.name)}><span>{String(index + 1).padStart(2, '0')}</span><b><Sparkles size={16} /></b><strong>{strength.name}</strong></button>)}</div>
        <AnimatePresence mode="wait"><motion.section className="strength-focus" key={selected.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}><span>Selected strength</span><h2>{selected.name}</h2><p>{selected.summary}</p><div>{selected.workplace.map((item) => <strong key={item}>{item}</strong>)}</div><small>Evidence · {selected.evidence}</small></motion.section></AnimatePresence>
        <footer><Link to="/skills">See the full capability inventory <ArrowRight size={17} /></Link><Link to="/experience">Explore the experience atlas <ArrowRight size={17} /></Link></footer>
      </div>
    </main>
  )
}
