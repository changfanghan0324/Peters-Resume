import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from '../i18n/en'
import { zhTW } from '../i18n/zh-TW'

export type Language = 'en' | 'zh'
export type Locale = 'en' | 'zh-tw'
export type Translation = typeof en

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void } | null>(null)

export function languageFromPath(pathname: string): Language {
  return pathname.toLowerCase().startsWith('/zh-tw') ? 'zh' : 'en'
}

export function localeFor(language: Language): Locale {
  return language === 'zh' ? 'zh-tw' : 'en'
}

export function pathFor(pathname: string, language: Language): string {
  const cleaned = pathname.replace(/^\/(en|zh-tw)(?=\/|$)/i, '') || '/'
  return `/${localeFor(language)}${cleaned === '/' ? '' : cleaned}`
}

export function storedLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  if (/^\/zh-tw(?:\/|$)/i.test(window.location.pathname)) return 'zh'
  if (/^\/en(?:\/|$)/i.test(window.location.pathname)) return 'en'
  return window.localStorage.getItem('peters-resume-language') === 'zh' ? 'zh' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => storedLanguage())
  useEffect(() => {
    window.localStorage.setItem('peters-resume-language', language)
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en'
  }, [language])
  const value = useMemo(() => ({ language, setLanguage }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}

export function useI18n() {
  const { language, setLanguage } = useLanguage()
  return { language, setLanguage, t: language === 'zh' ? zhTW : en }
}

export function copy<T extends Record<Language, unknown>>(value: T, language: Language): T[Language] {
  return value[language]
}
