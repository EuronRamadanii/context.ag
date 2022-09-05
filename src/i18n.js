import i18n from 'i18next';
import { useTranslation,initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    supportedLngs:['en','fr','de','sq'],
    backend:{
        //translation  file path
        loadPath : "/assets/i18n/{{lng}}/translation.json"
    },
    detection:{
              order: ['cookie', 'htmlTag','localStorage', 'path', 'subdomain'],
              caches:['cookie'],
            },
    fallbackLng : "en",
    //disabled in prod
    debug:true,
    //ns
    interpolation:{
        formatSeparator:','
    },
    react:{
        wait:true,
    },

})

export default i18n