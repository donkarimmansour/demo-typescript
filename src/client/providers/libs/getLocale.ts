import { NextRequest } from "next/server"
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from '@/client/providers/utils/i18n.config'
import { cache } from "react"

const getLocale = (request: NextRequest): string | undefined => {

    let cookieName = "NEXT_LOCALE"

    acceptLanguage.languages(languages);

    let lng
    if (request.cookies.has(cookieName)) lng = acceptLanguage.get(request.cookies.get(cookieName)?.value)
    if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    return lng 

}
  

export default getLocale