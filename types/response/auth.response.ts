export interface CheckPhoneOrEmailExists {
  is_available: boolean;
}

export interface VerificationCode {
  verification_id: string;
  created_at: string;
}

export interface AuthResponse {
  result: AuthResultEntity;
  status_code: number;
  message: string;
  access_token: string;
  refresh_token: string;
}
export interface AuthResultEntity {
  id: string;
  name: string;
  email: string;
  phone_number: PhoneNumber;
  date_of_birth: string;
  gender: string;
  email_verified: boolean;
}
export interface PhoneNumber {
  code: string;
  number: string;
}
