import { Nunito } from 'next/font/google';
import Header from '@/components/Header';
import { NextSeo } from 'next-seo';
import PostCard from '@/components/PostCard';

const nunito = Nunito({ subsets: ['latin'] });

const fakePosts = [
  {
    id: 1,
    title:
      'Demystifying Blockchain: How This Revolutionary Technology is Changing Industries',
    description:
      'Blockchain technology, a decentralized and transparent ledger system, has gained significant attention in recent years for its potential to revolutionize industries beyond cryptocurrencies. In this blog post, we will demystify blockchain and explore its impact on various sectors, including finance, supply chain management, healthcare, and more. Let’s dive into the world of blockchain and discover its benefits, challenges, and real-world applications.',
    author: {
      name: 'John Doe',
      avatar:
        'https://webcoderspeed.com/wp-content/uploads/2023/04/f1013008-13c5-451c-a6d2-fa814b987a2d.jpg',
    },
    createdAt: 'April 20, 2023',
    image:
      'https://webcoderspeed.com/wp-content/uploads/2023/04/f1013008-13c5-451c-a6d2-fa814b987a2d.jpg',
    categories: ['blockchain', 'technology'],
  },
  {
    id: 2,
    title: 'React.js Hooks: Comprehensive State & Side Effect Management 2023',
    description:
      'Are you tired of using class components to manage state and handle side effects in your React.js applications? With the introduction of hooks in React.js, you can now achieve the same functionality in functional components without the need for class components. Hooks provide a more concise and readable way to manage state and handle side effects, making your code cleaner and more maintainable. In this blog post, we will guide you through how to use hooks in React.js, so you can take advantage of this powerful feature in your own applications.',
    author: {
      name: 'Webcoderspeed',
      avatar:
        'https://webcoderspeed.com/wp-content/uploads/2023/04/f1013008-13c5-451c-a6d2-fa814b987a2d.jpg',
    },
    createdAt: 'April 22, 2023',
    image:
      'https://webcoderspeed.com/wp-content/uploads/2023/04/things-you-should-know-about-react-hooks.png',
    categories: ['frontend development', 'react.js'],
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

      <div className='mx-auto max-w-5xl my-6 grid space-y-4 p-4'>
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
