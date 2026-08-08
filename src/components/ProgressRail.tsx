import type { CSSProperties } from 'react'
import { copy, useI18n } from '../content/language'
import type { JourneyChapter } from '../content/journey'

type ProgressRailProps = {
  chapters: JourneyChapter[]
  activeIndex: number
  onJump: (index: number) => void
}

export default function ProgressRail({ chapters, activeIndex, onJump }: ProgressRailProps) {
  const { language, t } = useI18n()
  const progress = chapters.length > 1 ? activeIndex / (chapters.length - 1) : 0
  const trackStyle = { '--journey-index': activeIndex } as CSSProperties
  return (
    <aside className="progress-rail" aria-label={t.journey.progress}>
      <div className="progress-line" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      <div className="progress-dots" style={trackStyle}>
        {chapters.map((chapter, index) => {
          const active = activeIndex === index
          return <button key={chapter.id} className={active ? 'active' : ''} onClick={() => onJump(index)} aria-label={`${t.journey.more} ${copy(chapter.title, language)} · ${copy(chapter.yearLabel, language)}`} aria-current={active ? 'step' : undefined} aria-pressed={active}>
            <i aria-hidden="true" />
            <span>{copy(chapter.yearLabel, language)}</span>
          </button>
        })}
      </div>
    </aside>
  )
}
