import type { NextPage } from 'next';
import Head from 'next/head';
import FadePageTransition from '../components/animations/fade-page-transition';
import HomePageView from '../views/home';

const Home: NextPage = () => {
  return (
    <FadePageTransition>
      <Head>
        <title>Get Med Go</title>
      </Head>
      <HomePageView />
    </FadePageTransition>
  );
};

export default Home;
