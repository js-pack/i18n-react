import { t, TranslateOptions } from '@js-pack/i18n';
import { useContext } from 'react';
import I18nContext from './i18nContext';

export const useTranslation = () => {
  useContext(I18nContext);

  return {
    get t() {
      return t;
    },
  };
};
