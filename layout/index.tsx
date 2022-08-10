import { FC, ReactNode, useEffect } from 'react';
import { useAuthContext } from '../context/auth-context';
import useNProgress from '../hooks/userNProgress';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  useNProgress();

  const { revalidateLoginStatus } = useAuthContext();

  useEffect(() => {
    revalidateLoginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col place-content-between min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
