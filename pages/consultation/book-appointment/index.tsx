import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationContextProvider from '../../../providers/consutation-provider';
import BookAppointmentForConsultationView from '../../../views/consultation/booking';

const BookAppointmentForConsultationPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Book Appointment</title>
      </Head>
      <ConsultationContextProvider>
        <BookAppointmentForConsultationView />
      </ConsultationContextProvider>
    </SwipePageTransition>
  );
};

export default BookAppointmentForConsultationPage;
