import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import InstantConsultationConfirmView from '../../../views/consultation/instant/confirm';

const InstantConsultationConfirmPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Instant Consultation | Confirm</title>
      </Head>
      <InstantConsultationConfirmView />
    </SwipePageTransition>
  );
};

export default InstantConsultationConfirmPage;
