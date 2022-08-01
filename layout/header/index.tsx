import { useRouter } from 'next/router';
import { FC, Fragment } from 'react';

import HeaderWithHamburgerMenu from './with-hamburger-menu';
import HeaderWithMenuBar from './with-nav-bar';

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <HeaderWithMenuBar isRootPage={pathname === '/'} isLogged={false} />
      <HeaderWithHamburgerMenu isRootPage={pathname === '/'} />
    </Fragment>
  );
};

export default Header;
