import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/styles/globals.css';
import '@/styles/blog.postcard.scss'
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
