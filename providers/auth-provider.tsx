import type { FC, ReactNode } from 'react';
import { AuthContext, useAuthContextData } from '../context/auth-context';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const context = useAuthContextData();

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
