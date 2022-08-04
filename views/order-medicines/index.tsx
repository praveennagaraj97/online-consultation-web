import { FC } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import ViewContainer from '../../components/container/view-container';
import ProductListSwiper from '../../components/products-list-swiper';

const OrderMedicinesView: FC = () => {
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
    <ViewContainer>
      <h1 className="text-xl font-semibold my-5">Order Medicines</h1>
      <div className="bg-blue-zodiac px-4 py-4 rounded-md mb-8">
        <p className="text-gray-50 mb-5 text-center">
          Place your order now and get it delivered home
        </p>
        <div className="flex lg:flex-row flex-col gap-4">
          <input
            type="text"
            placeholder="Select Location"
            className=" common-input px-3 py-2"
          />
          <input
            type="text"
            placeholder="Search for medicines"
            className=" common-input px-3 py-2"
          />
          <button className="razzmatazz-to-transparent rounded-lg sm:px-6 px-2 py-2 flex items-center hover:text-gray-50 md:w-40 w-full ml-auto">
            <BiSearchAlt />
            <span className="ml-1">Search</span>
          </button>
        </div>
      </div>
      <ProductListSwiper
        products={featuredProds}
        sectionTitle="Featured Products"
      />
      <br />
      <ProductListSwiper
        products={featuredProds}
        sectionTitle="Discount Products"
      />
    </ViewContainer>
  );
};

export default OrderMedicinesView;
