import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import CommonInput from '../../../components/shared/inputs/common-input';
import { registerUserFormErrors } from '../../../errors';
import { publicRoutes } from '../../../routes/api-routes';
import { BaseAPiResponse } from '../../../types/response';
import type { CheckPhoneOrEmailExists } from '../../../types/response/auth.response';
import { requestOptions } from '../../../utils/fetchOptions';
import { validateEmail } from '../../../utils/validator';

const RegisterEmailInput: FC<{
  email: string;
  onChange: (value: string) => void;
  showValidation: boolean;
}> = ({ email, onChange, showValidation }) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(() => {
    if (validateEmail(email)) {
      (async () => {
        try {
          const { data } = await axios.post<
            BaseAPiResponse<CheckPhoneOrEmailExists>
          >(publicRoutes.CheckIfEmailTaken, { email }, requestOptions);
          setIsAvailable(data.result.is_available);
        } catch (error) {}
      })();
    }
  }, [email]);

  return (
    <div>
      <CommonInput
        className="w-full rounded-lg px-3 py-2 h-12"
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={(ev) => {
          onChange(ev.target.value);
        }}
        showvalidation={showValidation}
        validation={{
          type: 'error',
          message: email
            ? validateEmail(email)
              ? isAvailable
                ? ''
                : 'Email is in use by another account'
              : registerUserFormErrors.email.invalid
            : registerUserFormErrors.email.required,
        }}
      />
    </div>
  );
};

export default RegisterEmailInput;
