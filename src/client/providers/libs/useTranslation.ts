// import 'server-only'

import { LocaleTypes, NSTypes, defaultNS, fallbackLng } from "../utils/i18n.config"

const useTranslations = async (locale: LocaleTypes = fallbackLng, ns: NSTypes = defaultNS) => {

  return  import(`/src/client/providers/locales/${locale}/${ns}.json`).then((module) => module.default)

}

export default useTranslations 