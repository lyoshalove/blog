import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../entities/Counter';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return (
    <>
      <h1>{t('About page')}</h1>
      <Counter />
    </>
  );
});

export default AboutPage;
