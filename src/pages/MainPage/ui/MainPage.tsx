import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation('main');
  return <div>{t('Home Page')}</div>;
};

export default MainPage;
