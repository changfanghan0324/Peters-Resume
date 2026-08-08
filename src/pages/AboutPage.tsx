import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { strengths } from '../content/capabilities'
import { copy, pathFor, useI18n } from '../content/language'
import { profile } from '../content/portfolio'

export default function AboutPage() {
  const { language, t } = useI18n()
  const [selectedName, setSelectedName] = useState('Individualization')
  const selected = strengths.find((strength) => strength.name === selectedName) ?? strengths[0]
  return <main className="strengths-page about-page" id="main-content"><Header /><div className="strengths-landscape" aria-hidden="true"><img src="/assets/scenes/origins.webp" alt="" /></div><div className="strengths-content"><header><h1>{t.about.title}</h1><p>{t.about.description}</p><p className="about-attribution">{t.about.attribution}</p></header><section className="strengths-section" aria-labelledby="strengths-title"><h2 id="strengths-title">{t.about.strengths}</h2><div className="strength-constellation" aria-label={t.about.strengths}><i aria-hidden="true" />{strengths.map((strength, index) => <button key={strength.name} className={selected.name === strength.name ? 'active' : ''} onClick={() => setSelectedName(strength.name)} aria-pressed={selected.name === strength.name}><span>{String(index + 1).padStart(2, '0')}</span><strong>{strength.name}</strong></button>)}</div><article className="strength-focus"><span>{t.capabilities.evidence}</span><h3>{selected.name}</h3><p>{copy(selected.summary, language)}</p><div>{selected.workplace[language].map((item) => <strong key={item}>{item}</strong>)}</div><small>{t.experience.evidence} · {copy(selected.evidence, language)}</small></article></section><section className="how-work about-how-work" aria-labelledby="how-work-title"><div><h2 id="how-work-title">{t.overview.howWork}</h2><p>{t.overview.howWorkDescription}</p></div><ol>{t.overview.workSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol></section><section className="about-contact" aria-labelledby="about-contact-title"><div><h2 id="about-contact-title">{t.about.contact}</h2><p>{t.about.location}</p></div><div><a href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{t.about.email}</a><Link to={pathFor('/journey', language)}>{t.about.journey} <ArrowRight size={17} aria-hidden="true" /></Link></div></section></div></main>
}
