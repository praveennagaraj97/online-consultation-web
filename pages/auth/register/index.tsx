import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../../components/animations/fade-page-transition';
import RegisterView from '../../../views/auth/register';

const RegisterPage: NextPage = () => {
  return (
    <FadePageTransition durationInSec={0}>
      <Head>
        <title>Get Med Go | Register</title>
      </Head>
      <RegisterView />
    </FadePageTransition>
  );
};

export default RegisterPage;
