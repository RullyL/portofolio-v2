"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import useTheme from '../hooks/useTheme';
import useLocale from '../i18n/useLocale';


export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, locale, setLocale } = useLocale();

  return (
    <header className="w-full sticky top-0 backdrop-blur bg-gray dark:bg-slate-900/60 z-40">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="font-semibold text-lg w-[60px]">
          <img className='object-contain' src="/icon/rl-logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4 items-center">
            <li><Link href="/" className="hover:underline">{t('nav.about')}</Link></li>
            <li><Link href="/projects" className="hover:underline">{t('nav.projects')}</Link></li>
            <li><Link href="/contact" className="hover:underline">{t('nav.contact')}</Link></li>
          </ul>
          <div className="flex items-center gap-2">
            <Button
              type="text"
              aria-label="Toggle dark mode"
              icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
              onClick={() => toggle()}
              className="text-lg text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            />
            <Button
              type="text"
              aria-label="Toggle language"
              onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
              className="p-1 border border-gray-300"
            >
              <img
                src={locale === 'en' ? '/icon/id.svg' : '/icon/us.svg'}
                alt={locale === 'en' ? 'ID' : 'EN'}
                className="h-6 w-6 rounded-full object-cover"
              />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
