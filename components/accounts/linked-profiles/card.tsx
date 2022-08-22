import { FC, MouseEventHandler } from 'react';
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md';
import { RelativeEntity } from '../../../types/response/user.response';

interface LinkedProfileCardProps extends RelativeEntity {
  onEditClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onDeleteClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const LinkedProfileCard: FC<LinkedProfileCardProps> = ({
  date_of_birth,
  email,
  gender,
  name,
  phone,
  relation,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="border drop-shadow-xl shadow-lg rounded-xl py-3 px-4 smooth-animate hover:scale-105">
      <div className="grid grid-cols-2 mb-1">
        <p>Name</p>
        <p className="text-right font-semibold">{name}</p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Email</p>
        <p className="text-right font-semibold">{email}</p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Phone</p>
        <p className="text-right font-semibold">
          {phone.code + ' ' + phone.number}
        </p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Age</p>
        <p className="text-right font-semibold">
          {findAge(date_of_birth)} years
        </p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Gender</p>
        <p className="text-right font-semibold">{gender}</p>
      </div>
      <div className="grid grid-cols-2 mb-1">
        <p>Relation</p>
        <p className="text-right font-semibold">{relation}</p>
      </div>
      <div className="flex justify-end gap-2 mt-3">
        <button onClick={onEditClick}>
          <MdModeEditOutline className="text-blue-600" />
        </button>
        <button onClick={onDeleteClick}>
          <MdDeleteOutline className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default LinkedProfileCard;

function findAge(date: string) {
  return new Date().getFullYear() - new Date(date).getFullYear();
}
