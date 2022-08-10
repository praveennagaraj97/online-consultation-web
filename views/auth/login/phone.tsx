import Image from 'next/image';
import { FC, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import AnchorTwist from '../../../components/animations/anchor-tag-twist';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import IsNewUser from '../../../components/auth/is-new-user';
import useMessageStatusSetter from '../../../hooks/useStatusMessageSetter';

import PhoneInput from '../../../components/shared/inputs/phone-input';

import axios from 'axios';
import { useRouter } from 'next/router';
import ToggleInput from '../../../components/shared/inputs/toggle-input';
import ResponseStatusTag from '../../../components/shared/response-status-tag';
import { publicRoutes } from '../../../routes/api-routes';
import { BaseAPiResponse } from '../../../types/response';
import {
  CheckPhoneOrEmailExists,
  VerificationCode,
} from '../../../types/response/auth.response';
import { requestOptions } from '../../../utils/fetchOptions';
import { apiErrorParser } from '../../../utils/parser';
import {
  validateIndianPhoneNumber,
  validateIsValueIsNumeric,
} from '../../../utils/validator';

interface PhoneRequestContainerProps {}

const LoginWithPhoneView: FC<PhoneRequestContainerProps> = ({}) => {
  const [enteredNumber, settEnteredNumber] = useState<string>('');
  const { setter, errMessage, successmessage } = useMessageStatusSetter();
  const [isSending, setIsSending] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const { push } = useRouter();

  async function sendOTP() {
    if (!enteredNumber) {
      return setter('Phone number cannot be empty', 'error');
    }

    if (!validateIndianPhoneNumber(enteredNumber)) {
      return setter('Entered phone number is not valid', 'error');
    }

    setIsSending(true);

    const fd = await checkIfUseExistWithPhoneNumber();

    if (!fd) {
      setIsSending(false);
      return;
    }

    try {
      const { data } = await axios.post<BaseAPiResponse<VerificationCode>>(
        publicRoutes.SendVerificationCode,
        fd,
        requestOptions()
      );
      await setter(data.message, 'success');
      push({
        pathname: `/auth/login/phone/verify-code/${data.result.verification_id}/`,
        query: {
          rememberMe,
        },
      });
    } catch (error) {
      await setter(apiErrorParser(error)?.message, 'error');
      setIsSending(false);
    }
  }

  async function checkIfUseExistWithPhoneNumber(): Promise<FormData | null> {
    const formData = new FormData();
    formData.append('code', '+91');
    formData.append('number', enteredNumber);

    try {
      const { data } = await axios.post<
        BaseAPiResponse<CheckPhoneOrEmailExists>
      >(publicRoutes.CheckIfPhoneNumberTaken, formData, requestOptions());

      if (data.result.is_available) {
        await setter("Couldn't find any account with given number", 'error');
        return null;
      }

      return formData;
    } catch (error) {
      return null;
    }
  }

  return (
    <AuthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-blue-zodiac py-16 xl:px-24 lg:px-20 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
          <div>
            <Image
              src={'/assets/illustrate/login_bg.svg'}
              alt=""
              layout="responsive"
              width={430}
              height={360}
              unoptimized={true}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/assets/blur-data/login_bg.png"
            />
          </div>
        </div>

        <form
          className="py-4 px-2 xl:px-20 lg:px-10 md:px-14 my-auto  mx-auto w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            sendOTP();
          }}
        >
          <div className="text-center mb-9">
            <h1 className=" text-blue-zodiac text-2xl  ">Login</h1>
            <p>Enter mobile number to continue</p>
          </div>

          <div className="lg:px-6">
            <PhoneInput
              type="tel"
              value={enteredNumber}
              disabled={isSending}
              maxLength={10}
              onChange={(ev) => {
                if (!ev.target.value) {
                  settEnteredNumber('');
                } else if (validateIsValueIsNumeric(ev.target.value)) {
                  settEnteredNumber(ev.target.value);
                }
              }}
              placeholder="Enter mobile number"
              className="px-3 py-2 h-12 pl-14 w-full rounded-lg"
            />
            <AnchorTwist
              href="/auth/login/email"
              className="ml-1 underline text-blue-zodiac/80 mt-1"
            >
              <small>Login with email address</small>
            </AnchorTwist>
            <div className="mt-6 mb-2">
              <span className="block text-center text-blue-zodiac/70 mt-3 text-sm">
                By clicking on continue, you agree to our
                <a
                  href="/help/terms-and-condition/"
                  target="_blank"
                  className="text-razzmatazz/70 ml-2 cursor-pointer hover:text-blue-zodiac text-sm smooth-animate"
                >
                  Terms & Conditions
                </a>
              </span>
            </div>

            <ResponseStatusTag
              errMessage={errMessage}
              successmessage={successmessage}
            />

            <div className="flex items-center space-x-2 text-sm mt-1 mb-4">
              <ToggleInput
                state={rememberMe}
                onclick={() => {
                  setRememberMe(!rememberMe);
                }}
              />
              <span>Keep me logged in</span>
            </div>
          </div>

          <button
            type="submit"
            className="md:w-1/2 w-11/12 rounded-lg py-2 mt-2
            mx-auto  razzmatazz-to-transparent flex items-center justify-center gap-3
            "
            disabled={isSending}
          >
            {isSending ? <ImSpinner9 className="animate-spin" /> : ''}
            {isSending ? 'Please wait' : 'Continue'}
          </button>
          <IsNewUser />
        </form>
      </div>
    </AuthWrapper>
  );
};

export default LoginWithPhoneView;
