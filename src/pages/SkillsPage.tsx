import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CircleCheck, FlaskConical } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { capabilities, type CapabilityStatus } from '../content/capabilities'
import { copy, pathFor, useI18n } from '../content/language'

export default function SkillsPage() {
  const { language, t } = useI18n()
  const [status, setStatus] = useState<CapabilityStatus>('demonstrated')
  const visible = useMemo(() => capabilities.filter((item) => item.status === status), [status])
  const [selectedId, setSelectedId] = useState('financial-analysis')
  const selected = visible.find((item) => item.id === selectedId) ?? visible[0]
  const chooseStatus = (next: CapabilityStatus) => { setStatus(next); const first = capabilities.find((item) => item.status === next); if (first) setSelectedId(first.id) }
  const openEvidence = (href: string) => href.startsWith('http') ? <a href={href} target="_blank" rel="noreferrer">{t.status.openEvidence} <ArrowUpRight size={16} aria-hidden="true" /></a> : <Link to={pathFor(href, language)}>{t.status.openEvidence} <ArrowRight size={16} aria-hidden="true" /></Link>
  return <main className="capability-page" id="main-content"><Header /><div className="capability-landscape" aria-hidden="true"><img src="/assets/scenes/bu.webp" alt="" /></div><div className="capability-content"><header className="capability-intro"><h1>{t.capabilities.title}</h1><p>{t.capabilities.description}</p></header><div className="capability-status" aria-label={t.capabilities.title}><button className={status === 'demonstrated' ? 'active' : ''} onClick={() => chooseStatus('demonstrated')} aria-pressed={status === 'demonstrated'}><CircleCheck size={17} aria-hidden="true" /><span>01</span>{t.capabilities.demonstrated}</button><button className={status === 'developing' ? 'active developing' : 'developing'} onClick={() => chooseStatus('developing')} aria-pressed={status === 'developing'}><FlaskConical size={17} aria-hidden="true" /><span>02</span>{t.capabilities.developing}</button></div><div className="capability-explorer"><div className="capability-rail" role="list" aria-label={t.capabilities.title}>{visible.map((item) => <button key={item.id} className={item.id === selected.id ? 'active' : ''} onClick={() => setSelectedId(item.id)} aria-pressed={item.id === selected.id}><i aria-hidden="true" />{copy(item.name, language)}</button>)}</div><AnimatePresence mode="wait"><motion.aside className="evidence-drawer" key={`${status}-${selected.id}`} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}><span>{status === 'demonstrated' ? t.capabilities.evidence : t.capabilities.development}</span><h2>{copy(selected.name, language)}</h2><p>{copy(selected.explanation, language)}</p><div className="evidence-items">{selected.evidenceItems.map((item) => <div key={item.href}><strong>{copy(item.label, language)}</strong><span>{item.type}</span></div>)}</div>{openEvidence(selected.evidenceItems[0].href)}</motion.aside></AnimatePresence></div><footer className="capability-footer"><p>{t.capabilities.note}</p><Link to={pathFor('/about', language)}>{t.capabilities.exploreAbout} <ArrowRight size={17} aria-hidden="true" /></Link></footer></div></main>
}
