import { useMemo, useState } from 'react'
import type { Language } from '../content/language'

function futureValue(initial: number, monthly: number, rate: number, years: number) {
  const r = rate / 12
  const months = years * 12
  return initial * Math.pow(1 + r, months) + monthly * ((Math.pow(1 + r, months) - 1) / r)
}

export default function InvestmentDemo({ language }: { language: Language }) {
  const [initial, setInitial] = useState(25000)
  const [monthly, setMonthly] = useState(500)
  const results = useMemo(() => [0.041, 0.066, 0.089].map((rate) => futureValue(initial, monthly, rate, 30)), [initial, monthly])
  const max = Math.max(...results)
  return (
    <div className="model-demo">
      <div className="demo-inputs">
        <label>{language === 'en' ? 'Initial investment' : '初始投資'} <b>${initial.toLocaleString()}</b><input type="range" min="5000" max="100000" step="5000" value={initial} onInput={(e) => setInitial(Number((e.target as HTMLInputElement).value))} /></label>
        <label>{language === 'en' ? 'Monthly contribution' : '每月投入'} <b>${monthly.toLocaleString()}</b><input type="range" min="100" max="2000" step="100" value={monthly} onInput={(e) => setMonthly(Number((e.target as HTMLInputElement).value))} /></label>
      </div>
      <div className="scenario-bars" aria-label={language === 'en' ? 'Projected outcomes after 30 years' : '30 年後的預估成果'}>
        {results.map((value, index) => (
          <div key={index} className={`scenario scenario-${index}`}>
            <div className="bar" style={{ height: `${34 + (value / max) * 66}%` }} />
            <strong>${Math.round(value / 1000).toLocaleString()}K</strong>
            <span>{['4.1%', '6.6%', '8.9%'][index]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
