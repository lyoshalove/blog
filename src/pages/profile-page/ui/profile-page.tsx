import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ValidateProfileError } from '../../../entities/profile/model/types';
import {
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  fetchProfileData,
  profileReducer,
} from '../../../entities/profile';
import { ProfileCard } from '../../../entities/profile/ui';
import { ProfilePageHeader } from './profile-page-header';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);
  const validateProfileErrors = useSelector(getProfileValidateErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('errors.serverError'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('errors.incorrectRegion'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('errors.noData'),
    [ValidateProfileError.NO_DATA]: t('errors.incorrectUserData'),
    [ValidateProfileError.SERVER_ERROR]: t('errors.incorrectAge'),
  };

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          firstname: value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          lastname: value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value),
        }),
      );
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency: value,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (value: Country) => {
      dispatch(
        profileActions.updateProfile({
          country: value,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(className)}>
        <ProfilePageHeader />
        {validateProfileErrors?.map((error) => {
          return (
            <Text
              key={error}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[error]}
            />
          );
        })}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          readOnly={readOnly}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
