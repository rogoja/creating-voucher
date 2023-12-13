import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Header } from 'components/Header'

import { ELanguages, locales } from 'navigation'
import '../../scss/globals.scss'

interface IRootLayout {
  children: React.ReactNode
  params: {
    locale: ELanguages,
  },
}

const RootLayout: React.FC<IRootLayout> = ({
  children,
  params: {
    locale,
  },
}) => {
  if (!locales.includes(locale)) notFound();

  const messages = useMessages();

  return (
    <html lang={locale}>
      <head />
      <body>
        <Header
          locale={locale}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
