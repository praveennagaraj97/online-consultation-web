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
  discount: number;
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
  next_available_slot?: SlotEntity;
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

export interface SlotEntity {
  id: string;
  date: string;
  start: string;
  end: string | null;
  is_available: boolean;
  reason?: string;
}

export interface ConfirmBookingRazorPayEntity {
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  name: string;
  description: string;
  amount: number;
  currency: string;
}
