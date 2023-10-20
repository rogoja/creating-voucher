import { useState, useMemo, useEffect, useRef } from 'react'
import cn from 'classnames'

import s from './style.module.scss'

type Option = {
  id: string
  label: string
  subLabel: string
}

interface ISelect {
  label: string
  options: Option[]
  value: string
  placeholder: string
  onChange: (optionId: string) => void
  className: string
  id: string
  error?: string
}

export const Select: React.FC<ISelect> = ({
  label,
  options,
  value,
  placeholder,
  onChange,
  className,
  id,
  error,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const refSelect = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true)
    setSearchValue(e.target.value)
  }

  const handleClickInput = () => {
    setIsOpen(prevValue => !prevValue)
  }

  const onSelect = (option: Option) => {
    setSearchValue('')
    onChange(option.id)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // when the user presses the "backspace" button
    if (e.keyCode === 8 && !searchValue) {
      onChange('');
    }
  }

  const selectedOption = useMemo(() => {
    return options.find(option => option.id.toLowerCase() === value)
  }, [options, value])

  const filteredOptions = useMemo(() => {
    const _searchValue = searchValue.toLowerCase();
    return options.filter(option => {
      if (option.label.toLowerCase().includes(_searchValue)) {
        return true
      }

      if (option.subLabel && option.subLabel.toLowerCase().includes(_searchValue)) {
        return true
      }

      return false
    })
  }, [options, searchValue])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    
    const handleClickDocument = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement && refSelect.current && !refSelect.current.contains(event.target)) {
        setIsOpen(false)
        setSearchValue('')
        console.log('You clicked outside the box!')
      }
    }

    document.addEventListener('click', handleClickDocument)

    return () => {
      document.removeEventListener('click', handleClickDocument)
    }
  }, [isOpen]);

  return (
    <div className={cn(s.container, className, error && s.error)}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <div
        className={s.inputContainer}
        ref={refSelect}
        onClick={handleClickInput}
      >
        <div className={s.control}>
          {
            !selectedOption && !searchValue && (
              <div className={s.placeholder}>
                {placeholder}
              </div>
            )
          }
          {
            selectedOption && !searchValue && (
              <div className={s.value}>
                {selectedOption?.label}
              </div>
            )
          }
          <input
            className={s.input}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={searchValue}
            id={id}
          />
          {
            error && (
              <div className={s.error} data-error={error}>
                !
              </div>
            )
          }
        </div>
        {
          isOpen && (
            <div className={s.menu}>
              {filteredOptions.map((option) => (
                <div
                  className={cn(s.option, option.id === selectedOption?.id && s.selected)}
                  key={option.id}
                  onClick={() => onSelect(option)}
                >
                  {option.label}
                  <span className={s.subLabel}>
                    {option.subLabel}
                  </span>
                </div>
              ))}
              {
                !filteredOptions.length && (
                  <div className={s.noOptions}>
                    No options
                  </div>  
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}