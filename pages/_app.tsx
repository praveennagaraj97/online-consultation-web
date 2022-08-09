import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { SWRConfig } from 'swr';
import Layout from '../layout';
import AuthProvider from '../providers/auth-provider';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/nprogress.css';
import { fetchOptions } from '../utils/fetchOptions';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={fetchOptions}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SWRConfig>
  );
};

export default App;
