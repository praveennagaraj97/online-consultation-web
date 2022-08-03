export const publicRoutes = {
  CheckIfPhoneNumberTaken: `/api/v1/auth/check_phone_taken`,
  SendVerificationCode: `/api/v1/auth/send_verification_code`,
  VerifyCode: (verificationId: string) =>
    `/api/v1/auth/verify_code/${verificationId}`,
};
