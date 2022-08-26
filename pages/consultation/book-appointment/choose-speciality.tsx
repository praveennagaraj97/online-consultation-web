import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationBookingStepper from '../../../components/consultation/shared/stepper/booking-stepper';
import ConsultationContextProvider from '../../../providers/consutation-provider';
import ChooseSpecialityView from '../../../views/consultation/booking/choose-speciality';

const ChooseSpecialityForBookingAppointmenPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Book Appointment | Choose speciality</title>
      </Head>
      <ConsultationBookingStepper />
      <SwipePageTransition>
        <ConsultationContextProvider>
          <ChooseSpecialityView />
        </ConsultationContextProvider>
      </SwipePageTransition>
    </Fragment>
  );
};

export default ChooseSpecialityForBookingAppointmenPage;
