import getLocale from '@/client/providers/libs/getLocale'
import type { NextRequest } from 'next/server'
import { LocaleTypes, languages } from './client/providers/utils/i18n.config'


export function middleware(request: NextRequest) {

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl    
  const pathnameHasLocale = languages.some( (locale: LocaleTypes) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}` )  
  if (pathnameHasLocale) return


  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)

}
 
export const config = {
  matcher: [

    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    //'/about/:path*',
    
  ],
}
