import { classNames } from "shared/lib/classNames";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        className={styles.input}
        placeholder={t("auth.username.placeholder")}
        autoFocus
      />
      <Input
        className={styles.input}
        type="password"
        placeholder={t("auth.password.placeholder")}
      />
      <Button className={styles.loginBtn}>{t("Login")}</Button>
    </div>
  );
};
