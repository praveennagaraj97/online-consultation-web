import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import InstantConsultationConnectToDoctorView from '../../../views/consultation/instant/connect';

const InstantConsultationConnectToDoctorPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Instant Consultation | Connecting To Doctor</title>
      </Head>
      <InstantConsultationConnectToDoctorView />
    </SwipePageTransition>
  );
};

export default InstantConsultationConnectToDoctorPage;
