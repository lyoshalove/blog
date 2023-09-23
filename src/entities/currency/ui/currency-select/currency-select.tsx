import { Select, SelectOption } from 'shared/ui/select/ui/select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types';

const options: SelectOption[] = [
  {
    label: Currency.RUB,
    value: Currency.RUB,
  },
  {
    label: Currency.EUR,
    value: Currency.EUR,
  },
  {
    label: Currency.USD,
    value: Currency.USD,
  },
];

interface CurrencySelectProps {
  value?: Currency;
  className?: string;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(
  (props: CurrencySelectProps) => {
    const {
      value = Currency.RUB, className, onChange, readOnly = false,
    } = props;
    const { t } = useTranslation('profile');

    const changeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <Select
        label={t('inputs.currency')}
        options={options}
        className={classNames(className)}
        onChange={changeHandler}
        readOnly={readOnly}
        value={value}
      />
    );
  },
);
