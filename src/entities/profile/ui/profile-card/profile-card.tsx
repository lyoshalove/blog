import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileLoading } from 'entities/profile/model/selectors';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from './styles.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  const { t } = useTranslation('profile');

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={classNames(styles.header)}>
        <Text title={t('profile')} />
        <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
          {t('edit')}
        </Button>
      </div>
      <div className={styles.info}>
        <Input value={profileData?.firstname} placeholder={t('inputs.firstname')} />
        <Input value={profileData?.lastname} placeholder={t('inputs.lastname')} />
      </div>
    </div>
  );
};
