import { FC } from 'react';
import { FaRegSadTear } from 'react-icons/fa';

const UnableToConnectWindow: FC = () => {
  return (
    <div className="container  mx-auto my-14 max-w-xl ">
      <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl p-10">
        <FaRegSadTear
          size={64}
          className="text-red-500 block mx-auto animate-wiggle-infinite"
        />
        <h1 className="text-2xl text-center my-5 text-red-500">
          Oops! Unable to connect
        </h1>
        <p className="text-center">
          All our Doctors seem to be busy in other consultations at the moment.
        </p>
        <p className="font-semibold text-red-500 my-5">Do you wish to retry?</p>
        <div className="flex justify-between gap-6">
          <button
            className="px-4 py-2 rounded-md w-full
          bg-gray-200 hover:bg-gray-500 hover:text-gray-50
          transform transition-all duration-300
          shadow-lg shadow-gray-500/40
          
          "
          >
            Cancel
          </button>
          <button className="razzmatazz-to-transparent px-4 py-2 rounded-md w-full">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnableToConnectWindow;
