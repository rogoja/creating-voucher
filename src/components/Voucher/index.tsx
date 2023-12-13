
import cn from 'classnames'
import { useTranslations } from 'next-intl'

import s from './style.module.scss'

interface IVoucher {
  amount: number;
  message?: string;
  className?: string;
  forWhoam?: string;
}

export const Voucher: React.FC<IVoucher> = ({
  amount,
  message,
  className,
  forWhoam,
}) => {
  const t = useTranslations('create-voucher')

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