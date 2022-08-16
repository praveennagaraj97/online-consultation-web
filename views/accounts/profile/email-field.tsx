import { FC } from 'react';
import ProfileInput from '../../../components/accounts/inputs/profile-input';

const ProfileEmailInput: FC<{ email: string; isVerified: boolean }> = ({
  email,
  isVerified,
}) => {
  return (
    <div className="relative">
      <ProfileInput
        title="Email Address"
        name="email"
        disabled
        value={email}
        onChange={() => {}}
      />
      {!isVerified ? (
        <div className="absolute right-2 top-0 h-16 flex items-center">
          <button
            type="button"
            className="px-4 rounded-lg py-1  razzmatazz-to-transparent"
            onClick={() => {}}
          >
            {isVerified ? 'Edit' : 'Verify'}
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProfileEmailInput;
