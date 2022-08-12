import { UserEntity } from './user.response';

export interface CheckPhoneOrEmailExists {
  is_available: boolean;
}

export interface VerificationCode {
  verification_id: string;
  created_at: string;
}

export interface AuthResponse {
  result: UserEntity;
  status_code: number;
  message: string;
  access_token: string;
  refresh_token: string;
}

export interface PhoneNumber {
  code: string;
  number: string;
}

export interface RefreshTokenResponse {
  status_code: number;
  message: string;
  access_token: string;
  refresh_token: string;
}
