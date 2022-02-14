import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json'
import pt from './languages/pt.json'

export const defaultNS = 'en'
export const resources = {
    en: {en},
    pt: {pt},
} as const;

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    defaultNS,
    resources,
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: true,
    },
});

export default i18n