import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import InstantConsultationView from '../../../views/consultation/instant';

const InstantConsultationPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Instant Consultation</title>
      </Head>
      <InstantConsultationView />
    </SwipePageTransition>
  );
};

export default InstantConsultationPage;
