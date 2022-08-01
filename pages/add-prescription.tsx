import type { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../components/animations/fade-page-transition';
import AddPrescriptionView from '../views/add-prescription';

const AddPrescriptionPage: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Add Prescription</title>
      </Head>
      <AddPrescriptionView />
    </FadePageTransition>
  );
};

export default AddPrescriptionPage;
