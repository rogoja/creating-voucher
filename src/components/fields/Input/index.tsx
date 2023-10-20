import cn from 'classnames'

import s from './style.module.scss'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => (
  <input
    className={cn(s.input, className)}
    {...props}
  />
);