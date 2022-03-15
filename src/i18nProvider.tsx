import React, { useEffect, useState } from 'react';
import {
  getLocale,
  setLocale,
  init,
  ResourceMapType,
  extendResource,
} from '@js-pack/i18n';
import I18nContext from './i18nContext';

type I18nProviderProps = {
  children: React.ReactElement,
  locale: string,
  defaultLocale: string,
  supportedLocales: string[],
  resourceMap: ResourceMapType,
  onLoad: (locale: string) => void,
};

const I18nProvider = ({
  children,
  locale,
  defaultLocale,
  supportedLocales,
  resourceMap,
  onLoad,
}: I18nProviderProps) => {
  const [innerLocale, setInnerLocale] = useState(getLocale());

  const setLocaleHandler = (newLocale: string | undefined) => {
    if (newLocale) {
      setLocale(newLocale);
      if (newLocale !== innerLocale) {
        setInnerLocale(newLocale);
      }
    }
  };

  useEffect(() => {
    setLocaleHandler(locale);
    // eslint-disable-next-line
  }, [locale]);

  useEffect(() => {
    Object.keys(resourceMap).forEach((key) => {
      const lang = key;
      const resource = resourceMap[key];
      extendResource(lang, resource);
    });
  }, [resourceMap]);

  useEffect(() => {
    init({ locale: '', defaultLocale, supportedLocales });
    onLoad(getLocale());
    // eslint-disable-next-line
  }, []);

  return (
    <I18nContext.Provider
      value={{ locale: innerLocale, setLocale: setLocaleHandler }}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.defaultProps = {
  resourceMap: {},
};

export default I18nProvider;
