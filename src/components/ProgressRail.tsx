import { useI18n } from '../content/language'
import type { JourneyChapter } from '../content/journey'

type ProgressRailProps = {
  chapters: JourneyChapter[]
  activeIndex: number
  onJump: (index: number) => void
}

export default function ProgressRail({ chapters, activeIndex, onJump }: ProgressRailProps) {
  const { language, t } = useI18n()
  const progress = chapters.length > 1 ? activeIndex / (chapters.length - 1) : 0
  return (
    <aside className="progress-rail" aria-label={t.journey.progress}>
      <div className="progress-line" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      <div className="progress-dots">
        {chapters.map((chapter, index) => {
          const active = activeIndex === index
          return <button key={chapter.id} className={active ? 'active' : ''} onClick={() => onJump(index)} aria-label={`${t.journey.more} ${chapter.yearLabel[language]}`} aria-current={active ? 'step' : undefined} aria-pressed={active}>
            <span>{chapter.yearLabel[language]}</span>
          </button>
        })}
      </div>
    </aside>
  )
}
