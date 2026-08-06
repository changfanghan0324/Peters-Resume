import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './content/language'

const HomePage = lazy(() => import('./pages/HomePage'))
const DetailPage = lazy(() => import('./pages/DetailPage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const StrengthsPage = lazy(() => import('./pages/StrengthsPage'))

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div className="app-loading">Loading journey…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/strengths" element={<StrengthsPage />} />
          <Route path="/experience/:slug" element={<DetailPage />} />
        </Routes>
      </Suspense>
    </LanguageProvider>
  )
}
