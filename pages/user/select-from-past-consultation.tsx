import { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import SelectFromPastConsultationView from '../../views/user/select-from-past-consultation';

const SelectFromPastConsultation: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Select from Past Consultation</title>
      </Head>
      <SelectFromPastConsultationView />
    </FadePageTransition>
  );
};

export default SelectFromPastConsultation;
