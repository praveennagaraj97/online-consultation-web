import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import MyOrdersView from '../../views/accounts/orders';

const MyOrdersPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Account | Orders</title>
      </Head>
      <MyOrdersView />
    </Fragment>
  );
};

export default MyOrdersPage;
