import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';
import { Profile } from '../../../../entities/profile/model/types';
import styles from './styles.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  readOnly?: boolean;
}

export const ProfileCard = ({
  className,
  data: profileData,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  readOnly = false,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t: tProfile } = useTranslation('profile');
  const { t } = useTranslation();

  const mods = {
    [styles.editing]: !readOnly,
  };

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          title={tProfile('errors.loadingError')}
          text={t('updatePage')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      {profileData?.avatar && (
        <div className={styles.avatarWrapper}>
          <Avatar avatarUrl={profileData?.avatar} />
        </div>
      )}
      <div className={styles.info}>
        <Input
          value={profileData?.firstname}
          placeholder={tProfile('inputs.firstname')}
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
        <Input
          value={profileData?.lastname}
          placeholder={tProfile('inputs.lastname')}
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
        <Input
          value={profileData?.age}
          type="number"
          placeholder={tProfile('inputs.age')}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          value={profileData?.city}
          placeholder={tProfile('inputs.city')}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          value={profileData?.username}
          type="number"
          placeholder={tProfile('inputs.username')}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          value={profileData?.avatar}
          placeholder={tProfile('inputs.avatar')}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          value={profileData?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          value={profileData?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
