import { classNames } from 'shared/lib/classNames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './styles.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...props
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      setCaretPosition(event.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (event: any) => {
      setCaretPosition(event?.target?.selectionStart ?? 0);
    };

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    return (
      <div className={classNames(styles.inputWrapper, {}, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={styles.caretWrapper}>
          <input
            ref={inputRef}
            className={styles.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            {...props}
          />
          {isFocused && (
            <div
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  },
);
