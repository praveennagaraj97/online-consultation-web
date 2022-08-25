import { createContext, useContext, useState } from 'react';
import type { ConsultatationType } from '../../types/globals';

export interface ConsultationContextType {
  type: ConsultatationType | null;
  setType: (type: ConsultatationType) => void;
  consultationId: string;
  setConsultationId: (id: string) => void;
}

export const ConsultationContext = createContext<ConsultationContextType>({
  setType(type) {},
  type: null,
  setConsultationId(id) {},
  consultationId: '',
});

export const useConsultationContextData: () => ConsultationContextType = () => {
  const [type, setType] = useState<ConsultatationType | null>(null);
  const [consultationId, setConsultationId] = useState<string>('');

  return {
    setType(type: ConsultatationType) {
      setType(type);
    },
    type: type,
    setConsultationId(id: string) {
      setConsultationId(id);
    },
    consultationId,
  };
};

export const useConsultationContext = () => useContext(ConsultationContext);
