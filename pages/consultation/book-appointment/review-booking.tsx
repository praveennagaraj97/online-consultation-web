import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationBookingStepper from '../../../components/consultation/shared/stepper/booking-stepper';
import ReviewBookingView from '../../../views/consultation/booking/review-booking';

const ReviewBookingPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Consultation | Review Booking</title>
      </Head>
      <ConsultationBookingStepper step={4} />
      <SwipePageTransition>
        <ReviewBookingView />
      </SwipePageTransition>
    </Fragment>
  );
};

export default ReviewBookingPage;
