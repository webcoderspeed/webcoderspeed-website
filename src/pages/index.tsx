import Image from 'next/image';
import { Nunito } from 'next/font/google';
import Header from '@/components/Header';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${nunito.className}`}>
      <Header />
    </main>
  );
}
