import Image from 'next/image';
import { FC } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { FaFilePrescription } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartCard: FC = () => {
  const item = {
    image: '/temp/cart_prod.jpeg',
    name: 'Dolo 650mg Tablet',
  };

  return (
    <div className="p-4 grid sm:grid-cols-3 grid-cols-1">
      <div className="flex items-center gap-4 col-span-2">
        <div className="w-32 h-32 relative rounded-lg overflow-hidden">
          <Image layout="fill" alt="..." src={item.image} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">Dolo 650mg Tablet</h3>
            <FaFilePrescription className="text-razzmatazz" />
          </div>
          <small>Paracetamol / Acetaminophen</small>
          <div
            className="flex gap-5 items-center text-razzmatazz mt-2
          border border-blue-zodiac w-fit p-0.5 px-2 rounded-lg"
          >
            <BiMinus />
            <span>1</span>
            <BiPlus />
          </div>
        </div>
      </div>

      <div
        className="sm:mt-0 mt-2 h-full flex sm:flex-col flex-row-reverse
      sm:justify-center sm:items-end
      justify-between items-center 
      gap-6 col-span-1"
      >
        <RiDeleteBin6Line size={24} />
        <div className="flex gap-7">
          <span className="line-through decoration-red-400">MRP ₹ 22</span>
          <span> ₹ 22</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
