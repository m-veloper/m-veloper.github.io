import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '../src/components/layout/footer/Footer';
import { Top } from '../src/components/layout/Top/Top';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
