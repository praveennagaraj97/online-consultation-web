import { FC } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

const BackButton: FC = () => {
  return (
    <div
      className=" flex items-center gap-2 hover:-translate-y-0.5
    transform transition-all duration-300
    hover:text-pink-500
    "
    >
      <div className="p-2 rounded-full bg-gray-200 w-fit ">
        <BsChevronLeft />
      </div>
      <span>Back</span>
    </div>
  );
};

export default BackButton;
