import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './styles.module.scss';

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(styles.articleDetailPage, {}, [className])}>
      <h1>Article Detail Page</h1>
    </div>
  );
};

export default memo(ArticleDetailPage);
