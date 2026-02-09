"use client";
import { useLocaleContext } from './LocaleProvider';

export default function useLocale(){
  return useLocaleContext();
}
