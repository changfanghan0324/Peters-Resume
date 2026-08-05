import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const skillGroups = [
  {
    number: '01',
    title: 'Finance',
    color: 'amber',
    description: 'Understanding the decision behind the numbers.',
    skills: ['Financial Statement Analysis', 'DCF Valuation', 'Comparable Company Analysis', 'Portfolio Analytics', 'Corporate Credit Analysis', 'Credit Underwriting', 'FP&A', 'Forecasting', 'Working Capital Management'],
  },
  {
    number: '02',
    title: 'Analytics',
    color: 'coral',
    description: 'Turning uncertainty into explainable evidence.',
    skills: ['Scenario Analysis', 'Risk Modeling', 'Time-Series Analysis', 'Variance Analysis', 'Sensitivity Analysis', 'Correlation Analysis', 'Dashboarding'],
  },
  {
    number: '03',
    title: 'Technology',
    color: 'teal',
    description: 'Building the systems that make analysis useful.',
    skills: ['Python', 'pandas', 'NumPy', 'SQL', 'PostgreSQL', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Power BI', 'Excel', 'DAX', 'Git & GitHub'],
  },
  {
    number: '04',
    title: 'Business & Communication',
    color: 'green',
    description: 'Moving from insight to a clear next action.',
    skills: ['Financial Storytelling', 'Decision Support', 'Product Development', 'Executive Presentation', 'Analytical Communication', 'Project Management'],
  },
]

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState('Financial Statement Analysis')

  return (
    <main className="skills-page">
      <Header />
      <div className="skills-landscape" aria-hidden="true">
        <img className="skills-scene skills-scene-a" src="./assets/scenes/bu.png" alt="" />
        <img className="skills-scene skills-scene-b" src="./assets/scenes/origins.png" alt="" />
        <div className="skills-sun" />
      </div>

      <div className="skills-content">
        <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="skills-intro">
          <Link to="/" className="skills-back"><ArrowLeft size={15} /> Back to the journey</Link>
          <span className="section-kicker">Current toolkit · 2026</span>
          <h1>Skills built along<br />the way.</h1>
          <p>Finance provides the questions. Analytics finds the evidence. Technology turns both into products people can use.</p>
        </motion.header>

        <div className="skill-terraces">
          {skillGroups.map((group, index) => (
            <motion.section
              className={`skill-terrace ${group.color}`}
              key={group.title}
              initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + index * 0.09 }}
            >
              <div className="terrace-heading">
                <span>{group.number}</span>
                <div><h2>{group.title}</h2><p>{group.description}</p></div>
              </div>
              <div className="terrace-skills">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    className={activeSkill === skill ? 'active' : ''}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onFocus={() => setActiveSkill(skill)}
                    onClick={() => setActiveSkill(skill)}
                  >{skill}<ArrowUpRight size={13} /></button>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <footer className="skills-footer">
          <span>Selected skill</span><strong>{activeSkill}</strong>
          <Link to="/">Continue the journey <ArrowUpRight size={18} /></Link>
        </footer>
      </div>
    </main>
  )
}
