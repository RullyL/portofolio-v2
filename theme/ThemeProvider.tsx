"use client";
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
const STORAGE_KEY = 'theme-preference';

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: (next?: boolean | string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }){
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (raw) setTheme(raw);
    else setTheme('dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const effective = theme === 'system' ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
    if (effective === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const toggle = useCallback((next?: boolean | string) => {
    setTheme(prev => {
      const newTheme = typeof next === 'boolean' ? (next ? 'dark' : 'light') : prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, newTheme);
      return newTheme as Theme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}

export default ThemeProvider;
