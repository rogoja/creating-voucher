import { createSharedPathnamesNavigation } from 'next-intl/navigation';
 
export enum ELanguages {
  en = 'en',
  ru = 'ru',
}

export enum LocalePrefix {
  asNeeded = 'as-needed',
  always = 'always',
  never = 'never'
}


export const locales = Object.values(ELanguages);

export const defaultLocale = ELanguages.en;

export const localePrefix: LocalePrefix = LocalePrefix.asNeeded;
 
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: Object.values(ELanguages),
    localePrefix
  });