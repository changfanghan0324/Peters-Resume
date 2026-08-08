import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { capabilities } from '../content/capabilities'
import { copy, pathFor, useI18n } from '../content/language'
import { experiences, profile, projectMeta } from '../content/portfolio'

const featured = ['tutor-platform', 'investiq', 'northstar-credit-platform']
const selectedExperience = ['uvu-community', 'sukiya-operations', 'chinese-teaching-assistant', 'mochilune']

function StatusBadge({ status, t }: { status: 'completed' | 'inDevelopment' | 'roadmap' | 'mvp'; language?: 'en' | 'zh'; t: ReturnType<typeof useI18n>['t'] }) {
  const labels = { completed: t.status.completed, inDevelopment: t.status.inDevelopment, roadmap: t.status.roadmap, mvp: t.status.mvp }
  return <span className={`status-badge ${status}`}>{labels[status]}</span>
}

export default function OverviewPage() {
  const { language, t } = useI18n()
  return (
    <main className="overview-page" id="main-content">
      <Header />
      <section className="overview-hero"><div className="overview-hero-copy"><p className="hero-location">{profile.location}</p><h1>{t.hero.name}</h1><h2>{t.hero.headline}</h2><p className="hero-subheadline">{t.hero.subheadline}</p><p className="hero-body">{t.hero.body}</p><p className="hero-identity">{t.hero.identity}</p><div className="hero-actions"><Link className="primary-button" to={pathFor('/projects', language)}>{t.hero.selectedWork}<ArrowRight size={18} aria-hidden="true" /></Link><a className="secondary-button" href="/Fang-Han-Chang-Resume.pdf" download>{t.hero.download}</a><Link className="text-button" to={pathFor('/contact', language)}>{t.hero.contact}</Link></div></div><div className="overview-hero-art" aria-hidden="true"><img src="/assets/scenes/investment-research.webp" alt="" width="1200" height="900" fetchPriority="high" /></div></section>
      <section className="evidence-strip" aria-labelledby="evidence-title"><div><h2 id="evidence-title">{t.overview.evidenceTitle}</h2><p>{t.overview.evidenceDescription}</p></div><dl><div><dt>B.S. Finance</dt><dd>Utah Valley University</dd></div><div><dt>MSBA</dt><dd>Boston University · Incoming</dd></div><div><dt>Focus</dt><dd>Investment · Credit · FP&A</dd></div></dl></section>
      <section className="overview-section" aria-labelledby="featured-title"><div className="section-heading"><div><h2 id="featured-title">{t.overview.featured}</h2><p>{t.overview.featuredDescription}</p></div><Link to={pathFor('/projects', language)}>{t.projects.select} <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="featured-projects">{featured.map((slug) => { const project = experiences.find((item) => item.slug === slug)!; const meta = projectMeta[slug]; const key = meta.status === 'in-development' ? 'inDevelopment' : 'completed'; return <article className="featured-project" key={slug}><div className="featured-project-image"><img src={`/${project.scene}`} alt="" loading="lazy" width="800" height="520" /></div><div className="featured-project-copy"><StatusBadge status={key} language={language} t={t} /><h3>{copy(project.title, language)}</h3><p>{copy(project.summary, language)}</p><div className="card-meta">{meta.lastUpdated && <span>{t.status.lastUpdated}: {copy(meta.lastUpdated, language)}</span>}<span>{copy(project.role, language)}</span></div><Link to={pathFor(`/projects/${slug}`, language)}>{t.projects.caseStudy} <ArrowRight size={16} aria-hidden="true" /></Link></div></article> })}</div></section>
      <section className="overview-section experience-preview" aria-labelledby="selected-title"><div className="section-heading"><div><h2 id="selected-title">{t.overview.selectedExperience}</h2><p>{t.overview.selectedExperienceDescription}</p></div><Link to={pathFor('/experience', language)}>{t.experience.view} <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="experience-list">{selectedExperience.map((slug) => { const item = experiences.find((experience) => experience.slug === slug)!; return <Link key={slug} to={pathFor(`/experience/${slug}`, language)}><span>{item.year}</span><div><h3>{copy(item.title, language)}</h3><p>{copy(item.role, language)}</p></div><ArrowRight size={18} aria-hidden="true" /></Link> })}</div></section>
      <section className="overview-section capability-preview" aria-labelledby="capabilities-title"><div className="section-heading"><div><h2 id="capabilities-title">{t.overview.capabilities}</h2><p>{t.overview.capabilitiesDescription}</p></div><Link to={pathFor('/capabilities', language)}>{t.nav.capabilities} <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="capability-summary-grid">{capabilities.slice(0, 8).map((capability) => <Link key={capability.id} to={pathFor('/capabilities', language)}><span className={`capability-dot ${capability.status}`} />{copy(capability.name, language)}</Link>)}</div></section>
      <section className="overview-section how-work" aria-labelledby="how-work-title"><div><h2 id="how-work-title">{t.overview.howWork}</h2><p>{t.overview.howWorkDescription}</p></div><ol>{t.overview.workSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol></section>
      <section className="journey-invitation"><div><h2>{t.overview.journeyTitle}</h2><p>{t.overview.journeyDescription}</p></div><Link className="primary-button" to={pathFor('/journey', language)}>{t.overview.journeyCta} <ArrowRight size={18} aria-hidden="true" /></Link></section>
      <section className="overview-contact" id="contact"><div><h2>{t.overview.contactTitle}</h2><p>{t.overview.contactDescription}</p></div><div className="contact-actions"><a href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{t.overview.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" />{t.overview.linkedin}</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" />{t.overview.github}</a></div></section>
      <footer className="site-footer"><span>FHC</span><span>{t.overview.footerNote}</span><span>{t.overview.lastUpdated}</span></footer>
    </main>
  )
}
