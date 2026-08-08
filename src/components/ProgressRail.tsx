import { experiences } from '../content/portfolio'
import { useI18n } from '../content/language'

export default function ProgressRail({ progress, onJump }: { progress: number; onJump: (index: number) => void }) {
  const { t } = useI18n()
  return (
    <aside className="progress-rail" aria-label={t.journey.scroll}>
      <div className="progress-line"><i style={{ height: `${progress * 100}%` }} /></div>
      <div className="progress-dots">
        {experiences.map((item, index) => {
          const active = Math.round(progress * (experiences.length - 1)) === index
          return (
            <button key={item.slug} className={active ? 'active' : ''} onClick={() => onJump(index)} aria-label={`${t.journey.more} ${item.year}`} aria-pressed={active}>
              <span>{item.year}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
