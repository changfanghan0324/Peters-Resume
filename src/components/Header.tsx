import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../content/language'

const navItems = [
  { label: 'Journey', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Strengths', to: '/strengths' },
]

export default function Header({ onJump }: { onJump?: (index: number) => void }) {
  const { language, setLanguage } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const journeyClick = () => {
    setOpen(false)
    if (location.pathname === '/') onJump?.(0)
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={journeyClick} aria-label="Fang Han Chang home"><span>FH</span><i>/</i><b>26</b></Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => <Link key={item.to} className={location.pathname === item.to ? 'active' : ''} to={item.to} onClick={item.to === '/' ? journeyClick : undefined}>{item.label}</Link>)}
      </nav>
      <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={19} /> : <Menu size={19} />}</button>
      <div className="header-actions">
        <div className="language-toggle" aria-label="Language">
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button><span>/</span><button className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')}>中文</button>
        </div>
        <a className="resume-link" href="./Fang-Han-Chang-Resume.pdf" download><Download size={15} /> <span>Résumé</span></a>
      </div>
      <div id="mobile-navigation" className={`mobile-navigation ${open ? 'open' : ''}`}>
        {navItems.map((item) => <Link key={item.to} className={location.pathname === item.to ? 'active' : ''} to={item.to} onClick={() => { setOpen(false); if (item.to === '/') journeyClick() }}>{item.label}</Link>)}
      </div>
    </header>
  )
}
