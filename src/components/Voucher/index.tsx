import { useEffect, useLayoutEffect, useRef } from 'react'
import cn from 'classnames'
import { useTranslation } from '@/app/i18n/client'
import { ELanguages } from '@/app/i18n/settings'

import s from './style.module.scss'

interface IVoucher {
  amount: number;
  message?: string;
  className?: string;
  forWhoam?: string;
  lng: ELanguages;
}

export const Voucher: React.FC<IVoucher> = ({
  amount,
  message,
  className,
  forWhoam,
  lng,
}) => {
  const { t } = useTranslation(lng, 'create-voucher')

  return (
    <div className={cn(s.voucher, className)}>
      <div className={s.body}>
        <div className={s.text}>
          <h5 className={s.title}>
            Gift Voucher
          </h5>
          <strong className={s.amount}>
            ${amount}
          </strong>
        </div>
        <div className={s.borderLeft} />
        <div className={s.borderRight} />
      </div>
      <div className={s.footer}>
        <div className={s.details}>
          <span className={s.label}>
            {t('forWhoam')}:
          </span>
          <span className={s.value}>
            {forWhoam}
          </span>
        </div>
        {
          message && (
            <div className={s.details}>
              <span className={s.label}>
                {t('message')}:
              </span>
              <span className={s.value}>
                {message}
              </span>
            </div>
          )
        }
      </div>
    </div>
  )
}