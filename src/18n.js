import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const loadPath = window.location.origin + '/cinema-room/locales/{{lng}}/translation.json';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend: {
        loadPath: loadPath,
    },
    fallbackLng: 'ua',
    debug: true
})

export default i18n