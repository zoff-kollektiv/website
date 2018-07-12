import Backend from 'i18next-xhr-backend';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'de',
    ns: [
      'translations',
    ],
    defaultNS: 'translations',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
