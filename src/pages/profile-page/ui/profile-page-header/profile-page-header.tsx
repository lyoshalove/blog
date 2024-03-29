import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '../../../../entities/profile';
import styles from './styles.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t: tProfile } = useTranslation('profile');
  const { t } = useTranslation();
  const isReadOnly = useSelector(getProfileReadonly);
  const userData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = userData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
    onCancelEdit();
  }, [dispatch, onCancelEdit]);

  return (
    <div className={classNames(className, {}, [styles.header])}>
      <Text title={tProfile('profile')} />
      {canEdit && (
        <div className={styles.buttons}>
          {isReadOnly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={styles.editBtn}
              onClick={onEdit}
            >
              {t('common.edit')}
            </Button>
          ) : (
            <>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t('common.cancel')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t('common.save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
