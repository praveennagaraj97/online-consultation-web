import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import CartManualPrescriptionView from '../../views/cart/manual-prescription';

const CartManualPrescriptionPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Cart Manual Prescription</title>
      </Head>
      <CartManualPrescriptionView />
    </FadePageTransition>
  );
};

export default CartManualPrescriptionPage;
