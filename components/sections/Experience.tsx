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
            children: (
              <div>
                <h3 className="font-semibold">{t('experience.item1_title')}</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {t('experience.item1_desc')}
                </p>
              </div>
            )
          },
          {
            label: t('experience.item2_date'),
            children: (
              <div>
                <h3 className="font-semibold">{t('experience.item2_title')}</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {t('experience.item2_desc')}
                </p>
              </div>
            )
          }
        ]}
      />
    </section>
  )
}
