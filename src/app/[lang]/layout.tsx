
import { ApolloWrapper } from '@/client/ui/providers/ApolloWrapper'
import LanguageContext from '@/client/ui/providers/LanguageContext'
import ReduxProvider from '@/client/ui/providers/Redux'
import '@/client/ui/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    template: '%s | Next App',
    default: 'Next App', 
  },
  description: 'Generated by create next app',

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },


  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  colorScheme: 'dark',
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',


}

export default function RootLayout({ children, params: { lang } }: { children: React.ReactNode, params: { lang :string }}) {


  return (

    <html lang={lang}>
      <body className={inter.className}>

        <ReduxProvider>


          {/* <GraphQLProvider>
            {children}
          </GraphQLProvider> */}

          <ApolloWrapper>

            <LanguageContext lng={lang}>
                {children}
            </LanguageContext>

        

            
          </ApolloWrapper>


        </ReduxProvider>

      </body>
    </html>
  )
}
