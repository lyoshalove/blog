import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { SelectOption } from 'shared/ui/select/ui/select';
import { Country } from '../../model/types';

const options: SelectOption[] = [
  {
    label: Country.ARMENIA,
    value: Country.ARMENIA,
  },
  {
    label: Country.CHINE,
    value: Country.CHINE,
  },
  {
    label: Country.JAPAN,
    value: Country.JAPAN,
  },
  {
    label: Country.RUSSIA,
    value: Country.RUSSIA,
  },
  {
    label: Country.UAE,
    value: Country.UAE,
  },
];

interface CountrySelectProps {
  value?: Country;
  className?: string;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = (props: CountrySelectProps) => {
  const {
    value = Country.RUSSIA, className, onChange, readOnly = false,
  } = props;
  const { t } = useTranslation('profile');

  const changeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      label={t('inputs.country')}
      options={options}
      className={classNames(className)}
      onChange={changeHandler}
      readOnly={readOnly}
      value={value}
    />
  );
};
