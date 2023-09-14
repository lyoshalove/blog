import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';

import {
  getLoginError, getLoginLoading, getLoginPassword, getLoginUsername,
} from 'features/AuthByUserName/model/selectors';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import { loginActions, loginReducer } from '../../model/slice/login-slice';
import styles from './styles.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLogin = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({
        username,
        password,
      }),
    );

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t('AuthForm')} />
        {error && (
          <Text text={t('errors.BadEmailOrPassword')} theme={TextTheme.ERROR} />
        )}
        <Input
          className={styles.input}
          placeholder={t('auth.username.placeholder')}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={styles.input}
          type="password"
          placeholder={t('auth.password.placeholder')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={styles.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLogin}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
