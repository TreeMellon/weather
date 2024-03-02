import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


const enData = require('./translations/en.json');
const krData = require('./translations/kr.json');


const resources = {
    en: {
        translation: enData,
    },
    kr: {
        translation: krData,
    },
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    compatibilityJSON: 'v3',
    //language to use if translation in user language is not available
    fallbackLng: 'en',
    resources,
  })

export default i18next;