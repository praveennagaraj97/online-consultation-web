import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../../components/animations/fade-page-transition';
import LoginWithEmailView from '../../../views/auth/login/email';

const EmailLoginPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Login</title>
      </Head>
      <LoginWithEmailView />
    </FadePageTransition>
  );
};

export default EmailLoginPage;
