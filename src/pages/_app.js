// pages/_app.js
import { useEffect } from 'react';
import Head from 'next/head';

// Import only Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS on client side
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* You can add additional global meta tags here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;