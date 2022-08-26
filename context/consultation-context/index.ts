import { createContext, useContext } from 'react';

export interface ConsultationContextType {}

export const ConsultationContext = createContext<ConsultationContextType>({});

export const useConsultationContextData: () => ConsultationContextType = () => {
  return {};
};

export const useConsultationContext = () => useContext(ConsultationContext);
