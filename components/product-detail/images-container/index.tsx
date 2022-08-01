import Image from 'next/image';
import { FC } from 'react';
import Swiper from '../../swiper';
import ImageCard from './image-card';

const ProductDetailImageContainer: FC = () => {
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

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full border shadow-md rounded-lg overflow-hidden">
        <Image
          className=""
          layout="responsive"
          src={'/temp/product.jpeg'}
          alt="..."
          width={640}
          height={450}
        />
      </div>

      <Swiper className="gap-x-5 " swipeSpeed={3}>
        {featuredProds.map(({ image, name }, idx) => {
          return <ImageCard key={idx} imageSrc={image} />;
        })}
      </Swiper>

      <hr className="my-1 opacity-30" />
    </div>
  );
};

export default ProductDetailImageContainer;
