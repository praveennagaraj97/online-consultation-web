import { FC } from 'react';

const ApplyDiscountCoupon: FC = () => {
  return (
    <div className="sm:px-12">
      <div className=" flex justify-end p-1.5 border border-blue-zodiac bg-gray-50 rounded-lg">
        <input
          type="text"
          className="p-2  w-full focus:outline-none rounded-l-lg rounded-r-none bg-transparent"
          placeholder="Got Coupon?"
        />
        <button className="razzmatazz-to-transparent rounded-lg px-4 py-1 text-gray-50 ">
          <span className="ml-1">Apply</span>
        </button>
      </div>
    </div>
  );
};

export default ApplyDiscountCoupon;
