import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ProductInfo: FC = () => {
  return (
    <div className="py-2 h-fit">
      <h1 className="font-semibold text-xl">{"Dolo-650 Tablet 15's"}</h1>
      <small className="leading-tight opacity-60 block mb-2">
        {
          'Dolo 650 Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold.'
        }
      </small>
      <p className="mt-2">15 Tablet(s) in Strip</p>
      <p>Composition</p>
      <hr className="my-4 opacity-30" />
      <p className="flex gap-2 font-semibold text-lg">
        <span>Price :</span>
        <span className="text-razzmatazz">₹ 136</span>
      </p>
      <p className="flex gap-2">
        <small className="opacity-60">MRP</small>
        <small className="text-green-500">₹ 499.00 GET 20% OFF </small>
      </p>
      <small className="opacity-60">(Inclusive of all taxes)</small>
      <button
        className="razzmatazz-to-transparent block my-5
        px-4 py-2 rounded-lg
      "
      >
        Add to Cart
      </button>
      <hr className="my-4 opacity-30" />
      <p className="font-semibold ">Check Availability</p>
      <div className="flex border  w-fit rounded-lg mt-2">
        <input
          type="text"
          className="p-2  focus:outline-none sm:rounded-none rounded-lg"
          placeholder="Pincode"
        />
        <button className="razzmatazz-to-transparent rounded-r-lg p-2 text-gray-50 flex items-center px-2">
          <BsArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
