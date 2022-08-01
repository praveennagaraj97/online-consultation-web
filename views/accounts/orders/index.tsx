import { FC } from 'react';
import AccountViewLayout from '../../../components/accounts/layout';
import OrderCard from '../../../components/accounts/orders/card';

const MyOrdersView: FC = () => {
  return (
    <AccountViewLayout option="myOrders">
      <div className="">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </AccountViewLayout>
  );
};

export default MyOrdersView;
