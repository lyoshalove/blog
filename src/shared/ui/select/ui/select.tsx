import { classNames } from 'shared/lib/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import { DefaultTFuncReturn } from 'i18next';
import styles from './styles.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  value?: string;
  label?: string | DefaultTFuncReturn;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, onChange, readOnly, value,
  } = props;
  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const memoizedOptions = useMemo(() => {
    return options?.map((option) => (
      <option key={option.value} className={styles.option} value={option.value}>
        {option.label}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        className={styles.select}
        value={value}
        onChange={changeHandler}
        disabled={readOnly}
      >
        {memoizedOptions}
      </select>
    </div>
  );
});
