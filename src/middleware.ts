import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server'
import { defaultLocale, locales, localePrefix } from './navigation';


export function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    localePrefix,
    defaultLocale
  });

  const response = handleI18nRouting(request);
 
  response.headers.set('x-url', request.url);

  return response;
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};