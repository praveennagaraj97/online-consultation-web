import type { AppProps } from 'next/app';
import { FC } from 'react';
import { SWRConfig } from 'swr';
import { useFetchOptions } from '../hooks/useSwrFetchOptions';
import Layout from '../layout';
import AuthProvider from '../providers/auth-provider';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/nprogress.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const swrOptions = useFetchOptions();

  return (
    <SWRConfig value={swrOptions}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SWRConfig>
  );
};

export default App;
