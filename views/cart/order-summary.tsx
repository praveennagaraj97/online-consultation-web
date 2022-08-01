import { FC, useState } from 'react';
import DelivertAddressModel from '../../components/modal/delivery-address';

const OrderSummary: FC = () => {
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  return (
    <div className="col-span-1 w-full bg-gray-400/30 rounded-lg h-fit py-5 px-4">
      <div className="flex justify-end w-full p-1.5 border border-blue-zodiac bg-gray-50 rounded-lg">
        <input
          type="text"
          className="p-1  w-full focus:outline-none rounded-l-lg rounded-r-none bg-transparent"
          placeholder="Apply Coupon"
        />
        <button className="razzmatazz-to-transparent rounded-lg px-4 py-1 text-gray-50 ">
          <span className="ml-1">Apply</span>
        </button>
      </div>
      <h4 className="font-semibold text-lg my-5">Order Summary</h4>
      <div className="flex justify-between items-center">
        <span>Total Amount</span>
        <span> ₹ 80</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Discount</span>
        <span> ₹ 1</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Delivery Charges 10</span>
        <span> ₹ 20</span>
      </div>

      <hr className="text-gray-50 my-3" />
      <div className="flex justify-between items-center">
        <p>Amount to be paid</p>
        <span> ₹ 99</span>
      </div>
      <small className="text-razzmatazz">
        You have saved 1.00 on this order
      </small>
      <hr className="text-gray-50 my-3" />

      <button
        onClick={() => setShowAddressModal(true)}
        className="razzmatazz-to-transparent px-5 py-2 rounded-lg block mx-auto my-5"
      >
        Add Delivery Address
      </button>
      <DelivertAddressModel
        setShowModal={setShowAddressModal}
        showModal={showAddressModal}
      />
    </div>
  );
};

export default OrderSummary;
