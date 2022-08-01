import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Location = dynamic(() => import('./location'), {
  ssr: false,
});

const Searchbar: FC<{ userIP: any; show?: boolean }> = ({
  userIP,
  show = true,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex justify-end w-full relative">
      {show ? <Location userIP={userIP} /> : ''}

      <input
        type="text"
        className="p-1.5  w-full focus:outline-none sm:rounded-none rounded-l-lg rounded-r-none text-sm"
        placeholder="Search for Medicines / Healthcare Items"
        value={searchTerm}
        onChange={(ev) => {
          setSearchTerm(ev.target.value);
        }}
      />
      <button className="bg-gray-300 rounded-r-lg lg:px-4 px-2 text-razzmatazz flex items-center hover:text-blue-zodiac/70 ">
        <BiSearchAlt size={14} />
        <span className="ml-1 lg:block hidden text-sm">Search</span>
      </button>
    </div>
  );
};

export default Searchbar;
