import Image from 'next/image';
import { Nunito } from 'next/font/google';
import Header from '@/components/Header';
import { NextSeo } from 'next-seo';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${nunito.className}`}>
      <NextSeo
        title='WebCoderSpeed - Latest Tech News, Code, and AI Articles'
        description='Stay up-to-date with the latest technology news, coding tutorials, and articles on artificial intelligence (AI) at WebCoderSpeed.'
        canonical='https://webcoderspeed.com/'
        openGraph={{
          title: 'WebCoderSpeed - Latest Tech News, Code, and AI Articles',
          description:
            'Stay up-to-date with the latest technology news, coding tutorials, and articles on artificial intelligence (AI) at WebCoderSpeed.',
          url: '/public/logo.png',
          images: [
            {
              url: '/public/logo.png',
              alt: 'WebCoderSpeed - Latest Tech News, Code, and AI Articles',
            },
          ],
          site_name: 'WebCoderSpeed',
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
