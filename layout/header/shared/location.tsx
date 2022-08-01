import { FC, Fragment, useState } from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { RiArrowDownSFill } from 'react-icons/ri';

const Location: FC<{
  userIP: { loading: boolean; data: any | null };
}> = ({ userIP: { data, loading } }) => {
  const [showLocationModal, setShowLocationModal] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        className=" p-1.5 lg:px-3 px-1 border-r sm:flex hidden items-center bg-white rounded-l-lg w-44"
        onClick={() => setShowLocationModal(true)}
      >
        <BiLocationPlus size={20} className="min-w-[20px] w-5 h-5" />
        <small className="lg:whitespace-nowrap mx-1 cut-text-1 block  text-left">
          {loading
            ? 'Please wait'
            : data
            ? `${data?.postal}, ${data?.city}`
            : 'Not available'}
        </small>
        <RiArrowDownSFill />
      </button>
    </Fragment>
  );
};

export default Location;
