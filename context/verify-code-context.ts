import { createContext, useContext } from 'react';
import { PhoneType } from '../types/response';

export interface VerifyCodeContextType {
  phone: PhoneType | null;
  setPhone: (phone: PhoneType) => void;
  verificationId: string;
  setVerificationId: (id: string) => void;
}

export const VerifyCodeContext = createContext<VerifyCodeContextType>({
  phone: null,
  verificationId: '',
  setPhone(phone) {},
  setVerificationId(id) {},
});

export const useVerifyCodeContext = () => useContext(VerifyCodeContext);
