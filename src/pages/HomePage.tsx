import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Github, Handshake, Instagram, Linkedin, Mail, Mouse } from 'lucide-react'
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProgressRail from '../components/ProgressRail'
import { useLanguage } from '../content/language'
import { copy, experiences, profile } from '../content/portfolio'

const JourneyCanvas = lazy(() => import('../components/JourneyCanvas'))

export default function HomePage() {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const activeIndex = Math.min(experiences.length - 1, Math.round(progress * (experiences.length - 1)))
  const active = experiences[hovered ?? activeIndex]
  const isHero = progress < 0.055

  const jump = useCallback((index: number) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: max * (index / (experiences.length - 1)), behavior: 'smooth' })
  }, [])

  const sceneKey = useMemo(() => `${active.slug}-${language}-${hovered ?? 'active'}`, [active.slug, language, hovered])

  return (
    <main className="journey-page">
      <Header onJump={jump} />
      <div className="canvas-layer" aria-hidden="true">
        <Suspense fallback={<div className="canvas-loading" />}>
          <JourneyCanvas experiences={experiences} progress={progress} activeIndex={activeIndex} onHover={setHovered} onOpen={(slug) => navigate(`/experience/${slug}`)} />
        </Suspense>
      </div>

      <div className="journey-overlay">
        <AnimatePresence mode="wait">
          {isHero ? (
            <motion.section className="hero-copy" key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <h1>Fang Han Chang</h1>
              <h2>{language === 'en' ? 'Finance × Analytics × Product' : '財務 × 分析 × 產品'}</h2>
              <p>{language === 'en' ? 'I turn complex decisions into clear, useful products.' : '我把複雜的決策，轉化成清楚而實用的產品。'}</p>
              <button className="primary-button" onClick={() => jump(1)}>
                {language === 'en' ? 'Begin the journey' : '開始這段旅程'} <ArrowRight size={20} />
              </button>
            </motion.section>
          ) : (
            <motion.section className="chapter-panel" key={sceneKey} initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.35 }}>
              <div className="chapter-year">{active.year}</div>
              <h2>{copy(active.title, language)}</h2>
              <p className="chapter-role">{copy(active.role, language)}</p>
              <p className="chapter-summary">{copy(active.summary, language)}</p>
              <button className="text-button" onClick={() => navigate(`/experience/${active.slug}`)}>
                {language === 'en' ? 'More…' : '更多…'} <ArrowRight size={18} />
              </button>
              {activeIndex === experiences.length - 1 && (
                <div className="contact-links" aria-label={language === 'en' ? 'Connect with Fang Han Chang' : '聯絡 Fang Han Chang'}>
                  <span className="contact-label">{language === 'en' ? 'Connect' : '聯絡我'}</span>
                  <a href={`mailto:${profile.email}`}><Mail size={16} /><span>Email</span></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LinkedIn</span></a>
                  <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /><span>GitHub</span></a>
                  <a href={profile.instagram} target="_blank" rel="noreferrer"><Instagram size={16} /><span>Instagram</span></a>
                  <a href={profile.handshake} target="_blank" rel="noreferrer"><Handshake size={16} /><span>Handshake</span></a>
                </div>
              )}
            </motion.section>
          )}
        </AnimatePresence>

        <div className="scroll-cue"><Mouse size={22} /><span>{language === 'en' ? 'Scroll to travel' : '滾動探索路徑'}</span></div>
      </div>
      <ProgressRail progress={progress} onJump={jump} />
      <div className="scroll-space" />
    </main>
  )
}
