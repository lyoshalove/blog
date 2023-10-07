import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Text, TextAlign, TextSizes, TextTheme,
} from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/skeleton';
import { Avatar } from 'shared/ui/avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/icon';
import {
  ArticleBlock,
  ArticleBlockType,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../../../entities/article';
import { articleDetailsReducer } from '../../model/slice/article-slice';
import styles from './styles.module.scss';
import { ArticleImageBlock } from '../article-image-block/article-image-block';
import { ArticleCodeBlock } from '../article-code-block/article-code-block';
import { ArticleTextBlock } from '../article-text-block/article-text-block';

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
  ({ articleId, className }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    let content;

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      default:
        return null;
      }
    }, []);

    useEffect(() => {
      dispatch(fetchArticleById(articleId));
    }, [articleId, dispatch]);

    if (isLoading) {
      content = (
        <>
          <Skeleton
            className={styles.avatar}
            width={200}
            height={200}
            border="50%"
          />
          <Skeleton className={styles.title} width={300} height={32} />
          <Skeleton className={styles.skeleton} width={600} height={24} />
          <Skeleton className={styles.skeleton} width="100%" height={200} />
          <Skeleton className={styles.skeleton} width="100%" height={200} />
        </>
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
      content = (
        <>
          <div className={styles.avatarWrapper}>
            <Avatar
              avatarUrl={article.img}
              size={200}
              className={styles.avatar}
            />
          </div>
          <Text
            title={article.title}
            text={article.subtitle}
            className={styles.title}
            size={TextSizes.L}
          />
          <div className={styles.articleInfo}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
          </div>
          <div className={styles.articleInfo}>
            <Icon Svg={CalendarIcon} />
            <Text text={article.createdAt} />
          </div>
          {article.blocks.map(renderBlock)}
        </>
      );
    }

    return (
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          {content}
        </DynamicModuleLoader>
      </div>
    );
  },
);
