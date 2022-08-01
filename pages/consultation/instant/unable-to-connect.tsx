import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import UnableToConnectViewView from '../../../views/consultation/instant/unable-to-connect';

const InstantConsultationUnableToConnectPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Instant Consultation | Unable to connect</title>
      </Head>
      <UnableToConnectViewView />
    </SwipePageTransition>
  );
};

export default InstantConsultationUnableToConnectPage;
