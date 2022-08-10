import type { Dispatch, SetStateAction } from 'react';

export type AccountPageOptions =
  | 'profile'
  | 'linkedProfiles'
  | 'myOrders'
  | 'myAppointments';

export interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export type Action<T = string, P = void> = {
  type: T;
  payload: P;
};

export interface SessionData {
  logged_at: Date;
  rememberMe: boolean;
  expires_at: Date;
}
