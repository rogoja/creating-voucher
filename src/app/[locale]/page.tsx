'use client'
import { useTranslations } from 'next-intl'

import { Button } from 'components/Button'
import { useRouter } from 'navigation'

import styles from './page.module.scss'

export default function Home() {
  const t = useTranslations('main');
  
  const router = useRouter()

  return (
    <main className={styles.main}>
      <Button onClick={() => router.push('/create-voucher')}>
        {t('button')}
      </Button>
    </main>
  )
}
