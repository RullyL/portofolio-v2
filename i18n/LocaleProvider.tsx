"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from '../locales/en.json';
import id from '../locales/id.json';

type Messages = Record<string, any>;

const MESSAGES: Record<string, Messages> = { en, id };
const STORAGE_KEY = 'locale';

type ContextType = {
  locale: 'en' | 'id';
  setLocale: (l: 'en' | 'id') => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<ContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (k: string) => k
});

export function LocaleProvider({ children }: { children: React.ReactNode }){
  const [locale, setLocaleState] = useState<'en'|'id'>('en');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as 'en' | 'id' | null;
    if (stored) setLocaleState(stored);
    else {
      const nav = navigator.language?.startsWith('id') ? 'id' : 'en';
      setLocaleState(nav);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (l: 'en'|'id') => setLocaleState(l);

  const t = useMemo(() => {
    return (key: string) => {
      const parts = key.split('.');
      let cur: any = MESSAGES[locale];
      for (const p of parts) {
        if (!cur) return key;
        cur = cur[p];
      }
      return typeof cur === 'string' ? cur : key;
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext(){
  return useContext(LocaleContext);
}

export default LocaleProvider;
