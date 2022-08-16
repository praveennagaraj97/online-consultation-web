import { FC } from 'react';
import { VscPersonAdd } from 'react-icons/vsc';
import AccountViewLayout from '../../../components/accounts/layout';
import LinkedProfileCard from '../../../components/accounts/linked-profiles/card';

const LinkedProfilesView: FC = () => {
  return (
    <AccountViewLayout option="linkedProfiles">
      <div className="mb-7 w-full flex justify-end">
        <button
          className="flex p-2 items-center gap-4 rounded-lg border border-blue-zodiac
        hover:bg-blue-zodiac hover:text-gray-50 
        transform transition-all duration-300
       shadow-xl shadow-blue-zodiac/25
        "
        >
          <VscPersonAdd />
          <span>Add New</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 p-4">
        <LinkedProfileCard />
        <LinkedProfileCard />
        <LinkedProfileCard />
        <LinkedProfileCard />
        <LinkedProfileCard />
        <LinkedProfileCard />
      </div>
    </AccountViewLayout>
  );
};

export default LinkedProfilesView;
