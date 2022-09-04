import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationBookingStepper from '../../../components/consultation/shared/stepper/booking-stepper';
import DoctorAvailabilitySlotView from '../../../views/consultation/booking/choose-slot';

const ChooseSlotToBookAppointmentPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Book Appointment | Choose Slot</title>
      </Head>
      <ConsultationBookingStepper step={3} />
      <SwipePageTransition>
        <DoctorAvailabilitySlotView />
      </SwipePageTransition>
    </Fragment>
  );
};

export default ChooseSlotToBookAppointmentPage;
