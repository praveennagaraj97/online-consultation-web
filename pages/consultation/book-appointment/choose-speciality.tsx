import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ChooseSpecialityView from '../../../views/consultation/booking/choose-speciality';

const ChooseSpecialityForBookingAppointmenPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Book Appointment | Choose speciality</title>
      </Head>
      <ChooseSpecialityView />
    </SwipePageTransition>
  );
};

export default ChooseSpecialityForBookingAppointmenPage;
