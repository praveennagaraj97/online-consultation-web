import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../../components/animations/fade-page-transition';
import RegisterView from '../../../views/auth/register';

const RegisterPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Register</title>
      </Head>
      <RegisterView />
    </FadePageTransition>
  );
};

export default RegisterPage;
