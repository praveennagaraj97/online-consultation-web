import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ReviewBookingView from '../../../views/consultation/booking/review-booking';

const ReviewBookingPage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Consultation | Review Booking</title>
      </Head>
      <ReviewBookingView />
    </SwipePageTransition>
  );
};

export default ReviewBookingPage;
