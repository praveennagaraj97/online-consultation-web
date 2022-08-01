import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ChooseDoctorView from '../../../views/consultation/booking/choose-doctor';

const ChooseDoctorToBookAppointmentPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Book Appointment | Choose Doctor</title>
      </Head>
      <ChooseDoctorView />
    </SwipePageTransition>
  );
};

export default ChooseDoctorToBookAppointmentPage;
