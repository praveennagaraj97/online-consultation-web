import type { ImageType } from '.';
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
