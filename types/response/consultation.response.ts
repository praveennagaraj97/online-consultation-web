import type { ImageType, PhoneType } from '.';
import type { ConsultatationType } from '../globals';

export interface ConsultationTypeEntity {
  id: string;
  title: string;
  icon: ImageType;
  description: string;
  price: number;
  action_name: string;
  type: ConsultatationType;
}

export interface SpecialityEntity {
  id: string;
  title: string;
  slug: string;
  thumbnail: ImageType;
}

export interface DoctorEntity {
  id: string;
  name: string;
  email: string;
  phone: PhoneType;
  professional_title: string;
  education: string;
  experience: number;
  profile_pic?: ImageType;
  is_active: boolean;
  hospital: Hospital;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  next_available_slot?: null;
}

export interface Hospital {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  location: Location;
}
export interface Location {
  type: string;
  coordinates?: number[] | null;
}
export interface SpokenLanguagesEntity {
  id: string;
  name: string;
  locale_name: string;
}
