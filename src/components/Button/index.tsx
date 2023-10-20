import cn from 'classnames'

import { Loader } from '../Loader'

import s from './style.module.scss'

interface IButton 
 extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  isLoading?: boolean;
}

export const Button: React.FC<IButton> = ({
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={cn(s.button, className)}
    >
      {isLoading ? (
        <Loader />
      ) : children}
    </button>
  );
}