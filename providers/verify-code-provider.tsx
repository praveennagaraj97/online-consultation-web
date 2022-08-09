import { FC, ReactNode, useState } from 'react';
import { VerifyCodeContext } from '../context/verify-code-context';
import { PhoneType } from '../types/response';

const VerifyCodeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [phone, setPhone] = useState<PhoneType | null>(null);
  const [verificationId, setVerificationId] = useState<string>('');

  return (
    <VerifyCodeContext.Provider
      value={{
        phone,
        setPhone: (number) => {
          setPhone(number);
        },
        verificationId,
        setVerificationId: (id) => {
          setVerificationId(id);
        },
      }}
    >
      {children}
    </VerifyCodeContext.Provider>
  );
};

export default VerifyCodeProvider;
