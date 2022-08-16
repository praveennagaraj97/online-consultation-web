import Image from 'next/image';
import { FC, Fragment, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import SearchHeader from '../../../components/container/search-header';
import ViewContainer from '../../../components/container/view-container';

const CartManualPrescriptionView: FC = () => {
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer>
        <h1 className="text-2xl font-semibold my-5">Cart</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="lg:col-span-2 shadow-md rounded-lg py-20 px-5 h-fit">
            <BiSearchAlt2
              size={64}
              className=" font-extralight mx-auto block"
            />
            <p className="text-lg text-center mt-3">
              Search for the products and add them to the cart
            </p>
          </div>
          <div className="col-span-1 p-4 bg-gray-200 rounded-lg">
            <div>
              <h6 className="font-semibold text-lg mb-3">Prescription Added</h6>
              <div className="w-28 h-28 bg-emerald-200 p-1 rounded-lg mb-6">
                <Image
                  src="/assets/icons/medical-prescription.png"
                  layout="responsive"
                  width={256}
                  height={256}
                  objectFit="cover"
                  alt="..."
                />
              </div>
              <div className="flex justify-end w-full p-1.5 border border-blue-zodiac bg-gray-50 rounded-lg mb-8">
                <input
                  type="text"
                  className="p-1  w-full focus:outline-none rounded-l-lg rounded-r-none bg-transparent"
                  placeholder="Apply Coupon"
                />
                <button className="razzmatazz-to-transparent rounded-lg px-4 py-1 text-gray-50 ">
                  <span className="ml-1">Apply</span>
                </button>
              </div>
              <div>
                <h6 className="text-lg font-semibold mb-3">Order Summary</h6>
                <div className="flex items-center justify-between">
                  <p>Total Amount</p>
                  <p>₹ 0</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Price Discount</p>
                  <p>₹ 0</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Delivery Charges</p>
                  <p>₹ 0</p>
                </div>
                <hr className="my-3 text-gray-50" />
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Amount to be paid</p>
                  <p>₹ 0</p>
                </div>
                <hr className="my-3 text-gray-50" />
                <button
                  onClick={() => setShowAddressModal(true)}
                  className="razzmatazz-to-transparent px-5 py-2 rounded-lg block mx-auto my-5"
                >
                  Add Delivery Address
                </button>
                {/* <DelivertAddressModel
                  setShowModal={setShowAddressModal}
                  showModal={showAddressModal}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default CartManualPrescriptionView;
