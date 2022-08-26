import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationBookingStepper from '../../../components/consultation/shared/stepper/booking-stepper';
import ConsultationContextProvider from '../../../providers/consutation-provider';
import BookAppointmentForConsultationView from '../../../views/consultation/booking';

const BookAppointmentForConsultationPage: NextPage = () => {
  return (
    <Fragment>
      <ConsultationBookingStepper />
      <Head>
        <title>Get Med Go | Book Appointment</title>
      </Head>
      <SwipePageTransition>
        <ConsultationContextProvider>
          <BookAppointmentForConsultationView />
        </ConsultationContextProvider>
      </SwipePageTransition>
    </Fragment>
  );
};

export default BookAppointmentForConsultationPage;
