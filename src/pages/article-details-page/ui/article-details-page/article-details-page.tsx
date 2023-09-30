import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '../../../../entities/article';
import styles from './styles.module.scss';

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(styles.articleDetailPage, {}, [className])}>
        <h1>Статья не найдена</h1>
      </div>
    );
  }

  return (
    <div className={classNames(styles.articleDetailsPage, {}, [className])}>
      <ArticleDetails articleId={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
