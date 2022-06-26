import { t, TranslateOptions } from '@js-pack/i18n';
import { useContext } from 'react';
import I18nContext from './i18nContext';

export const useTranslation = () => {
  const { locale } = useContext(I18nContext);

  return {
    get locale() {
      return locale;
    },
    get t() {
      return t;
    },
  };
};
