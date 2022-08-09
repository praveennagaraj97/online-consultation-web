import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import ConfirmModal from '../../../components/modal/confirm-modal';
import OneTimePasswordInput from '../../../components/shared/inputs/otp-input';
import ResponseStatusTag from '../../../components/shared/response-status-tag';
import Timer from '../../../components/shared/timer';
import { useAuthContext } from '../../../context/auth-context';
import useMessageStatusSetter from '../../../hooks/useStatusMessageSetter';
import { publicRoutes } from '../../../routes/api-routes';
import { BaseAPiResponse, PhoneType } from '../../../types/response';
import {
  AuthResponse,
  VerificationCode,
} from '../../../types/response/auth.response';
import { requestOptions } from '../../../utils/fetchOptions';
import { apiErrorParser } from '../../../utils/parser';

const VerifyPasscodeView: FC<{ phoneNumber: PhoneType; verifyId: string }> = ({
  phoneNumber,
  verifyId,
}) => {
  const [showConfirmWindow, setShowConfirmWindow] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { query, back, push } = useRouter();
  const { errMessage, successmessage, setter } = useMessageStatusSetter();
  const [expired, setIsExpired] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [verificationId, setVerificationId] = useState<string>(verifyId);
  const [resending, setResending] = useState<boolean>(false);

  const { login } = useAuthContext();

  async function handleVerify() {
    setAttempts(attempts + 1);
    if (verifyCode.trim().length != 6) {
      return setter('Please enter verification code', 'error');
    }

    try {
      setLoading(true);
      await axios.post<BaseAPiResponse<VerificationCode>>(
        publicRoutes.VerifyCode(verificationId),
        { verify_code: verifyCode },
        requestOptions
      );
      handleLogin();
      setIsVerified(true);
    } catch (error) {
      await setter(apiErrorParser(error).message, 'error');
      setLoading(false);
    }
  }

  async function handleLogin() {
    const formData = new FormData();
    formData.append('verification_id', verificationId);
    formData.append('phone_code', phoneNumber.code);
    formData.append('phone_number', phoneNumber.number);

    const rememberMe = query?.['rememberMe'] === 'true' ? true : false;

    try {
      const { data } = await axios.post<AuthResponse>(
        publicRoutes.LoginWithPhoneNumber(rememberMe),
        formData,
        requestOptions
      );

      login(rememberMe, {
        access: data.access_token,
        refresh: data.refresh_token,
      });
      await setter(data.message, 'success');
      push((query?.['redirectTo'] as string) || '/');
    } catch (error) {
      await setter(apiErrorParser(error).message, 'error');
      setLoading(false);
    }
  }

  async function resendVerificationCode() {
    try {
      setResending(true);
      const { data } = await axios.get(
        publicRoutes.ResendVerificationCode(verificationId),
        requestOptions
      );
      setVerificationId(data.result.verification_id);
      await setter(data.message, 'success');
      setResending(false);
      setAttempts(0);
      setVerifyCode('');
      setIsExpired(false);
      setShowConfirmWindow(false);
    } catch (error) {
      setResending(false);
      setter(apiErrorParser(error).message, 'error');
    }
  }

  useEffect(() => {
    if (verifyCode.trim().length === 6) {
      handleVerify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyCode]);

  return (
    <AuthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-blue-zodiac py-16 px-24 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
          <div>
            <Image
              src={'/assets/illustrate/enterOTP_mobile.svg'}
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

        <div className="sm:p-8 px-2 py-24 my-auto">
          <div className="text-center mb-8">
            <h1 className=" text-blue-zodiac text-2xl">
              Enter Verification Code
            </h1>
            <p className="text-blue-zodiac/70 mt-2">
              Verification code has been sent to{' '}
              <strong>
                {phoneNumber.code} {phoneNumber.number}
              </strong>
            </p>
          </div>
          <div className="max-w-xs mx-auto mb-4">
            <OneTimePasswordInput
              onChange={async (value) => {
                setVerifyCode(value);
              }}
              value={verifyCode}
              gap={10}
              length={6}
              disabled={loading || attempts === 4 || isVerified || expired}
            />
            <div className="flex justify-end">
              <button
                className="text-xs mt-1 hover:text-blue-zodiac text-razzmatazz smooth-animate"
                type="button"
                onClick={(ev) => {
                  ev.stopPropagation();
                  if (expired) {
                    setShowConfirmWindow(true);
                  } else {
                    back();
                  }
                }}
                disabled={loading || resending}
              >
                {resending
                  ? 'Please wait'
                  : expired
                  ? 'Resend verification code'
                  : 'Change number'}
              </button>
            </div>
            {!isVerified && !expired && attempts !== 4 ? (
              <div className="text-xs mt-3">
                {attempts !== null ? (
                  <strong>{attempts}/4 attempts - </strong>
                ) : (
                  ''
                )}
                <span>
                  <Timer
                    sec={60}
                    onTimerComplete={() => {
                      setIsExpired(true);
                    }}
                  />{' '}
                  seconds remaining
                </span>
              </div>
            ) : (
              ''
            )}
          </div>

          {/* Resend OTP */}

          {!showConfirmWindow && (
            <ResponseStatusTag
              errMessage={errMessage}
              successmessage={successmessage}
            />
          )}
          <button
            type="button"
            onClick={handleVerify}
            disabled={
              loading || verifyCode.trim().length != 6 || attempts === 4
            }
            className="md:w-1/2 w-11/12 rounded-lg py-2 mx-auto 
            razzmatazz-to-transparent mt-3 text-gray-50 flex items-center justify-center"
          >
            {loading ? <ImSpinner2 className="animate-spin mr-2" /> : ''}
            {loading ? 'Please wait' : 'Verify and login'}
          </button>
        </div>
      </div>
      <ConfirmModal
        isAsync
        confirmBtn="Resend"
        cancelBtn="Change number"
        content={{
          heading: 'Resend verification code',
          description: `A text message with verification code \n will be sent to your mobile number`,
        }}
        showModal={showConfirmWindow}
        setShowModal={(value) => {
          setShowConfirmWindow(value);
        }}
        onCancel={() => {
          back();
        }}
        onConfirm={resendVerificationCode}
        responseMsgChildren={
          <ResponseStatusTag
            successmessage={successmessage}
            errMessage={errMessage}
          />
        }
      />
    </AuthWrapper>
  );
};

export default VerifyPasscodeView;
