import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import OrderMedicinesView from '../../views/order-medicines';

const OrderMedicinesPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Order Medicines</title>
      </Head>
      <OrderMedicinesView />
    </FadePageTransition>
  );
};

export default OrderMedicinesPage;
