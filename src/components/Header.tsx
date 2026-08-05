import { Download } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../content/language'

type HeaderProps = {
  onJump?: (index: number) => void
}

export default function Header({ onJump }: HeaderProps) {
  const { language, setLanguage } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const onHomeNav = (index: number) => {
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => onJump?.(index), 50)
      return
    }
    onJump?.(index)
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Fang Han Chang home">
        <span>FH</span><i>/</i><b>26</b>
      </Link>
      {location.pathname === '/' && (
        <nav aria-label="Main navigation">
          <button onClick={() => onHomeNav(0)}>Journey</button>
          <button onClick={() => onHomeNav(3)}>Work</button>
          <button onClick={() => onHomeNav(6)}>About</button>
        </nav>
      )}
      <div className="header-actions">
        <div className="language-toggle" aria-label="Language">
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          <span>/</span>
          <button className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')}>中文</button>
        </div>
        <a className="resume-link" href="./Fang-Han-Chang-Resume.pdf" download>
          <Download size={15} /> <span>Résumé</span>
        </a>
      </div>
    </header>
  )
}
