import { FC } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import SummaryCard from './summary-card';

const OrderSummary: FC = () => {
  return (
    <div className="rounded-lg shadow-md px-2 py-4">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Order Summary</h5>
        <button className="opacity-70 flex items-center gap-1">
          <FaRegEdit size={20} />
          <span>Edit Cart</span>
        </button>
      </div>
      <hr className="opacity-30 my-2" />

      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />

      <div className="flex justify-between items-center pt-3 px-2">
        <h6 className="text-xl font-semibold">Amount to be paid</h6>
        <span className="text-right font-semibold block">₹ 143</span>
      </div>
    </div>
  );
};

export default OrderSummary;
