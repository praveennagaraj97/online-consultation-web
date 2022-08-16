import { FC } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const LinkedProfileCard: FC = () => {
  return (
    <div className="border drop-shadow-xl shadow-lg rounded-xl py-3 px-4 smooth-animate hover:scale-105">
      <div className="grid grid-cols-2 mb-1">
        <p>Name</p>
        <p className="text-right font-semibold">Donal Stevan Paul</p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Age</p>
        <p className="text-right font-semibold">26 years</p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Gender</p>
        <p className="text-right font-semibold">Male</p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Relation</p>
        <p className="text-right font-semibold">Brother</p>
      </div>
      <div className="flex justify-end gap-2 mt-3">
        <FaRegEdit className="text-razzmatazz" />
        <RiDeleteBin6Line className="text-red-700" />
      </div>
    </div>
  );
};

export default LinkedProfileCard;
