import { FC } from 'react';
import AccountViewLayout from '../../../components/accounts/layout';
import ProfileInput from '../../../components/accounts/profile-input';

const ProfileView: FC = () => {
  return (
    <AccountViewLayout option="profile">
      <div className="mb-4">
        <ProfileInput
          title="Full Name"
          inputOptions={{
            value: 'Praveen Nagaraj',
            onChange: () => {},
            name: 'full_name',
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileInput
          title="Gender"
          inputOptions={{
            value: 'Male',
            onChange: () => {},
            name: 'gender',
          }}
        />
        <ProfileInput
          title="Date of Birth"
          inputOptions={{
            value: '05/01/1997',
            onChange: () => {},
            name: 'dob',
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileInput
          title="Mobile Number"
          inputOptions={{
            value: '9900782775',
            onChange: () => {},
            name: '',
          }}
        />
        <ProfileInput
          title="Email Address"
          inputOptions={{
            value: 'praveen@mailsac.com',
            onChange: () => {},
            name: '',
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <ProfileInput
          title="City"
          inputOptions={{
            value: 'Bangalore, India',
            onChange: () => {},
            name: '',
          }}
        />
      </div>

      <button
        type="submit"
        className="px-8 rounded-lg py-2 mx-auto block razzmatazz-to-transparent mt-12 mb-2"
      >
        Edit Profile
      </button>
    </AccountViewLayout>
  );
};

export default ProfileView;
