'use client'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/Button'

import styles from './page.module.scss'
import { useTranslation } from '../i18n/client'
import { ELanguages } from '../i18n/settings'

export default function Home({ params: { lng } }: { params: { lng: ELanguages } }) {
  const { t } = useTranslation(lng, 'translation')
  const router = useRouter()

  return (
    <main className={styles.main}>
      <Button onClick={() => router.push('/create-voucher')}>
        {t('button')}
      </Button>
    </main>
  )
}
