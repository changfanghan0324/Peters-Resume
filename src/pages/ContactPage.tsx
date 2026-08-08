import { Download, Github, Linkedin, Mail } from 'lucide-react'
import Header from '../components/Header'
import { useI18n } from '../content/language'
import { profile } from '../content/portfolio'

export default function ContactPage() {
  const { t } = useI18n()
  return <main className="contact-page" id="main-content"><Header /><section><p className="section-kicker">FHC</p><h1>{t.contact.title}</h1><p>{t.contact.description}</p><div className="contact-page-links"><a href={`mailto:${profile.email}`}><Mail size={19} aria-hidden="true" />{t.contact.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" />{t.contact.linkedin}</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" />{t.contact.github}</a><a href="/Fang-Han-Chang-Resume.pdf" download><Download size={19} aria-hidden="true" />{t.contact.resume}</a></div></section></main>
}
