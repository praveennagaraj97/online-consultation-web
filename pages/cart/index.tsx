import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import CartView from '../../views/cart';

const CartPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Cart</title>
      </Head>
      <CartView />
    </FadePageTransition>
  );
};

export default CartPage;
