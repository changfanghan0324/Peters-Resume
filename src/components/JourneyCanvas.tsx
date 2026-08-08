import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../content/language'
import type { JourneyChapter } from '../content/journey'

type JourneyCanvasProps = {
  chapters: JourneyChapter[]
  activeIndex: number
}

const assetUrl = (path: string) => `/${path}`
const preloadCache = new Map<string, Promise<boolean>>()

const preloadScene = (path: string) => {
  const src = assetUrl(path)
  const cached = preloadCache.get(src)
  if (cached) return cached
  const promise = new Promise<boolean>((resolve) => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => {
      const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve()
      decoded.then(() => resolve(true)).catch(() => resolve(true))
    }
    image.onerror = () => resolve(false)
    image.src = src
  })
  preloadCache.set(src, promise)
  return promise
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return reduced
}

export default function JourneyCanvas({ chapters, activeIndex }: JourneyCanvasProps) {
  const { t } = useI18n()
  const reducedMotion = useReducedMotion()
  const [displayIndex, setDisplayIndex] = useState(0)
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const [sceneFailed, setSceneFailed] = useState(false)
  const display = chapters[displayIndex] ?? chapters[0]
  const incoming = incomingIndex === null ? null : chapters[incomingIndex]
  const progress = chapters.length > 1 ? activeIndex / (chapters.length - 1) : 0

  useEffect(() => {
    if (!chapters[0]) return
    void preloadScene(chapters[0].scene)
    if (chapters[1]) void preloadScene(chapters[1].scene)
  }, [chapters])

  useEffect(() => {
    const nextChapter = chapters[activeIndex + 1]
    if (nextChapter) void preloadScene(nextChapter.scene)
  }, [activeIndex, chapters])

  useEffect(() => {
    if (!chapters[activeIndex] || activeIndex === displayIndex) return
    let cancelled = false
    let timer: number | undefined
    const next = chapters[activeIndex]
    setSceneFailed(false)
    void preloadScene(next.scene).then((ready) => {
      if (cancelled) return
      if (!ready) {
        console.warn(`[Journey] Scene failed to decode: ${next.scene}`)
        setSceneFailed(true)
        return
      }
      setIncomingIndex(activeIndex)
      setTransitioning(true)
      const duration = reducedMotion ? 1 : 200
      timer = window.setTimeout(() => {
        if (cancelled) return
        setDisplayIndex(activeIndex)
        setIncomingIndex(null)
        setTransitioning(false)
      }, duration)
    })
    return () => {
      cancelled = true
      if (timer !== undefined) window.clearTimeout(timer)
    }
  }, [activeIndex, chapters, displayIndex, reducedMotion])

  const stageStyle = useMemo(() => ({ '--journey-progress': progress } as CSSProperties), [progress])

  return (
    <div className="journey-scene-stage" style={stageStyle} aria-hidden="true">
      <div className="journey-scene-stack">
        {display && <figure className={`journey-scene journey-scene-current ${transitioning ? 'is-transitioning' : ''}`}>
          <img src={assetUrl(display.scene)} alt="" width="1600" height="1000" decoding="async" fetchPriority="high" />
        </figure>}
        {incoming && <figure className={`journey-scene journey-scene-incoming ${transitioning ? 'is-transitioning' : ''}`}>
          <img src={assetUrl(incoming.scene)} alt="" width="1600" height="1000" decoding="async" fetchPriority="high" />
        </figure>}
      </div>
      <div className="journey-scene-tint" />
      <svg className="journey-path" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <path className="path-line" d="M -80 790 C 260 690 290 850 590 710 S 990 540 1180 610 S 1480 500 1690 260" />
      </svg>
      {sceneFailed && <p className="journey-scene-fallback">{t.journey.sceneUnavailable}</p>}
    </div>
  )
}
