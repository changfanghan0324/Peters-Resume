import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { LanguageProvider, pathFor, storedLanguage } from './content/language'
import RouteMeta from './components/RouteMeta'

const OverviewPage = lazy(() => import('./pages/OverviewPage'))
const JourneyPage = lazy(() => import('./pages/JourneyPage'))
const DetailPage = lazy(() => import('./pages/DetailPage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function LegacyRedirect() {
  const language = storedLanguage()
  const hashPath = window.location.hash.replace(/^#/, '') || '/journey'
  return <Navigate to={pathFor(hashPath === '/' ? '/journey' : hashPath, language)} replace />
}

function LegacyDetailRedirect({ base }: { base: 'experience' | 'projects' }) {
  const { slug } = useParams()
  return <Navigate to={`/en/${base}/${slug ?? ''}`} replace />
}

function PageFrame({ children }: { children: React.ReactNode }) { return <>{children}</> }

function localizedRoutes(locale: 'en' | 'zh-tw') {
  return (
    <>
      <Route path={`/${locale}`} element={<OverviewPage />} />
      <Route path={`/${locale}/journey`} element={<JourneyPage />} />
      <Route path={`/${locale}/experience`} element={<ExperiencePage />} />
      <Route path={`/${locale}/projects`} element={<ProjectsPage />} />
      <Route path={`/${locale}/capabilities`} element={<SkillsPage />} />
      <Route path={`/${locale}/skills`} element={<Navigate to={`/${locale}/capabilities`} replace />} />
      <Route path={`/${locale}/about`} element={<AboutPage />} />
      <Route path={`/${locale}/strengths`} element={<Navigate to={`/${locale}/about`} replace />} />
      <Route path={`/${locale}/contact`} element={<ContactPage />} />
      <Route path={`/${locale}/experience/:slug`} element={<DetailPage />} />
      <Route path={`/${locale}/projects/:slug`} element={<DetailPage />} />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <PageFrame>
        <RouteMeta />
        <Suspense fallback={<div className="app-loading" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<LegacyRedirect />} />
            {localizedRoutes('en')}
            {localizedRoutes('zh-tw')}
            <Route path="/experience/:slug" element={<LegacyDetailRedirect base="experience" />} />
            <Route path="/projects/:slug" element={<LegacyDetailRedirect base="projects" />} />
            <Route path="/skills" element={<Navigate to="/en/capabilities" replace />} />
            <Route path="/strengths" element={<Navigate to="/en/about" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageFrame>
    </LanguageProvider>
  )
}
