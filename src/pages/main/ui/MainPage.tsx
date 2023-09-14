import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Counter } from '../../../entities/Counter';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <>
      <h1>{t('Main page')}</h1>
      <Counter />
    </>
  );
});

export default MainPage;
