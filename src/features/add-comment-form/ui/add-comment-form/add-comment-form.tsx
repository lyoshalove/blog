import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/add-comment-form-slice';
import { getAddCommentFormText } from '../../model/selectors';
import styles from './styles.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((newText: string) => {
    dispatch(addCommentFormActions.setText(newText));
  }, [dispatch]);

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text ?? '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.addCommentForm, {}, [className])}>
        <Input
          placeholder={t('writeComment')}
          value={text}
          onChange={onCommentTextChange}
          className={styles.input}
        />
        <Button onClick={onSendCommentHandler}>{t('common.send')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
