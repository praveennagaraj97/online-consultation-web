import { PhoneDTO } from '.';

export interface CheckWetherPhoneExistsDTO extends PhoneDTO {}

export interface RegisterDTO {
  name: string;
  email: string;
  phone_code: string;
  phone_number: string;
  date_of_birth?: Date;
  gender: string;
  verification_id: string;
}
