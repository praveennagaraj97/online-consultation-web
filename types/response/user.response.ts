import type { PhoneType } from '.';

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  phone_number: PhoneType;
  date_of_birth: string;
  gender: string;
  email_verified: boolean;
}

export interface RelativeEntity {
  id: string;
  name: string;
  email: string;
  phone: PhoneType;
  date_of_birth: string;
  gender: string;
  relation: string;
}
