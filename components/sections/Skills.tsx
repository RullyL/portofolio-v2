"use client";
import React from 'react';
import { Tag } from 'antd';
import useLocale from '../../i18n/useLocale';

const skills = ['TypeScript','React','Next.js','Tailwind','Ant Design','Node.js'];

export default function Skills(){
  const { t } = useLocale();
  return (
    <section id="skills" className="py-8">
      <h2 className="text-2xl font-semibold">{t('skills.title')}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map(s => (
          <Tag key={s} color="blue" className="!text-sm">{s}</Tag>
        ))}
      </div>
    </section>
  )
}
