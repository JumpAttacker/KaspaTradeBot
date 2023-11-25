import i18n from 'i18next';
import LngDetector, {DetectorOptions} from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import translationRu from './ru/translation.json';
import translationEn from './en/translation.json';

const resources = {
    ru: {translation: translationRu},
    en: {translation: translationEn},
};

const options: DetectorOptions = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],

    // Keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',

    // cache user language on
    caches: ['cookie', 'localStorage'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    //cookieMinutes: 10,
    //cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement
};

const langDetector = new LngDetector(null, options);

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(langDetector)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        returnNull: false
    });

export default i18n;
