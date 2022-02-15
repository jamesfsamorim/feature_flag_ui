import i18n, {InitOptions} from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json'
import pt from './languages/pt.json'

export const resources = {
    en: {translation: en},
    pt: {translation: pt},
} as const;

const options: InitOptions = {
    lng: 'en',
    resources,
    debug: true,
    interpolation: {
        escapeValue: false,
    },
}

i18n.use(initReactI18next).init(options);

export default i18n