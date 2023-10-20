import cn from 'classnames'
import s from './style.module.scss'

export const Loader: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
   ...props
}) => <span className={cn(s.loader, className)} {...props} />