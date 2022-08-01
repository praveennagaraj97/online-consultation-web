import { FC } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

const OrderCard: FC = () => {
  return (
    <div className="border drop-shadow-xl shadow-lg rounded-xl py-5 px-4 mb-5">
      <div className="grid grid-cols-3">
        <div>
          <div className="grid grid-cols-2 mb-1">
            <p>Order number</p>
            <p className="text-right font-semibold">#2021073000178</p>
          </div>
          <div className="grid grid-cols-2 mb-1">
            <p>Order placed on</p>
            <p className="text-right font-semibold">227 July 2021</p>
          </div>
          <div className="grid grid-cols-2 mb-1">
            <p>Order amount</p>
            <p className="text-right font-semibold">475.00</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <p>Delivery to</p>
            <div className="font-semibold flex items-center gap-2">
              <span>Robert David</span>
              <BsChevronDown />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col justify-between">
            <button className="p-2 font-semibold border-blue-zodiac border shadow-lg shadow-blue-zodiac/20 rounded-xl">
              View Order Details
            </button>
            <div className="flex items-center ml-auto text-red-400">
              <GoPrimitiveDot />
              <span>Order Placed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
