import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUserName/model/selectors/get-login-state';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import { loginActions } from '../../model/slice/login-slice';
import styles from './styles.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

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

  const onLogin = useCallback(() => {
    dispatch(
      loginByUsername({
        username,
        password,
      }),
    );
  }, [dispatch, password, username]);

  return (
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
  );
});
