'use client'
import React, { useState, useMemo } from 'react'

import { useTranslation } from '@/app/i18n/client'
import { ELanguages } from '@/app/i18n/settings'
import { TextAreaField } from '@/components/fields/TextAreaField'
import { Select } from '@/components/fields/Select'
import { Button } from '@/components/Button'
import { InputWithRange } from '@/components/fields/InputWithRange'
import { Voucher } from '@/components/Voucher'
import users from '@/constants/users'
import delay from '@/utils/delay'

import s from './page.module.scss'

const options = users.map(user => ({
  label: user.fullName,
  subLabel: user.phone,
  id: user.phone,
}));

const minAmount = 1;

export default function Home({ params: { lng } }: { params: { lng: ELanguages } }) {
  const { t } = useTranslation(lng, 'create-voucher')
  const [messageToFriend, setMessageToFriend] = useState('')
  const [amount, setAmount] = useState(minAmount)
  const [selectedUserId, setSelectedUserId] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState('')

  const handleChage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageToFriend(e.target.value)
  }

  const handleChageRange = (value: number) => {
    setAmount(value)
  }

  const handleChageUser = (optionId: string) => {
    setError('')
    setSelectedUserId(optionId)
  }

  const hadleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!selectedUserId) {
      setError('requiredField')
      return
    }

    setIsFetching(true)
    await delay(2000)
    setIsFetching(false)
    console.log('send')
  }

  const selectedOption = useMemo(() => options.find(option => option.id.toLowerCase() === selectedUserId), [options, selectedUserId])

  return (
    <main className={s.main}>
      <form
        onSubmit={hadleSubmit}
        className={s.form}
      >
        <h1>
          {t('title')}
        </h1>
        <Voucher
          amount={amount}
          message={messageToFriend}
          className={s.voucher}
          forWhoam={selectedOption?.label}
          lng={lng}
        />
        <InputWithRange
          id="voucherDenomination"
          label={`${t('voucherDenomination')}:`}
          onChange={handleChageRange}
          className={s.range}
          value={amount}
          min={minAmount}
        />
        <TextAreaField
          id="message"
          label={`${t('message')}:`}
          onChange={handleChage}
          value={messageToFriend}
          className={s.textAreaField}
          maxLength={120}
        />
        <Select
          id="forWhoam"
          label={`${t('forWhoam')}:`}
          placeholder={t('select')}
          onChange={handleChageUser}
          value={selectedUserId}
          className={s.textAreaField}
          options={options}
          error={t(error)}
        />
        <Button
          type="submit"
          className={s.button}
          isLoading={isFetching}
        >
          {t('button')}
        </Button>
      </form>
    </main>
  )
}
