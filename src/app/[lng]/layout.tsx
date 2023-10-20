import { dir } from 'i18next'
import { Header } from '@/components/Header'

import { languages, ELanguages } from '../i18n/settings'
import '../../scss/globals.scss'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const RootLayout = ({
  children,
  params: {
    lng,
  },
}: {
  children: React.ReactNode
  params: {
    lng: ELanguages,
  },
}) => (
  <html lang={lng} dir={dir(lng)}>
    <head />
    <body>
      <Header
        lng={lng}
      />
      {children}
    </body>
  </html>
)

export default RootLayout;
