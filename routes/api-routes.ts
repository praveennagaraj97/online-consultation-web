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

  Doctor: `/api/v1/doctor`,

  AppointmentSlot: (doctorId: string) =>
    `/api/v1/appointment_slots/${doctorId}`,

  AppointmentSlotById: (id: string) => `/api/v1/appointment_slots/slot/${id}`,
};

export const privateRoutes = {
  RefreshAuthToken: `/api/v1/auth/refresh_token`,

  Logout: `/api/v1/auth/logout`,

  User: `/api/v1/user`,

  Relative: `/api/v1/user/relative`,

  BookScheduledConsultation: `/api/v1/appointment/schedule`,

  // For payment intent cancel only
  CancelScheduledBooking: (id: string) =>
    `/api/v1/appointment/schedule/cancel/${id}`,
};
