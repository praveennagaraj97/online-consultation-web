import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import SwipePageTransition from '../../../components/animations/swipe-page-transition';
import ConsultationBookingStepper from '../../../components/consultation/shared/stepper/booking-stepper';
import ConsultationContextProvider from '../../../providers/consutation-provider';
import { consultationAPiService } from '../../../services/consultation-api.service';
import ChooseSpecialityView, {
  ChooseSpecialityViewProps,
} from '../../../views/consultation/booking/choose-speciality';

const ChooseSpecialityForBookingAppointmenPage: NextPage<
  ChooseSpecialityViewProps
> = ({ hasMore, specialities }) => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Book Appointment | Choose speciality</title>
      </Head>
      <ConsultationBookingStepper step={1} />
      <SwipePageTransition>
        <ConsultationContextProvider>
          <ChooseSpecialityView hasMore={hasMore} specialities={specialities} />
        </ConsultationContextProvider>
      </SwipePageTransition>
    </Fragment>
  );
};

export default ChooseSpecialityForBookingAppointmenPage;

export const getStaticProps: GetStaticProps<
  ChooseSpecialityViewProps
> = async () => {
  try {
    const { data } = await consultationAPiService.specialityList;
    return { props: { hasMore: data.next, specialities: data.results || [] } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
