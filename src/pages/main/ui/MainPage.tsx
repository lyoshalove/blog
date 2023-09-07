import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../entities/Counter';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <h1>{t('Main page')}</h1>
      <Counter />
    </>
  );
};

export default MainPage;
