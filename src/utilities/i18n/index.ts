import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import { ES } from './es';
import { EN } from './en';

const resources = {
    en: { lang: EN },
    es: { lang: ES }
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        keySeparator: false,
        ns: ['lang'],
        resources,
    });

export default i18n;