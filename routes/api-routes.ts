export const publicRoutes = {
  CheckIfPhoneNumberTaken: `/api/v1/auth/check_phone_taken`,

  SendVerificationCode: `/api/v1/auth/send_verification_code`,

  VerifyCode: (verificationId: string) =>
    `/api/v1/auth/verify_code/${verificationId}`,

  ResendVerificationCode: (verificationId: string) =>
    `/api/v1/auth/resend_verification_code/${verificationId}`,

  CheckIfEmailTaken: `/api/v1/auth/check_email_taken`,

  Register: `/api/v1/auth/register`,

  LoginWithPhoneNumber: (remember: boolean) =>
    `/api/v1/auth/signin_with_phonenumber?remember_me=${remember}`,

  ConsultationTypes: `/api/v1/consultation_type`,

  Speciality: `/api/v1/speciality`,
};

export const privateRoutes = {
  RefreshAuthToken: `/api/v1/auth/refresh_token`,

  Logout: `/api/v1/auth/logout`,

  User: `/api/v1/user`,

  Relative: `/api/v1/user/relative`,
};
