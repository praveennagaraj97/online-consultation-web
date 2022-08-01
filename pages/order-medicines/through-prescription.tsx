import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import OrderMedicinesThroughPrescriptionView from '../../views/order-medicines/through-prescription';

const OrderMedicinesThroughPrescriptionPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Order Medicines Through Prescription</title>
      </Head>
      <OrderMedicinesThroughPrescriptionView />
    </FadePageTransition>
  );
};

export default OrderMedicinesThroughPrescriptionPage;
