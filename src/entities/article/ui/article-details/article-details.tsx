import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/skeleton';
import {
  fetchArticleById, getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from '../../../../entities/article';
import { articleDetailsReducer } from '../../model/slice/article-slice';
import styles from './styles.module.scss';

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ articleId, className }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);
  let content;

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [articleId, dispatch]);

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </div>
    );
  }

  if (error) {
    content = (
      <Text
        title="Произошла ошибка при загрузке статьи"
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  }

  if (article) {
    content = <h1>Article Details</h1>;
  }

  return (
    <div className={classNames(styles.ArticleDetails, {}, [className])}>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        {content}
      </DynamicModuleLoader>
    </div>
  );
});
