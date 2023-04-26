import { Nunito } from 'next/font/google';
import Header from '@/components/Header';
import { NextSeo } from 'next-seo';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${nunito.className}`}>
      <NextSeo
        title='webcoderspeed - Latest Tech News, Code, and AI Articles'
        description='Stay up-to-date with the latest technology news, coding tutorials, and articles on artificial intelligence (AI) at webcoderspeed.'
        canonical='https://webcoderspeed.com/'
        openGraph={{
          title: 'webcoderspeed - Latest Tech News, Code, and AI Articles',
          description:
            'Stay up-to-date with the latest technology news, coding tutorials, and articles on artificial intelligence (AI) at webcoderspeed.',
          url: '/logo.png',
          images: [
            {
              url: '/logo.png',
              alt: 'webcoderspeed - Latest Tech News, Code, and AI Articles',
            },
          ],
          site_name: 'webcoderspeed',
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <Header />
    </main>
  );
}
