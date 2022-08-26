import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import { consultationAPiService } from '../../services/consultation-api.service';
import ConsultationView, {
  ConsultationViewProps,
} from '../../views/consultation';

const ConsultationPage: NextPage<ConsultationViewProps> = ({ types }) => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go | Consultation</title>
      </Head>
      <ConsultationView types={types} />
    </FadePageTransition>
  );
};

export default ConsultationPage;

export const getStaticProps: GetStaticProps<
  ConsultationViewProps
> = async () => {
  try {
    const { data } = await consultationAPiService.consulatationTypes;

    if (!data.results) {
      return {
        notFound: true,
      };
    }

    return {
      props: { types: data.results },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
