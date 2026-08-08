import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { pathFor, useI18n } from '../content/language'

export default function NotFoundPage() {
  const { language, t } = useI18n()
  return <main className="not-found-page"><Header /><section><p className="section-kicker">404</p><h1>{t.common.notFoundTitle}</h1><p>{t.common.notFoundDescription}</p><Link className="primary-button" to={pathFor('/', language)}>{t.common.returnOverview}</Link></section></main>
}
