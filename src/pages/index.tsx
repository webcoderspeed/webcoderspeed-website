import { Nunito } from 'next/font/google';
import Header from '@/components/Header';
import { NextSeo } from 'next-seo';
import PostCard from '@/components/PostCard';

const nunito = Nunito({ subsets: ['latin'] });

const fakePosts = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
    },
    createdAt: 'April 20, 2023',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Dolor Sit Amet',
    description: 'Duis eu tortor vel lectus convallis rhoncus.',
    author: {
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150',
    },
    createdAt: 'April 22, 2023',
    image: 'https://via.placeholder.com/300',
  },
  // Add more fake posts objects as needed
];

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

      <div className='mx-auto max-w-5xl my-6 grid space-y-4'>
        {fakePosts?.map((post) => (
          <PostCard
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </main>
  );
}
