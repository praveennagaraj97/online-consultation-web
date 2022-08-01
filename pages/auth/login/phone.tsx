import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../../components/animations/fade-page-transition';
import LoginWithPhoneView from '../../../views/auth/login/phone';

const PhoneLoginPage: NextPage = () => {
  return (
    <FadePageTransition durationInSec={0}>
      <Head>
        <title>Get Med Go | Login</title>
      </Head>
      <LoginWithPhoneView />
    </FadePageTransition>
  );
};

export default PhoneLoginPage;
