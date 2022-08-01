import { FC, Fragment } from 'react';
import SearchHeader from '../../components/container/search-header';
import AlternateBrands from '../../components/product-detail/alternate-brands';
import ConsultCard from '../../components/product-detail/consult-now-card';
import ProductDetailImageContainer from '../../components/product-detail/images-container';
import ProductInfo from '../../components/product-detail/product-info';
import ProductOverview from '../../components/product-detail/product-overview';
import ViewContainer from '../../components/shared/view-container';
import useWindowSize from '../../hooks/useWindowSize';

const ProductDetailView: FC = () => {
  const { width } = useWindowSize();

  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer>
        <div className="grid md:grid-cols-2   grid-cols-1 md:gap-6 my-5">
          <div>
            <ProductDetailImageContainer />
            {width >= 768 && (
              <div className="md:block hidden">
                <ProductOverview />
              </div>
            )}
          </div>
          <div>
            <ProductInfo />
            {width >= 768 && (
              <div className="md:block hidden">
                <div className="mt-10">
                  <ConsultCard />
                </div>
                <AlternateBrands />
              </div>
            )}
          </div>
          {width <= 768 && (
            <div className="md:hidden block  ">
              <ProductOverview />
              <ConsultCard />
              <AlternateBrands />
            </div>
          )}
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default ProductDetailView;
