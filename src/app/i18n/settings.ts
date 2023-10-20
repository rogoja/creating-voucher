export enum ELanguages {
  en = 'en',
  ru = 'ru',
}
export type Options = {
  supportedLngs: ELanguages[],
  fallbackLng: ELanguages,
  lng: ELanguages,
  fallbackNS: string,
  defaultNS: string,
  ns: string,
}

export const fallbackLng = ELanguages.en;
export const languages: ELanguages[] = [fallbackLng, ELanguages.ru]
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS): Options {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
