import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import uz from "./locales/uz.json"
import ru from "./locales/ru.json"
import en from "./locales/en.json"



i18n

.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'uz',
    debug: true,
    lng: i18n.language,
    resources:{
        uz:{translation:uz},
        ru:{translation:ru},
        en:{translation:en},


    },
    detection:{
        order: ['localStorage','navigator'],
        caches: ['localStorage'],
        lookupLocalStorage:'language'
    }
  });

export default i18n;