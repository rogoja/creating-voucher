import { useState, useLayoutEffect } from 'react'
import cn from 'classnames'

import { Input } from '../Input'
import { Range } from '../Range'

import s from './style.module.scss'

interface IInputWithRange {
  label: string
  id: string
  onChange: (value: number) => void
  className: string
  value: number
  min?: number
  max?: number
}

export const InputWithRange: React.FC<IInputWithRange> = ({
  label,
  value,
  onChange,
  className,
  id,
  min = 0,
  max = 1000,
}) => {
  const [inputValue, setInputValue] = useState(min.toString())

  const handleChageRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(+e.target.value)
    setInputValue(e.target.value)
  }

  const handleChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleBlurInput = () => {
    const amount = +inputValue
    if (Number.isNaN(amount) || min > amount) {
      onChange(min)
      setInputValue(min.toString())
      return
    }

    if (max < amount) {
      onChange(max)
      setInputValue(max.toString())
      return
    }

    onChange(amount)
    setInputValue(amount.toString())
  }

  useLayoutEffect(() => {
    setInputValue(min.toString())
  }, [min])

  return (
    <div className={cn(s.container, className)}>
      <label htmlFor={id}>
        {label}
      </label>
      <Input
        className={s.input}
        id={id}
        type="number"
        value={inputValue}
        onChange={handleChageInput}
        onBlur={handleBlurInput}
      />
      <Range
        className={s.range}
        onChange={handleChageRange}
        value={value}
        min={min}
        max={max}
      />
    </div>
  );
}