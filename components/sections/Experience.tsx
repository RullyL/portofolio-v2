"use client";
import React from 'react';
import { Timeline } from 'antd';
import useLocale from '../../i18n/useLocale';

export default function Experience(){
  const { t } = useLocale();
  return (
    <section id="experience" className="py-8">
      <h2 className="text-2xl font-semibold">{t('experience.title')}</h2>
      <Timeline
        className="mt-4"
        items={[
          {
            label: t('experience.item1_date'),
            title: t('experience.item1_title'),
            children: t('experience.item1_desc')
          },
          {
            label: t('experience.item2_date'),
            title: t('experience.item2_title'),
            children: t('experience.item2_desc')
          }
        ]}
      />
    </section>
  )
}
