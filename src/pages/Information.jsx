import { useTranslation } from 'react-i18next';
import css from '../components/Page/StyledPage/InfPage.module.css';

export const Information = () => {
  const { t } = useTranslation();
  return (
    <div className={css.Container}>
      <i>{t('inf.title')}</i>
    </div>
  );
};
