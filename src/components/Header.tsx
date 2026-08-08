import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { pathFor, useI18n } from '../content/language'

export default function Header({ onJump }: { onJump?: (index: number) => void }) {
  const { language, setLanguage, t } = useI18n()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const navItems = [
    { key: 'overview', to: '/' }, { key: 'experience', to: '/experience' }, { key: 'projects', to: '/projects' },
    { key: 'capabilities', to: '/capabilities' }, { key: 'about', to: '/about' }, { key: 'journey', to: '/journey' }, { key: 'contact', to: '/contact' },
  ] as const
  const label = (key: typeof navItems[number]['key']) => t.nav[key]
  const isActive = (to: string) => to === '/' ? /\/en$|\/zh-tw$/.test(location.pathname) : location.pathname.endsWith(to) || location.pathname.includes(`${to}/`)
  const journeyClick = () => { setOpen(false); if (location.pathname.endsWith('/journey')) onJump?.(0) }
  const switchLanguage = (next: 'en' | 'zh') => { setLanguage(next); setOpen(false); navigate(pathFor(location.pathname, next), { replace: true }) }

  return (
    <>
      <a className="skip-link" href="#main-content">{t.common.skipToContent}</a>
      <header className="site-header">
        <Link className="brand" to={pathFor('/', language)} onClick={journeyClick} aria-label={t.nav.home}><span>FHC</span></Link>
        <nav aria-label={t.nav.overview}>
          {navItems.map((item) => <Link key={item.to} className={isActive(item.to) ? 'active' : ''} to={pathFor(item.to, language)} onClick={item.to === '/journey' ? journeyClick : undefined}>{label(item.key)}</Link>)}
        </nav>
        <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? t.nav.close : t.nav.menu}>{open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}</button>
        <div className="header-actions">
          <div className="language-toggle" aria-label={t.nav.language}>
            <button className={language === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')} aria-pressed={language === 'en'}>EN</button><span aria-hidden="true">/</span><button className={language === 'zh' ? 'active' : ''} onClick={() => switchLanguage('zh')} aria-pressed={language === 'zh'}>繁中</button>
          </div>
          <a className="resume-link" href="/Fang-Han-Chang-Resume.pdf" download><Download size={15} aria-hidden="true" /> <span>{t.nav.resume}</span></a>
        </div>
        <div id="mobile-navigation" className={`mobile-navigation ${open ? 'open' : ''}`}>
          {navItems.map((item) => <Link key={item.to} className={isActive(item.to) ? 'active' : ''} to={pathFor(item.to, language)} onClick={() => { setOpen(false); if (item.to === '/journey') journeyClick() }}>{label(item.key)}</Link>)}
        </div>
      </header>
    </>
  )
}
