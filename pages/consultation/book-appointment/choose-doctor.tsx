import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationBookingStepper from '../../../components/consultation/shared/stepper/booking-stepper';
import ChooseDoctorView from '../../../views/consultation/booking/choose-doctor';

const ChooseDoctorToBookAppointmentPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Book Appointment | Choose Doctor</title>
      </Head>
      <ConsultationBookingStepper step={2} />
      <SwipePageTransition>
        <ChooseDoctorView />
      </SwipePageTransition>
    </Fragment>
  );
};

export default ChooseDoctorToBookAppointmentPage;
