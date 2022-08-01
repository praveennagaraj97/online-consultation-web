import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import useNProgress from '../hooks/userNProgress';
import Layout from '../layout';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/nprogress.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useNProgress();

  return (
    <Layout>
      <Head>
        <meta
          httpEquiv="ScreenOrientation"
          content="autoRotate:disabled"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
