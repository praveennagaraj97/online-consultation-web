import { FC } from 'react';
import { BiLocationPlus, BiSearchAlt } from 'react-icons/bi';
import { RiArrowDownSFill } from 'react-icons/ri';

const Searchbar: FC = () => {
  return (
    <div className="flex justify-end w-full">
      <button className=" p-1.5 lg:px-3 px-1 border-r sm:flex hidden items-center bg-white rounded-l-lg">
        <BiLocationPlus size={12} />
        <small className="lg:whitespace-nowrap mx-1 cut-text-1">
          5060064, Yelahanka
        </small>
        <RiArrowDownSFill />
      </button>
      <input
        type="text"
        className="p-1.5  w-full focus:outline-none sm:rounded-none rounded-l-lg rounded-r-none text-xs"
        placeholder="Search for Medicines / Healthcare Items"
      />
      <button className="bg-gray-300 rounded-r-lg lg:px-4 px-2 text-razzmatazz flex items-center hover:text-blue-zodiac/70 ">
        <BiSearchAlt size={14} />
        <small className="ml-1 lg:block hidden ">Search</small>
      </button>
    </div>
  );
};

export default Searchbar;
