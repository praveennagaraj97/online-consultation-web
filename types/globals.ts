export type AccountPageOptions =
  | 'profile'
  | 'linkedProfiles'
  | 'myOrders'
  | 'myAppointments';

export interface ModalProps {
  showModal: boolean;
  setShowModal?: (value: boolean) => void;
  disableScroll?: boolean;
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

export type ErrorResponseCallback = {
  type: 'error' | 'success';
  message: string;
};
