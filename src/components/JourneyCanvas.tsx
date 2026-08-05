import type { CSSProperties } from 'react'
import type { Experience } from '../content/portfolio'

type JourneyCanvasProps = {
  experiences: Experience[]
  progress: number
  activeIndex: number
  onHover: (index: number | null) => void
  onOpen: (slug: string) => void
}

const assetUrl = (path: string) => new URL(path, document.baseURI).toString()

export default function JourneyCanvas({ experiences, progress, activeIndex, onHover, onOpen }: JourneyCanvasProps) {
  const point = progress * (experiences.length - 1)

  return (
    <div className="story-world">
      <div className="scene-stack">
        {experiences.map((item, index) => {
          const distance = Math.abs(index - point)
          const direction = index - point
          const opacity = Math.max(0, 1 - distance * 1.12)
          const style = {
            '--scene-opacity': opacity,
            '--scene-scale': 1.035 + Math.min(distance, 1) * 0.045,
            '--scene-x': `${direction * 3.5}%`,
            '--scene-y': `${Math.min(distance, 1) * 1.5}%`,
          } as CSSProperties

          return (
            <figure className={`journey-scene ${index === activeIndex ? 'active' : ''}`} style={style} key={item.slug}>
              <img src={assetUrl(item.scene)} alt="" loading={index < 2 ? 'eager' : 'lazy'} />
            </figure>
          )
        })}
      </div>

      <div className="scene-light" />
      <svg className="journey-path" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
        <path className="path-shadow" d="M -80 790 C 260 690 290 850 590 710 S 990 540 1180 610 S 1480 500 1690 260" />
        <path className="path-line" d="M -80 790 C 260 690 290 850 590 710 S 990 540 1180 610 S 1480 500 1690 260" />
      </svg>

      <button
        className="scene-hotspot"
        onMouseEnter={() => onHover(activeIndex)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(activeIndex)}
        onBlur={() => onHover(null)}
        onClick={() => onOpen(experiences[activeIndex].slug)}
        aria-label={`Explore ${experiences[activeIndex].title.en}`}
      >
        <i />
        <span>Explore this chapter</span>
      </button>
    </div>
  )
}
