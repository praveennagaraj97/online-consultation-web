import { FC, Fragment } from 'react';
import CartCard from '../../components/cart/card';
import SearchHeader from '../../components/container/search-header';
import ViewContainer from '../../components/shared/view-container';
import OrderSummary from './order-summary';

const CartView: FC = () => {
  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4">
          <div className="my-5 flex justify-between items-baseline col-span-2">
            <h1 className="text-xl font-semibold">Cart Items</h1>
            <span className="text-razzmatazz">Clear Cart</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-y-5">
          <div className="col-span-2 border flex flex-col gap-1 rounded-lg shadow-md h-full w-full">
            <CartCard />
            <hr className="opacity-30 mx-4" />
            <CartCard />
            <hr className="opacity-30 mx-4" />
            <CartCard />
            <hr className="opacity-30 mx-4" />
            <CartCard />
          </div>
          <OrderSummary />
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default CartView;
