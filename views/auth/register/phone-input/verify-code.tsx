import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import ErrorStatusTag from '../../../../components/container/error-status-tag';
import OneTimePasswordInput from '../../../../components/shared/inputs/otp-input';
import useMessageStatusSetter from '../../../../hooks/useStatusMessageSetter';
import { publicRoutes } from '../../../../routes/api-routes';
import { BaseAPiResponse } from '../../../../types/response';
import { requestOptions } from '../../../../utils/fetchOptions';
import { apiErrorParser } from '../../../../utils/parser';

const VerifyCode: FC<{ onClear: () => void; verificationCode: string }> = ({
  onClear,
  verificationCode,
}) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);

  const { setter, errMessage, infoMessage, successmessage } =
    useMessageStatusSetter();
  const [timer, setTime] = useState(60);

  useEffect(() => {
    let time = 60;
    let tId = setInterval(() => {
      time -= 1;

      setTime(time);
      if (time === 0) {
        clearInterval(tId);
      }
    }, 1000);
  }, []);

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

      await setter(data.message, 'error');
      setIsVerifying(false);
    } catch (error) {
      const errRes = apiErrorParser(error);

      await setter(errRes.message, 'error');

      setIsVerifying(false);
    }
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
        disabled={isVerifying || timer == 0 || attempts === 4}
      />
      <p
        className="text-xs mt-1 text-right hover:text-blue-zodiac text-razzmatazz smooth-animate"
        role="button"
        onClick={onClear}
      >
        {timer == 0 ? 'Resend verification code' : 'Change number'}
      </p>
      <div className="text-xs">
        {attempts !== null ? <strong>{attempts}/4 attempts - </strong> : ''}
        <span> {timer} seconds remaining</span>
      </div>

      <ErrorStatusTag
        errMessage={errMessage}
        infoMessage={infoMessage}
        successmessage={successmessage}
        className="text-sm min-h-[25px]"
      />
    </div>
  );
};

export default VerifyCode;
