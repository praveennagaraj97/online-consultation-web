import type { Dispatch, SetStateAction } from 'react';

export type AccountPageOptions =
  | 'profile'
  | 'linkedProfiles'
  | 'myOrders'
  | 'myAppointments';

export interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  shouldCloseOnBackDrop?: boolean;
}
