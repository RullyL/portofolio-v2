"use client";
import React from 'react';
import useLocale from '../i18n/useLocale';

export default function Footer(){
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p> {year} - Rully Lukmansyah {t('footer.text')}</p>
      </div>
    </footer>
  )
}
