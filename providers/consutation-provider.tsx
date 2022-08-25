import { FC, ReactNode } from 'react';
import {
  ConsultationContext,
  useConsultationContextData,
} from '../context/consultation-context';

const ConsultationContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const contextValues = useConsultationContextData();

  return (
    <ConsultationContext.Provider value={contextValues}>
      {children}
    </ConsultationContext.Provider>
  );
};

export default ConsultationContextProvider;
