import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import BookAppointmentForConsultationView from '../../../views/consultation/booking';

const BookAppointmentForConsultationPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Book Appointment</title>
      </Head>
      <BookAppointmentForConsultationView />
    </SwipePageTransition>
  );
};

export default BookAppointmentForConsultationPage;
