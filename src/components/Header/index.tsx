import { headers } from 'next/headers'

import  { Link, locales, ELanguages, defaultLocale, LocalePrefix, localePrefix } from 'navigation';

import s from './style.module.scss'

interface IHeader {
  locale: ELanguages
}

const getHrefOnServer = (locale: ELanguages) => {
  const url = headers().get('x-url') || '';
  const pathnameArray = url.split('/');

  if (LocalePrefix.asNeeded === localePrefix && locale === defaultLocale) {
    pathnameArray.splice(0, locale === defaultLocale ? 3 : 4);
  } else {
    pathnameArray.splice(0, 4);
  }

  return `/${pathnameArray.join('/')}`
}

export const Header: React.FC<IHeader> = ({ locale }) => {
  return (
    <header className={s.header}>
      {locales.filter((l) => locale !== l).map((l) => (
        <Link href={getHrefOnServer(locale)} className={s.language} key={l} locale={l}>
          {l}
        </Link>
      ))}
    </header>
  )
}