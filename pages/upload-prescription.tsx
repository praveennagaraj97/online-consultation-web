import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../components/animations/fade-page-transition';
import UploadPrescriptionView from '../views/upload-prescription';

const UploadPrescription: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Upload Prescription</title>
      </Head>
      <UploadPrescriptionView />
    </FadePageTransition>
  );
};

export default UploadPrescription;
