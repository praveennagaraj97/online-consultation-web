import axios from 'axios';
import { FC, Fragment, useState } from 'react';
import ConfirmModal from '../../../../components/modal/confirm-modal';
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
  const [showConfirmWindow, setShowConfirmWindow] = useState<boolean>(false);
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [expired, setIsExpired] = useState<boolean>(false);
  const [resending, setResending] = useState<boolean>(false);

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
        requestOptions()
      );

      await setter(data.message, 'success');
      onVerify(true);
      setIsVerifying(false);
    } catch (error) {
      const errRes = apiErrorParser(error);

      await setter(errRes?.message || '', 'error');
      onVerify(false);
      setIsVerifying(false);
    }
  }

  async function resendVerificationCode() {
    try {
      setResending(true);
      const { data } = await axios.get(
        publicRoutes.ResendVerificationCode(verificationCode),
        requestOptions()
      );
      onVerificationIdChange(data.result.verification_id);
      await setter(data.message, 'success');
      setResending(false);
      setAttempts(0);
      setOtp('');
      setIsExpired(false);
      setShowConfirmWindow(false);
    } catch (error) {
      setResending(false);
      setter(apiErrorParser(error).message, 'error');
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
        disabled={isVerifying || attempts === 4 || isVerified || expired}
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
              onClear();
            }
          }}
          disabled={resending || isVerifying}
        >
          {resending
            ? 'Please wait'
            : expired
            ? 'Resend verification code'
            : 'Change number'}
        </button>
      </div>
      {!isVerified && !expired && attempts !== 4 ? (
        <Fragment>
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
          <ResponseStatusTag
            errMessage={errMessage}
            successmessage={successmessage}
            className="text-sm min-h-[25px]"
          />
        </Fragment>
      ) : (
        ''
      )}

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
          onClear();
        }}
        onConfirm={resendVerificationCode}
        responseMsgChildren={
          <ResponseStatusTag
            successmessage={successmessage}
            errMessage={errMessage}
          />
        }
      />
    </div>
  );
};

export default VerifyCode;
