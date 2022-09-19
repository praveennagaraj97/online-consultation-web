import { FC } from 'react';
import useSWR from 'swr';
import ConsultationOrderSummarySkeleton from '../../../../../components/skeletons/consultation/order-summary.skeleton';
import { publicRoutes } from '../../../../../routes/api-routes';
import { BaseAPiResponse } from '../../../../../types/response';
import { ConsultationTypeEntity } from '../../../../../types/response/consultation.response';
import ApplyDiscountCoupon from './apply-discount';
import PayNow from './pay';

const OrderSummary: FC = () => {
  const { isValidating, data } = useSWR<
    BaseAPiResponse<ConsultationTypeEntity>
  >(publicRoutes.ConsultationTypes + `/schedule`);

  if (isValidating || !data) {
    return <ConsultationOrderSummarySkeleton />;
  }

  return (
    <div className="col-span-1 shadow-lg rounded-lg sm:p-8 p-4 border h-min">
      <ApplyDiscountCoupon />
      <h4 className="sm:mt-14 mt-7 mb-4 text-xl font-semibold">
        Order Summary
      </h4>
      <div className="flex items-center text-lg opacity-70 mb-1 justify-between">
        <p>Consultation Charges</p>
        <p>₹ {data?.result.price}</p>
      </div>
      <div className="flex items-center text-lg opacity-70 mb-1 justify-between">
        <p>Price Discount</p>
        <p>₹ {data?.result.discount}</p>
      </div>
      <div className="flex items-center text-lg opacity-70 mb-1 justify-between">
        <p>Coupon Discount</p>
        <p>₹ 0</p>
      </div>
      <hr className="my-4 opacity-40" />
      <div className="flex items-center text-lg mb-1 justify-between">
        <p className="font-semibold">Amount to be paid</p>
        <p>₹ {data?.result.price - data?.result.discount}</p>
      </div>
      <PayNow />
    </div>
  );
};

export default OrderSummary;
