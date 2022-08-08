export const publicRoutes = {
  CheckIfPhoneNumberTaken: `/api/v1/auth/check_phone_taken`,
  SendVerificationCode: `/api/v1/auth/send_verification_code`,
  VerifyCode: (verificationId: string) =>
    `/api/v1/auth/verify_code/${verificationId}`,
  ResendVerificationCode: (verificationId: string) =>
    `/api/v1/auth/resend_verification_code/${verificationId}`,
  CheckIfEmailTaken: `/api/v1/auth/check_email_taken`,
  Register: `/api/v1/auth/register`,
};
