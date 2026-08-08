import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Mouse } from 'lucide-react'
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProgressRail from '../components/ProgressRail'
import { copy, pathFor, useI18n } from '../content/language'
import { experiences, profile } from '../content/portfolio'

const JourneyCanvas = lazy(() => import('../components/JourneyCanvas'))

export default function JourneyPage() {
  const { language, t } = useI18n()
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0) }
    update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update)
  }, [])
  const activeIndex = Math.min(experiences.length - 1, Math.round(progress * (experiences.length - 1)))
  const active = experiences[hovered ?? activeIndex]
  const isHero = progress < 0.045 && hovered === null
  const jump = useCallback((index: number) => { const max = document.documentElement.scrollHeight - window.innerHeight; window.scrollTo({ top: max * (index / (experiences.length - 1)), behavior: 'smooth' }) }, [])
  const beginJourney = useCallback(() => jump(1), [jump])
  const sceneKey = useMemo(() => `${active.slug}-${language}-${hovered ?? 'active'}`, [active.slug, language, hovered])
  return (
    <main className="journey-page" id="main-content">
      <Header onJump={jump} />
      <div className="canvas-layer"><Suspense fallback={<div className="canvas-loading" />}><JourneyCanvas experiences={experiences} progress={progress} activeIndex={activeIndex} onHover={setHovered} onOpen={(slug) => navigate(pathFor(`/experience/${slug}`, language))} /></Suspense></div>
      <a className="journey-skip" href={pathFor('/experience', language)}>{t.journey.skip}</a>
      <div className="journey-overlay">
        <AnimatePresence mode="wait">
          {isHero ? <motion.section className="hero-copy" key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><h1>{t.journey.title}</h1><h2>{t.hero.headline}</h2><p>{t.journey.description}</p><button className="primary-button" onClick={beginJourney}>{t.journey.begin} <ArrowRight size={20} aria-hidden="true" /></button></motion.section> : <motion.section className="chapter-panel" key={sceneKey} initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.25 }}><div className="chapter-marker"><span>{String((hovered ?? activeIndex) + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}</span><i /> <b>{active.year}</b></div><h2>{copy(active.title, language)}</h2><p className="chapter-role">{copy(active.role, language)}</p><p className="chapter-summary">{copy(active.summary, language)}</p><button className="text-button" onClick={() => navigate(pathFor(`/experience/${active.slug}`, language))}>{t.journey.more} <ArrowRight size={18} aria-hidden="true" /></button>{activeIndex === experiences.length - 1 && <div className="contact-links" aria-label={t.journey.connect}><span className="contact-label">{t.journey.connect}</span><a href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" /><span>{t.contact.email}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /><span>{t.contact.linkedin}</span></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /><span>{t.contact.github}</span></a></div>}</motion.section>}
        </AnimatePresence>
        <div className={`scroll-cue ${isHero ? '' : 'travelling'}`}><Mouse size={22} aria-hidden="true" /><span>{t.journey.scroll}</span></div>
      </div>
      <ProgressRail progress={progress} onJump={jump} />
      <div className="scroll-space" />
    </main>
  )
}
