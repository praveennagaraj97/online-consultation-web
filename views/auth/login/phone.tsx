import type { ApplicationVerifier, ConfirmationResult } from '@firebase/auth';
import { signInWithPhoneNumber } from '@firebase/auth';
import Image from 'next/image';
import { FC, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import AnchorTwist from '../../../components/animations/anchor-tag-twist';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import IsNewUser from '../../../components/auth/is-new-user';
import TermsAndConditions from '../../../components/auth/terms-and-condition';
import VerificationCodeView from '../../../components/auth/verify-passcode';
import useMessageStatusSetter from '../../../components/container/useStatusMessageSetter';
import { withRecaptcha } from '../../../components/provider/firebase-recaptcha.provider';
import PhoneInput from '../../../components/shared/phone-input';
import { firebaseAuth } from '../../../firebase/config';
import { Routes } from '../../../routes';
import { firebaseError } from '../../../utils/error-parser';
import { transformToNumberPipe } from '../../../utils/helpers';

interface PhoneRequestContainerProps {
  recaptchaVerifier?: ApplicationVerifier | null;
}

const LoginWithPhoneView: FC<PhoneRequestContainerProps> = ({
  recaptchaVerifier,
}) => {
  const [enteredNumber, settEnteredNumber] = useState<number | string>('');
  const { StatusTag, setter } = useMessageStatusSetter();
  const [isSending, setIsSending] = useState<boolean>(false);
  const [confirmResult, setConfirmResult] = useState<ConfirmationResult | null>(
    null
  );
  const [showOTPView, setShowOTPView] = useState<boolean>(false);

  async function sendOTP() {
    try {
      if (!validator()) {
        return;
      }

      if (!recaptchaVerifier) {
        return setter('Something went wrong', 'error', 1000);
      }
      setIsSending(true);

      // const { isNewUser } = await checkUserExists({
      //   phone_number: '+91'+enteredNumber,
      // });

      // if (isNewUser) {
      //   setIsSending(false);
      //   return setter(
      //     `We couldn't find any account associated with this number, Please create a new account`,
      //     'error',
      //     4000
      //   );
      // }

      await recaptchaVerifier.verify();

      const confirmationResult = await signInWithPhoneNumber(
        firebaseAuth,
        `+91 ${enteredNumber}`,
        recaptchaVerifier
      );

      await setter(
        `A text message with verification code was sent to your number`,
        'success',
        1000
      );
      setShowOTPView(true);
      setIsSending(false);
      setConfirmResult(confirmationResult);
    } catch (error: any) {
      setter(firebaseError(error), 'error');
      setIsSending(false);
    }
  }

  function validator() {
    if (!enteredNumber.toString().length) {
      setter('Provide phone number', 'error');
      return false;
    }

    return true;
  }

  if (showOTPView) {
    return (
      <VerificationCodeView
        confirmResult={confirmResult}
        length={6}
        otpSentNumber={enteredNumber}
      />
    );
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
          className="py-4 px-2 xl:px-20 lg:px-10 md:px-14 my-auto  mx-auto w-full"
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
              onChange={(e) => {
                const number = transformToNumberPipe(e.target.value);
                settEnteredNumber(number);
              }}
              placeholder="Enter mobile number"
              className="common-input px-3 py-2 h-12 drop-shadow-sm"
            />
            <AnchorTwist
              href={Routes.LoginWithEmail}
              className="ml-1 underline text-blue-zodiac/80 mt-1"
            >
              <small>Login with email address</small>
            </AnchorTwist>
          </div>

          <StatusTag className="h-5 text-center" />
          <div className="my-1">
            <TermsAndConditions />
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

export default withRecaptcha(LoginWithPhoneView, {
  size: 'invisible',
  theme: 'dark',
});
