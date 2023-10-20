import cn from 'classnames';
import s from './style.module.scss'

interface ITextAreaField 
 extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextAreaField: React.FC<ITextAreaField> = ({
  label,
  className,
  rows = 5,
  id = 'textArea',
  ...props
}) => {
  return (
    <div className={cn(s.container, className)}>
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        className={s.textArea}
        id={id}
        rows={rows}
        {...props}
      />
    </div>
  );
}