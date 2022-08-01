import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import ProfileView from '../../views/accounts/profile';

const AccountsPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Account | Profile</title>
      </Head>
      <ProfileView />
    </Fragment>
  );
};

export default AccountsPage;
