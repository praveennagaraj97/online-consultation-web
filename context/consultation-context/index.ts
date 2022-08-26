import { createContext, useContext, useState } from 'react';

export interface ConsultationContextType {
  patient: string;
  setPatientId: (id: string) => void;
}

export const ConsultationContext = createContext<ConsultationContextType>({
  patient: '',
  setPatientId(id) {},
});

export const useConsultationContextData: () => ConsultationContextType = () => {
  const [patientId, setPatientId] = useState('');

  return {
    patient: patientId,
    setPatientId: (id) => {
      setPatientId(id);
    },
  };
};

export const useConsultationContext = () => useContext(ConsultationContext);
