import { useLayoutEffect, useRef } from 'react'
import cn from 'classnames'

import s from './style.module.scss'

interface IRange
 extends React.InputHTMLAttributes<HTMLInputElement> {
  max?: number;
}

export const Range: React.FC<IRange> = ({
  max = 1000,
  value,
  className,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (!value || !inputRef.current) {
      return;
    }

    const progress = (+value / max) * 100;
    inputRef.current.style.background = `linear-gradient(to right, #EB3833 ${progress}%, #ccc ${progress}%)`;
  }, [value, max]);

  return (
    <div className={cn(s.range, className)}>
      <input
        ref={inputRef}
        type="range"
        max={max}
        value={value}
        className={s.input}
        {...props}
      />
    </div>
  );
}