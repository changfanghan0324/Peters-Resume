import { experiences } from '../content/portfolio'

export default function ProgressRail({ progress, onJump }: { progress: number; onJump: (index: number) => void }) {
  return (
    <aside className="progress-rail" aria-label="Journey progress">
      <div className="progress-line"><i style={{ width: `${progress * 100}%` }} /></div>
      <div className="progress-dots">
        {experiences.map((item, index) => {
          const active = Math.round(progress * (experiences.length - 1)) === index
          return (
            <button key={item.slug} className={active ? 'active' : ''} onClick={() => onJump(index)} aria-label={`Go to ${item.year}`}>
              <span>{item.year.replace(' 2026', '')}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
