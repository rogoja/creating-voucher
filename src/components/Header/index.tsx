'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { languages, ELanguages } from '@/app/i18n/settings'

import s from './style.module.scss'

interface IHeader {
  lng: ELanguages
}

export const Header: React.FC<IHeader> = ({ lng }) => {
  const pathname = usePathname().split('/').toSpliced(0, 2).join('/');

  return (
    <header className={s.header}>
      {languages.filter((l) => lng !== l).map((l) => (
        <Link href={`/${l}/${pathname}`} className={s.language} key={l}>
          {l}
        </Link>
      ))}
    </header>
  )
}