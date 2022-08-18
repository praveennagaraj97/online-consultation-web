import { FC } from 'react';
import AccountViewLayout from '../../../components/accounts/layout';
import LinkedProfileCard from '../../../components/accounts/linked-profiles/card';
import AddNewRelative from './add-new-relative';

const LinkedProfilesView: FC = () => {
  return (
    <AccountViewLayout option="linkedProfiles">
      <AddNewRelative />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 p-4">
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
