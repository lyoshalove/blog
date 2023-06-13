import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import styles from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={changeLanguage}
    >
      {t("Language")}
    </Button>
  );
};
