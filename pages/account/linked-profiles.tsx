import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import LinkedProfilesView from '../../views/accounts/view-linked-profiles';

const LinkedProfilesViewPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get Med Go | Account | Link Profiles</title>
      </Head>
      <LinkedProfilesView />
    </Fragment>
  );
};

export default LinkedProfilesViewPage;
