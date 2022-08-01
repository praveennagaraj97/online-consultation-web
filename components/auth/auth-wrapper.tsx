import { FC, ReactNode } from 'react';

const AuthWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container  mx-auto my-14 px-2 ">
      <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
