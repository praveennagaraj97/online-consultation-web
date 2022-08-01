import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../../../components/animations/swipe-page-transition';
import DoctorProfileView from '../../../../../views/consultation/booking/doctor-profile';

const DoctorProfilePage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Consultation | Doctor Profle</title>
      </Head>
      <DoctorProfileView />
    </SwipePageTransition>
  );
};

export default DoctorProfilePage;
