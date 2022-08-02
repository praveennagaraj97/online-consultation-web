import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, Fragment, useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import ConfirmModal from '../../../components/modal/confirm-modal';
import OneTimePasswordInput from '../../../components/shared/inputs/otp-input';
import PhoneInput from '../../../components/shared/inputs/phone-input';
import { publicRoutes } from '../../../routes/api-routes';
import type { BaseAPiResponse } from '../../../types/response';
import type {
  CheckPhoneOrEmailExists,
  VerificationCode,
} from '../../../types/response/auth.response';
import { requestOptions } from '../../../utils/fetchOptions';
import {
  validateIndianPhoneNumber,
  validateIsValueIsNumeric,
} from '../../../utils/validator';

interface RegisterFormPhoneInputProps {
  phoneNumber: string;
  phoneCode: string;
  onChange: (value: string) => void;
  verificationId: string;
  onVerificationIdChange: (value: string) => void;
}

const RegisterFormPhoneInput: FC<RegisterFormPhoneInputProps> = ({
  phoneNumber,
  phoneCode,
  onChange,
  verificationId,
  onVerificationIdChange,
}) => {
  const [showOTPview, setShowOTPView] = useState(false);
  const [showConfirmWindow, setShowConfirmWindow] = useState<boolean>(false);
  const [otp, setOtp] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [availabilityChecking, setAvailabiltyChecking] =
    useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled && validateIndianPhoneNumber(phoneNumber)) {
      (async () => {
        try {
          setAvailabiltyChecking(true);
          const fd = new FormData();
          fd.append('code', phoneCode);
          fd.append('number', phoneNumber);

          const { data } = await axios.post<
            BaseAPiResponse<CheckPhoneOrEmailExists>
          >(publicRoutes.CheckIfPhoneNumberTaken, fd, requestOptions);
          setAvailabiltyChecking(false);
          setIsAvailable(data.result.is_available);
        } catch (error) {
          setAvailabiltyChecking(false);
          setIsAvailable(false);
        }
      })();
    }

    return () => {
      isCancelled = true;
    };
  }, [phoneCode, phoneNumber]);

  async function handleSendVerificationCode() {
    try {
      const fd = new FormData();
      fd.append('code', phoneCode);
      fd.append('number', phoneNumber);
      const { data } = await axios.post<BaseAPiResponse<VerificationCode>>(
        publicRoutes.SendVerificationCode,
        fd,
        requestOptions
      );

      onVerificationIdChange(data.result.verification_id);
      setShowConfirmWindow(false);
      setTimeout(() => {
        setShowOTPView(true);
      }, 3000);

      return null;
    } catch (error) {
      return null;
    }
  }

  if (showOTPview) {
    return (
      <div className="mb-2">
        <OneTimePasswordInput
          onChange={(otp) => {
            setOtp(otp);
          }}
          value={otp}
          className="common-input input-focus p-2"
        />
        <p
          className="text-xs mt-2 text-right hover:text-blue-zodiac text-razzmatazz smooth-animate"
          role="button"
          onClick={() => {
            setShowOTPView(false);
            setOtp('');
            onVerificationIdChange('');
            onChange('');
          }}
        >
          Change number
        </p>
      </div>
    );
  }

  return (
    <Fragment>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="relative"
      >
        <PhoneInput
          type="tel"
          placeholder="Enter mobile number"
          className="input-focus w-full common-input pr-3 py-2 pl-14 mb-4 h-12 drop-shadow-sm "
          name="phone_number"
          phonecode={phoneCode}
          disabled={verificationId.length > 0}
          onChange={(ev) => {
            if (!ev.target.value) {
              onChange('');
            } else if (validateIsValueIsNumeric(ev.target.value)) {
              onChange(ev.target.value);
            }
          }}
          value={phoneNumber}
          validation={{
            type: isAvailable ? 'success' : 'error',
            message: isAvailable
              ? verificationId
                ? 'A text with verification code has been sent to your mobile number'
                : ''
              : 'Number is already in use by another account',
          }}
          showvalidation={
            validateIndianPhoneNumber(phoneNumber) && !availabilityChecking
          }
        />

        <AnimatePresence exitBeforeEnter>
          {phoneNumber.length === 10 &&
          validateIndianPhoneNumber(phoneNumber) ? (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 right-2 bottom-4 flex items-center"
            >
              <button
                tabIndex={-1}
                onClick={(ev) => {
                  ev.stopPropagation();
                  setShowConfirmWindow(true);
                }}
                disabled={
                  !isAvailable || availabilityChecking || !!verificationId
                }
                className="zodiac-to-transparent px-3 py-1 rounded-full text-sm flex items-center space-x-2"
              >
                {availabilityChecking ? (
                  <ImSpinner2 className="animate-spin" />
                ) : (
                  ''
                )}
                <span>{availabilityChecking ? 'Please wait' : 'Verify'}</span>
              </button>
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
      </motion.div>
      <ConfirmModal
        isAsync
        confirmBtn="Send Verification Code"
        content={{
          heading: 'Verify your phone number',
          description: `A text message with verification code \n will be sent to ${phoneCode} ${phoneNumber}`,
        }}
        showModal={showConfirmWindow}
        setShowModal={(value) => {
          setShowConfirmWindow(value);
        }}
        onCancel={() => {
          setShowConfirmWindow(false);
        }}
        onConfirm={handleSendVerificationCode}
      />
    </Fragment>
  );
};

export default RegisterFormPhoneInput;
