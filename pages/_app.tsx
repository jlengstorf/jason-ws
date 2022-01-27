import KontentSmartLink from '@kentico/kontent-smart-link';
import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // This is just an example of SDK initialization inside ES6 module.
    // HTML markup should still contain all necessary data-attributes (e.g. PageSection component).
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam: 'preview-mode',
    });

    return () => {
      kontentSmartLink.destroy();
    };
  });
  return <Component {...pageProps} />;
}

export default MyApp;
