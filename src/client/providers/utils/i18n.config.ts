

export const fallbackLng = 'en'
export const languages = [fallbackLng, "fr", "ar"]

export const defaultNS = 'common'
export const namespaces = [defaultNS, "page", "products"]

export type LocaleTypes = (typeof languages)[number];
export type NSTypes = (typeof namespaces)[number];

export const i18nConfig = {
    locales: languages,
    defaultLocale: fallbackLng,
};