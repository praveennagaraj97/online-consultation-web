import { NextPage } from 'next';
import Head from 'next/head';
import SwipePageTransition from '../../components/animations/swipe-page-transition';
import CreatePatientProfileView from '../../views/consultation/create-patient-profile';

const CreatePatientProfilePage: NextPage = () => {
  return (
    <SwipePageTransition>
      <Head>
        <title>Get Med Go | Create Patient Profile</title>
      </Head>
      <CreatePatientProfileView />
    </SwipePageTransition>
  );
};

export default CreatePatientProfilePage;
