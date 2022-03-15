import React from 'react';

const I18nContext = React.createContext<{
  locale: string;
  setLocale: Function;
}>({ locale: '', setLocale: () => {} });

I18nContext.displayName = 'I18nContext';

export default I18nContext;
