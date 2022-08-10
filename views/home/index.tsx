import { FC } from 'react';
import useSWR from 'swr';
import ViewContainer from '../../components/container/view-container';
import DoctorsPanel from '../../components/doctor-panel';
import ProductListSwiper from '../../components/products-list-swiper';
import { useAuthContext } from '../../context/auth-context';
import Carousel from './carousel';
import QuickLinkCards from './quick-link-cards';

const HomePageView: FC = () => {
  const featuredProds = [
    {
      image: '/temp/Image1.png',
      name: 'LivePure',
    },
    {
      image: '/temp/Image2.png',
      name: 'Medicine',
    },
    {
      image: '/temp/Image3.png',
      name: 'Doping',
    },
    {
      image: '/temp/Image4.png',
      name: 'Herbolax',
    },
    {
      image: '/temp/Image5.png',
      name: 'Epidolex',
    },
    {
      image: '/temp/Image6.png',
      name: 'StonAid',
    },
    {
      image: '/temp/Image7.png',
      name: 'Amlodipine',
    },

    {
      image: '/temp/p1.jpeg',
      name: 'Himalaya Face Cream',
    },
    {
      image: '/temp/p2.jpeg',
      name: 'Nitron Icepac Action',
    },
    {
      image: '/temp/p3.jpeg',
      name: 'Fast Relief - Ayurvedic Pain Relief Ointment For Instant & Long Lasting Ache',
    },
    {
      image: '/temp/p4.jpeg',
      name: 'Amoebica - Ayurvedic Diarrhoea Medicine',
    },
    {
      image: '/temp/p5.jpeg',
      name: 'Cough Drops - Menthol',
    },
  ];

  const { isLogged } = useAuthContext();

  const { data } = useSWR(isLogged ? '/api/v1/user' : '');

  console.log(data);
  return (
    <ViewContainer ariaDescribedBy="Home Page Section Start">
      <Carousel />
      <QuickLinkCards />
      <ProductListSwiper
        products={featuredProds}
        sectionTitle="Featured Products"
      />
      <br />
      <ProductListSwiper
        products={featuredProds}
        sectionTitle="Discount Products"
      />
      <br />
      <DoctorsPanel />
    </ViewContainer>
  );
};

export default HomePageView;
