import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../../components/animations/fade-page-transition';
import { publicRoutes } from '../../routes/api-routes';
import { PaginatedBaseAPiResponse } from '../../types/response';
import { ConsultationTypeEntity } from '../../types/response/consultation.response';
import { requestOptions } from '../../utils/fetchOptions';
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
    const { data } = await axios.get<
      PaginatedBaseAPiResponse<ConsultationTypeEntity[]>
    >(publicRoutes.ConsultationTypes, requestOptions());

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
