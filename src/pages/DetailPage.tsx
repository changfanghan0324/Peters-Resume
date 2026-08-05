import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Github, Handshake, Instagram, Linkedin, Mail } from 'lucide-react'
import { useEffect } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import InvestmentDemo from '../components/InvestmentDemo'
import { useLanguage } from '../content/language'
import { copy, experiences, profile } from '../content/portfolio'

const assetUrl = (path: string) => new URL(path, document.baseURI).toString()

export default function DetailPage() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const item = experiences.find((experience) => experience.slug === slug)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])
  if (!item) return <Navigate to="/" replace />
  const index = experiences.indexOf(item)
  const next = experiences[(index + 1) % experiences.length]

  return (
    <main className="detail-page">
      <Header />
      <aside className="detail-index" aria-label="Experience index">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> {language === 'en' ? 'Back to journey' : '回到人生路徑'}</Link>
        <ol>
          {experiences.map((experience, i) => (
            <li key={experience.slug} className={experience.slug === slug ? 'active' : ''}>
              <Link to={`/experience/${experience.slug}`}><span>{String(i + 1).padStart(2, '0')}</span>{experience.year}</Link>
            </li>
          ))}
        </ol>
      </aside>

      <div className="detail-content">
        <section className="detail-hero">
          <div className="detail-heading">
            <Link to="/" className="mobile-back"><ArrowLeft size={16} /> {language === 'en' ? 'Back to journey' : '回到人生路徑'}</Link>
            <h1>{copy(item.title, language)}</h1>
            <p>{copy(item.summary, language)}</p>
            <div className="detail-meta"><span>{copy(item.role, language)}</span><i /> <span>{copy(item.period, language)}</span><i /><span>{copy(item.place, language)}</span></div>
            {item.links && <div className="detail-actions">{item.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label === 'GitHub' && <Github size={17} />}{link.label}<ArrowUpRight size={16} /></a>)}</div>}
          </div>
          <div className="detail-image-wrap"><img src={assetUrl(item.scene)} alt={`${copy(item.title, language)} 3D diorama`} /></div>
        </section>

        <section className="story-grid">
          <div className="story-copy">
            <article><h2>{language === 'en' ? 'The challenge' : '挑戰'}</h2><p>{copy(item.challenge, language)}</p></article>
            <article><h2>{language === 'en' ? 'What I built' : '我建立了什麼'}</h2><p>{copy(item.built, language)}</p></article>
            <article><h2>{language === 'en' ? 'Outcome' : '成果'}</h2><p>{copy(item.outcome, language)}</p></article>
          </div>
          <div className="highlights">
            <h2>{language === 'en' ? 'In focus' : '重點'}</h2>
            <ul>{item.highlights[language].map((highlight) => <li key={highlight}><Check size={15} />{highlight}</li>)}</ul>
          </div>
        </section>

        <section className="selected-work">
          <div className="section-heading"><h2>{language === 'en' ? 'Selected work' : '精選作品'}</h2><span>{language === 'en' ? 'Interactive evidence' : '互動成果'}</span></div>
          {item.slug === 'investment-calculator' ? <InvestmentDemo language={language} /> : (
            <div className="evidence-stage">
              <img src={assetUrl(item.scene)} alt="" />
              <div><p>{copy(item.built, language)}</p><span><ExternalLink size={15} /> {language === 'en' ? 'Project artifacts will be added as they are published.' : '更多作品檔案將於發布後持續更新。'}</span></div>
            </div>
          )}
        </section>

        <section className="skills-credentials">
          <div><h2>{language === 'en' ? 'Skills' : '技能'}</h2><div className="skill-list">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          <div><h2>{language === 'en' ? 'Credentials' : '證書與學歷'}</h2>{item.credentials?.length ? <div className="credential-list">{item.credentials.map((credential) => <span key={credential}>{credential}</span>)}</div> : <p className="muted">{language === 'en' ? 'Certificate and work-file slots are ready for future uploads.' : '已保留證書與作品檔案位置，方便未來上傳。'}</p>}</div>
        </section>

        <Link className="next-chapter" to={`/experience/${next.slug}`}>
          <span>{language === 'en' ? 'Next chapter' : '下一章'}</span><strong>{copy(next.title, language)}</strong><ArrowUpRight size={28} />
        </Link>

        <footer className="detail-footer">
          <span>© 2026 Fang Han Chang</span>
          <div aria-label="Social links">
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Mail size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={17} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github size={17} /></a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram size={17} /></a>
            <a href={profile.handshake} target="_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake size={17} /></a>
          </div>
        </footer>
      </div>
    </main>
  )
}
