import { FC } from 'react';
import ProfileInput from '../../../components/accounts/inputs/profile-input';
import { PhoneType } from '../../../types/response';
import { validateIndianPhoneNumber } from '../../../utils/validator';

const ProfilePhoneField: FC<{
  phone: PhoneType;
  showValidation: boolean;
}> = ({ phone, showValidation }) => {
  return (
    <ProfileInput
      title="Mobile Number"
      name="phone_number"
      type="tel"
      disabled
      maxLength={14}
      value={phone.code + ' ' + phone.number}
      onChange={(ev) => {
        const value = ev.target.value.split(' ')?.[1];
      }}
      validation={{
        type: 'error',
        message: phone.number.trim()
          ? !validateIndianPhoneNumber(phone.number)
            ? 'Entered phone number is not valid'
            : ''
          : 'Phone number cannot be empty',
      }}
    />
  );
};

export default ProfilePhoneField;
