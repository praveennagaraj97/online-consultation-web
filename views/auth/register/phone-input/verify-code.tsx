import axios from 'axios';
import { FC, useState } from 'react';
import OneTimePasswordInput from '../../../../components/shared/inputs/otp-input';
import ResponseStatusTag from '../../../../components/shared/response-status-tag';
import Timer from '../../../../components/shared/timer';
import useMessageStatusSetter from '../../../../hooks/useStatusMessageSetter';
import { publicRoutes } from '../../../../routes/api-routes';
import { BaseAPiResponse } from '../../../../types/response';
import { requestOptions } from '../../../../utils/fetchOptions';
import { apiErrorParser } from '../../../../utils/parser';

interface VerifyCodeProps {
  onClear: () => void;
  verificationCode: string;
  onVerify: (status: boolean) => void;
  isVerified: boolean;
  onVerificationIdChange: (value: string) => void;
}

const VerifyCode: FC<VerifyCodeProps> = ({
  onClear,
  verificationCode,
  onVerify,
  isVerified,
  onVerificationIdChange,
}) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [expired, setIsExpired] = useState<boolean>(false);

  const { setter, errMessage, successmessage } = useMessageStatusSetter();

  async function verifyCode(otp: string) {
    setAttempts(attempts + 1);
    try {
      setIsVerifying(true);
      const { data } = await axios.post<BaseAPiResponse>(
        publicRoutes.VerifyCode(verificationCode),
        {
          verify_code: otp,
        },
        requestOptions
      );

      await setter(data.message, 'success');
      onVerify(true);
      setIsVerifying(false);
    } catch (error) {
      const errRes = apiErrorParser(error);

      await setter(errRes.message, 'error');
      onVerify(false);
      setIsVerifying(false);
    }
  }

  async function resendVerificationCode() {
    try {
      console.log('resend code');
    } catch (error) {}
  }

  return (
    <div>
      <OneTimePasswordInput
        onChange={(value) => {
          setOtp(value);
          if (value?.trim()?.length === 6) {
            verifyCode(value);
          }
        }}
        value={otp}
        length={6}
        className="common-input input-focus p-2"
        disabled={isVerifying || attempts === 4 || isVerified || expired}
      />
      <p
        className="text-xs mt-1 text-right hover:text-blue-zodiac text-razzmatazz smooth-animate"
        role="button"
        onClick={expired ? resendVerificationCode : onClear}
      >
        {expired ? 'Resend verification code' : 'Change number'}
      </p>
      {!isVerified && !expired ? (
        <div className="text-xs">
          {attempts !== null ? <strong>{attempts}/4 attempts - </strong> : ''}
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
      <ResponseStatusTag
        errMessage={errMessage}
        successmessage={successmessage}
        className="text-sm min-h-[25px]"
      />
    </div>
  );
};

export default VerifyCode;
