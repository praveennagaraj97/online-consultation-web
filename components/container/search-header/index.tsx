import { FC } from 'react';
import { BiLocationPlus, BiSearchAlt } from 'react-icons/bi';
import { RiArrowDownSFill } from 'react-icons/ri';

const SearchHeader: FC = () => {
  return (
    <div className=" py-2 bg-gray-50 drop-shadow-lg border-t rounded-b-xl">
      <div className="xl:container mx-auto px-2">
        <div className="flex justify-end w-full p-1 border rounded-lg">
          <input
            type="text"
            className="p-1  w-full focus:outline-none rounded-l-lg rounded-r-none bg-transparent"
            placeholder="Search for Medicines / Healthcare Items"
          />
          <button className="lg:p-2 p-1 lg:px-3 px-1  sm:flex hidden items-center bg-transparent rounded-l-lg whitespace-nowrap">
            <BiLocationPlus className="w-6" />
            <span className="lg:whitespace-nowrap mx-1 ">
              5060064, Yelahanka
            </span>
            <RiArrowDownSFill />
          </button>
          <button className="zodiac-to-transparent rounded-lg sm:px-6 px-2 flex items-center">
            <BiSearchAlt />
            <span className="ml-1">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
