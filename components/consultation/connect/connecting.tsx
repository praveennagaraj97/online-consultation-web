import { FC } from 'react';
import { ImSpinner } from 'react-icons/im';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const ConnectingWindow: FC = () => {
  return (
    <div className="container  mx-auto my-14 max-w-xl ">
      <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl p-10">
        <IoMdCheckmarkCircleOutline
          size={64}
          className="text-green-500 block mx-auto animate-wiggle-infinite"
        />
        <h1 className="text-2xl text-center my-5">
          Thank for making the payment!
        </h1>
        <p className="text-center">
          Please hold on while we are connecting you to our next Doctor
          available for the instant consultation!
        </p>

        <ImSpinner
          className="animate-spin text-razzmatazz block mx-auto my-8"
          size={59}
        />
        <p className="text-center">Connecting you...</p>
      </div>
    </div>
  );
};

export default ConnectingWindow;
