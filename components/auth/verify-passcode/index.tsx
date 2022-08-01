import type { ConfirmationResult } from '@firebase/auth';
import { signOut } from '@firebase/auth';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { firebaseAuth } from '../../../firebase/config';
import { Routes } from '../../../routes';
import { firebaseError } from '../../../utils/error-parser';
import { transformToNumberPipe } from '../../../utils/helpers';
import { _document } from '../../../utils/web.api';
import AnchorTwist from '../../animations/anchor-tag-twist';
import useMessageStatusSetter from '../../container/useStatusMessageSetter';
import AuthWrapper from '../auth-wrapper';

interface VerificationCodeViewProps {
  length: number;
  otpSentNumber: string | number;
  confirmResult: ConfirmationResult | null;
}

const VerificationCodeView: FC<VerificationCodeViewProps> = ({
  length,
  otpSentNumber,
  confirmResult,
}) => {
  const [enteredOTP, setEnteredOTP] = useState<string[]>([]);
  const [verifying, setVerifying] = useState<boolean>(false);
  const { push } = useRouter();

  const { StatusTag, setter } = useMessageStatusSetter();

  function autoFocus(index: number) {
    if (index === length) {
      return;
    }
    _document()
      ?.getElementById(`input-${index - 1}`)
      ?.blur();
    _document()?.getElementById(`input-${index}`)?.focus();
  }

  async function verifyCode() {
    if (enteredOTP.length !== length) {
      return setter('Provide valid verification code', 'error');
    }

    try {
      setVerifying(true);
      await confirmResult?.confirm(enteredOTP.join(''));
      await setter('Verified successfully', 'success', 1000);

      const token = await firebaseAuth.currentUser?.getIdToken();

      if (token) {
        // save profile data;
        // await saveProfile(userData, token);
      }
      push('/');
    } catch (e: any) {
      await signOut(firebaseAuth);
      setter(firebaseError(e), 'error');
      setVerifying(false);
    }
  }

  return (
    <AuthWrapper>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        className="grid lg:grid-cols-2 grid-cols-1"
      >
        <div className="bg-blue-zodiac py-16 px-24 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
          <div>
            <Image
              src={'/assets/illustrate/enterOTP_mobile.svg'}
              alt=""
              layout="responsive"
              width={430}
              height={360}
              unoptimized={true}
              loading="lazy"
              className=""
            />
          </div>
        </div>
        <div className="sm:p-8 px-2 py-24 my-auto">
          <div className="text-center mb-4">
            <h1 className=" text-blue-zodiac text-2xl  ">
              Enter Verification Code
            </h1>
            <p className="text-blue-zodiac/70">
              Verification code sent to mobile number +91 {otpSentNumber}
            </p>
          </div>
          <div
            className="flex flex-row justify-center text-center px-2 mt-5"
            style={{ direction: 'ltr' }}
          >
            {new Array(6).fill('input').map((_, idx) => {
              return (
                <input
                  key={idx}
                  className="m-2 border h-10 w-10 text-center form-control rounded focus:outline-none"
                  type="tel"
                  value={enteredOTP[idx] || ''}
                  disabled={verifying}
                  id={'input-' + idx}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setEnteredOTP((current) => current.slice(0, idx));
                    } else {
                      const value = `${transformToNumberPipe(e.target.value)}`;

                      if (value !== 'NaN') {
                        autoFocus(idx + 1);
                        setEnteredOTP((current) => [...current, value]);
                      }
                    }
                  }}
                  autoFocus={idx === 0}
                  maxLength={1}
                  onKeyUp={(ev) => {
                    if (ev.key === 'Backspace') {
                      autoFocus(idx - 1);
                    }
                  }}
                />
              );
            })}
          </div>
          <AnchorTwist
            href={Routes.Home}
            className="mt-5 underline text-blue-zodiac/80 text-center"
          >
            resend verification code
          </AnchorTwist>

          <StatusTag className="text-center h-5" />
          <button
            type="submit"
            onClick={verifyCode}
            disabled={verifying}
            className="md:w-1/2 w-11/12 rounded-lg py-2 mx-auto bg-razzmatazz mt-5 text-gray-50 flex items-center justify-center"
          >
            {verifying ? <ImSpinner9 className="animate-spin mr-2" /> : ''}
            {verifying ? 'Please wait' : 'Verify and Login'}
          </button>
        </div>
      </motion.div>
    </AuthWrapper>
  );
};

export default VerificationCodeView;
