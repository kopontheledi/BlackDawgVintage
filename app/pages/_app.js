import Head from 'next/head';
import Layout from '@/components/Layout/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewpoint' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
