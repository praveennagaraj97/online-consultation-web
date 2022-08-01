import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import ConsultationView from '../../views/consultation';

const ConsultationPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Consultation</title>
      </Head>
      <ConsultationView />
    </FadePageTransition>
  );
};

export default ConsultationPage;
