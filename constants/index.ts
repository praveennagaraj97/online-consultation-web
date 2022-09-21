export enum StorageKeys {
  AUTH_SESSION = '__AUTH_SESSION',
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}

export const GendersOptions = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Others',
    label: 'Others',
  },
  {
    value: 'na',
    label: 'Prefer not to say',
  },
];

export const RelationshipOptions = [
  {
    value: 'Father',
    label: 'Father',
  },
  {
    value: 'Mother',
    label: 'Mother',
  },
  {
    value: 'Brother',
    label: 'Brother',
  },
  {
    value: 'Sister',
    label: 'Sister',
  },
  {
    value: 'Wife',
    label: 'Wife',
  },
  {
    value: 'Son',
    label: 'Son',
  },
  {
    value: 'Daughter',
    label: 'Daughter',
  },
  {
    value: 'Someone else',
    label: 'Someone else',
  },
];

export const LoadingPlaceholder = '/assets/loading-blur.jpeg';
export const NotFoundImage = '/assets/img-placeholder.png';

export enum SlotNotAvailableReasons {
  PaymentProcessing = 'Blocked for payment processing',
  Confirmed = 'Slot has been booked',
  Released = '',
}
