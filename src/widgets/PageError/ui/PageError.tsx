import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload();

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <h2 style={{ marginBottom: 20 }}>{t('OccuredError')}</h2>
      <Button onClick={reloadPage}>{t('ReloadPage')}</Button>
    </div>
  );
};
