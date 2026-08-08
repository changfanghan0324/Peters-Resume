import { ArrowRight, Github, Linkedin, Mail, Mouse } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import JourneyCanvas from '../components/JourneyCanvas'
import ProgressRail from '../components/ProgressRail'
import { copy, pathFor, useI18n } from '../content/language'
import { journeyChapters } from '../content/journey'
import { experiences, profile } from '../content/portfolio'

export default function JourneyPage() {
  const { language, t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const sections = sectionRefs.current.filter((section): section is HTMLElement => section !== null)
    if (!sections.length) return
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (!visible.length) return
      const best = visible.reduce((current, entry) => entry.intersectionRatio > current.intersectionRatio ? entry : current)
      const nextIndex = Number((best.target as HTMLElement).dataset.journeyIndex)
      if (Number.isInteger(nextIndex)) setActiveIndex((current) => current === nextIndex ? current : nextIndex)
    }, { rootMargin: '-30% 0px -45% 0px', threshold: [0, .25, .5, .75, 1] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const jump = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
  }, [])

  return (
    <main className="journey-page" id="main-content">
      <Header onJump={jump} />
      <JourneyCanvas chapters={journeyChapters} activeIndex={activeIndex} />
      <a className="journey-skip" href={pathFor('/experience', language)}>{t.journey.skip}</a>
      <div className="journey-scroll-content">
        {journeyChapters.map((chapter, index) => {
          const related = chapter.experienceSlugs.map((slug) => experiences.find((experience) => experience.slug === slug)).filter(Boolean)
          const isFirst = index === 0
          return <section key={chapter.id} ref={(node) => { sectionRefs.current[index] = node }} className={`journey-chapter-section ${isFirst ? 'journey-chapter-intro' : ''} ${activeIndex === index ? 'is-active' : ''}`} data-journey-index={index}>
            <div className="journey-chapter-copy">
              {isFirst && <>
                <p className="journey-kicker">{t.nav.journey} · {String(journeyChapters.length).padStart(2, '0')} chapters</p>
                <h1>{t.journey.title}</h1>
                <h2>{t.hero.headline}</h2>
                <p className="journey-intro-description">{t.journey.description}</p>
                <button className="primary-button journey-begin" onClick={() => jump(1)}>{t.journey.begin} <ArrowRight size={18} aria-hidden="true" /></button>
                <div className="journey-scroll-cue"><Mouse size={20} aria-hidden="true" /><span>{t.journey.scroll}</span></div>
              </>}
              <div className="journey-chapter-marker"><span>{String(index + 1).padStart(2, '0')} / {String(journeyChapters.length).padStart(2, '0')}</span><i aria-hidden="true" /><b>{copy(chapter.yearLabel, language)}</b></div>
              <h2>{copy(chapter.title, language)}</h2>
              <p className="journey-chapter-role">{copy(chapter.role, language)}</p>
              <p className="journey-chapter-summary">{copy(chapter.summary, language)}</p>
              <div className="journey-related" aria-label={chapter.experienceSlugs.length > 1 ? t.journey.viewRelatedExperiences : t.journey.viewRelatedExperience}>
                <span>{chapter.experienceSlugs.length > 1 ? t.journey.viewRelatedExperiences : t.journey.viewRelatedExperience}</span>
                <div>
                  {related.map((experience) => experience && <Link key={experience.slug} to={pathFor(`/experience/${experience.slug}`, language)}>{copy(experience.title, language)} <ArrowRight size={15} aria-hidden="true" /></Link>)}
                </div>
              </div>
              {index === journeyChapters.length - 1 && <div className="journey-contact-links" aria-label={t.journey.connect}>
                <span>{t.journey.connect}</span>
                <a href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" />{t.contact.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" />{t.contact.linkedin}</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" />{t.contact.github}</a>
              </div>}
            </div>
          </section>
        })}
      </div>
      <ProgressRail chapters={journeyChapters} activeIndex={activeIndex} onJump={jump} />
    </main>
  )
}
