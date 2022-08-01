import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../../components/animations/fade-page-transition';
import ProductDetailView from '../../../views/product-detail';

const ProductDetail: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Dolo 650</title>
      </Head>
      <ProductDetailView />
    </FadePageTransition>
  );
};

export default ProductDetail;
