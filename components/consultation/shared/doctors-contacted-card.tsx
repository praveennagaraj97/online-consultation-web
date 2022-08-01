import { FC, Fragment } from 'react';
import { BsChevronRight } from 'react-icons/bs';

interface DoctorsContactedCardProps {
  name: string;
  role: string;
}

const DoctorsContactedCard: FC<DoctorsContactedCardProps> = ({
  name,
  role,
}) => {
  return (
    <Fragment>
      <div
        className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-md
      transform transition-colors duration-500 cursor-pointer
      "
      >
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <span className="text-sm">General Medicine</span>
        </div>
        <div className="flex flex-col items-end">
          <BsChevronRight className="text-razzmatazz" />
          <span className="text-sm">
            July 20<small>th</small>
          </span>
        </div>
      </div>
      <hr className="my-1 opacity-30" />
    </Fragment>
  );
};

export default DoctorsContactedCard;
