import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FC, FormEvent, useReducer, useState } from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { ImSpinner2 } from 'react-icons/im';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import DatePicker from '../../../components/date-picker';
import CommonInput from '../../../components/shared/inputs/common-input';
import ResponseStatusTag from '../../../components/shared/response-status-tag';
import { registerUserFormErrors } from '../../../errors';
import useMessageStatusSetter from '../../../hooks/useStatusMessageSetter';
import { publicRoutes } from '../../../routes/api-routes';

import { requestOptions } from '../../../utils/fetchOptions';
import { apiErrorParser } from '../../../utils/parser';
import RegisterEmailInput from './email-input';

import {
  initialRegisterFormData,
  RegisterActions,
  registerFormReducer,
} from './register.reducer';

const RegisterFormPhoneInput = dynamic(() => import('./phone-input'), {
  ssr: false,
});

const RegisterView: FC = () => {
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const { setter, successmessage, errMessage } = useMessageStatusSetter();

  const [state, dispatch] = useReducer(
    registerFormReducer,
    initialRegisterFormData
  );

  async function handleRegister(ev: FormEvent) {
    ev.preventDefault();
    try {
      setShowError(true);

      const formKeys = Object.keys(state);
      if (
        !isPhoneVerified ||
        // @ts-ignore
        formKeys.some((key: string) => state?.[key] == '')
      ) {
        return;
      }

      const formData = new FormData();
      formData.append('name', state.name);
      formData.append('email', state.email);
      formData.append('phone_code', state.phone_code);
      formData.append('phone_number', state.phone_number);
      formData.append('date_of_birth', '');
      formData.append('verification_id', state.verification_id);
      formData.append('gender', state.gender);

      const { data } = await axios.post(
        publicRoutes.Register,
        formData,
        requestOptions
      );
    } catch (error) {
      await setter(apiErrorParser(error).message, 'error');
    }
  }

  return (
    <AuthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-blue-zodiac py-16 xl:px-24 lg:px-20 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
          <div>
            <Image
              src={'/assets/illustrate/register_bg.svg'}
              alt=""
              layout="responsive"
              width={730}
              height={660}
              unoptimized={true}
              loading="lazy"
              priority={false}
            />
          </div>
        </div>
        <div className="sm:p-8 px-2">
          <div className="text-center mb-9">
            <h1 className=" text-blue-zodiac text-2xl  ">Register</h1>
            <p className="text-blue-zodiac/70">Create an account to continue</p>
          </div>
          <form onSubmit={handleRegister} autoComplete="on">
            <div className="grid gap-y-0.5 xl:px-20 lg:8">
              <CommonInput
                className="w-full rounded-lg px-3 py-2 h-12"
                placeholder="Name"
                type="text"
                name="name"
                value={state.name}
                onChange={(ev) => {
                  dispatch({
                    payload: ev.target.value,
                    type: RegisterActions.NAME,
                  });
                }}
                showvalidation={showError}
                validation={{
                  type: 'error',
                  message: state.name ? '' : registerUserFormErrors.name,
                }}
              />
              <RegisterEmailInput
                email={state.email}
                onChange={(email) => {
                  dispatch({
                    payload: email,
                    type: RegisterActions.EMAIL,
                  });
                }}
                showValidation={showError}
              />

              <RegisterFormPhoneInput
                phoneNumber={state.phone_number}
                phoneCode={state.phone_code}
                verificationId={state.verification_id}
                isVerified={isPhoneVerified}
                showValidation={showError}
                onChange={(value) => {
                  dispatch({
                    type: RegisterActions.PHONE_NUMBER,
                    payload: value,
                  });
                }}
                onVerificationIdChange={(value) => {
                  dispatch({
                    type: RegisterActions.VERIFICATION_ID,
                    payload: value,
                  });
                }}
                onVerify={(status) => {
                  setIsPhoneVerified(status);
                }}
              />

              <DatePicker
                onChange={(date) => {
                  dispatch({
                    type: RegisterActions.DATE_OF_BIRTH,
                    payload: date,
                  });
                }}
                className="input-focus w-full rounded-lg px-3 py-2 h-12"
                placeholder="Date of birth"
                maxDate={new Date()}
                date={state.date_of_birth || undefined}
                btnClass="absolute right-0 top-0 flex item-center h-12"
                showvalidation={showError}
                validation={{
                  type: 'error',
                  message: state.date_of_birth
                    ? ''
                    : registerUserFormErrors.dateOfBirth,
                }}
              />
              <select
                name="gender"
                className="input-focus w-full common-input px-3 py-2 h-12"
                value={state.gender}
                onChange={(ev) => {
                  dispatch({
                    payload: ev.target.value,
                    type: RegisterActions.GENDER,
                  });
                }}
              >
                <option value="">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="na">Prefer not to say</option>
              </select>
            </div>

            <span className="block text-center text-blue-zodiac/70 mt-3 text-sm">
              By clicking on below button, you agree to our{' '}
              <a
                href="/help/terms-and-condition/"
                target="_blank"
                className="text-razzmatazz/70 ml-2 cursor-pointer hover:text-blue-zodiac text-sm smooth-animate"
              >
                Terms & Conditions
              </a>
            </span>

            <ResponseStatusTag
              className="text-center [min-height:20px] my-2 text-sm"
              errMessage={errMessage}
              successmessage={successmessage}
            />

            <button
              type="submit"
              className="md:w-1/2 w-11/12 min-w-fit px-2 rounded-lg py-2 mx-auto 
              razzmatazz-to-transparent  whitespace-nowrap flex items-center gap-2 justify-center"
              disabled={false}
            >
              {false ? (
                <ImSpinner2 className="animate-spin" />
              ) : (
                <AiOutlineLogin />
              )}
              <span>{false ? 'Please wait' : 'Create account'}</span>
            </button>
          </form>
          <div className="px-6  sm:mb-2 mb-6">
            <hr className="opacity-25" />
            <p className="flex justify-center text-razzmatazz/70 pt-6">
              Already have an account?
            </p>
            <Link href={{ pathname: '/auth/login/phone' }}>
              <a
                role="button"
                className="md:w-1/2 w-11/12 rounded-lg py-2 mx-auto block border border-razzmatazz mt-5
             hover:bg-razzmatazz hover:shadow-xl hover:shadow-razzmatazz/40 hover:text-gray-50
              transform transition-all duration-300 hover:scale-105 text-center"
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default RegisterView;
