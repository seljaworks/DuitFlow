import * as Localization from "expo-localization";
import i18n from "i18next";
import { MMKV } from "react-native-mmkv";

import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationId from "./locales/id/translation.json";

const resources = {
  id: { translation: translationId },
  en: { translation: translationEn },
};

export const storage = new MMKV();

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
