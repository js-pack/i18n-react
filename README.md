# @js-pack/i18n-react

react wrapper of [@js-pack/i18n](https://github.com/js-pack/i18n)

## Install

```
npm i @js-pack/i18n-react
```

## Usage

App.js
```jsx
import { I18nProvider } from '@js-pack/i18n-react';
const supportedLocales = ['tr-TR', 'en-US'];

const App = () => {

  const [locale, setLocale] = useState();
  const [resourceMap, setResourceMap] = useState();

  useEffect(() => {
    setResourceMap({
      'en-US': {
        'Selam!': 'Hello!',
      },
    });
  }, []);

  return (
    <I18nProvider
      supportedLocales={supportedLocales}
      locale={locale}
      defaultLocale="tr-TR"
      resourceMap={resourceMap}
      onLoad={(loadedLocale) => {
        setLocale(loadedLocale);
      }}>
    {/* ... App */}  
    </I18nProvider>
  );
};
```

Page.js

```jsx
import { useTranslation } from '@js-pack/i18n-react';

const PageComponent = ()=>{
  const { t } = useTranslation();
  
  return <div>{t('Selam!')}</div>
}
```
