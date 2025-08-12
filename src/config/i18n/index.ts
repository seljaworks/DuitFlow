import * as Localization from "expo-localization";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import { storage } from "..";
import translationEn from "./locales/en.json";
import translationId from "./locales/id.json";

const resources = {
  id: { translation: translationId },
  en: { translation: translationEn },
};

const initI18n = () => {
  let savedLanguage = storage.getString("language");

  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0].languageCode || "id";
    storage.set("language", savedLanguage);
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage, // default language
    fallbackLng: "id",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
