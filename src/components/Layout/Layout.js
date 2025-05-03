// components/Layout/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'PICA Medical - Redefining Vascular Care' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="PICA Medical - Pioneering thrombectomy technology for better vascular care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>{children}</main>
      
      <Footer />
    </>
  );
};

export default Layout;