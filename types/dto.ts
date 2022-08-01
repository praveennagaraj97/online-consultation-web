export interface RegisterUserDTO {
  email: string;
  phone_number: string | number;
  display_name: string;
  date_of_birth: string;
  'patientprofile.gender': 'M' | 'F' | 'O';
}
