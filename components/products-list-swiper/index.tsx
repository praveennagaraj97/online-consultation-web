import type { FC } from 'react';
import SectionTitleWithLink from '../shared/section-title-with-link';
import Swiper from '../swiper';
import ProductCard from './card';

interface ProductListSwiperProps {
  sectionTitle: string;
  products: {
    image: string;
    name: string;
  }[];
}

const ProductListSwiper: FC<ProductListSwiperProps> = ({
  sectionTitle,
  products,
}) => {
  return (
    <div>
      <SectionTitleWithLink
        sectionTitle={sectionTitle}
        link={{ href: '/', title: 'View All' }}
      />
      <Swiper className="gap-x-5 pb-3 pt-1.5" swipeSpeed={3}>
        {products.map(({ image, name }, idx) => {
          return <ProductCard key={idx} productName={name} imageSrc={image} />;
        })}
      </Swiper>
    </div>
  );
};

export default ProductListSwiper;
