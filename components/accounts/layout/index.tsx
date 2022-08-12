import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import {
  AiOutlineLogout,
  AiOutlineMedicineBox,
  AiOutlineSchedule,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiReceipt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa';
import { useAuthContext } from '../../../context/auth-context';

import { Routes } from '../../../routes';

import { AccountPageOptions } from '../../../types/globals';
import FadePageTransition from '../../animations/fade-page-transition';

import BackButton from '../../shared/back-btn';
import NotAuthorised from '../../shared/not-authorized';
import AccountNavItemButton from '../nav-item-btn';

const AccountViewLayout: FC<{
  children: ReactNode;
  option: AccountPageOptions;
}> = ({ children, option }) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const { isLogged, logout } = useAuthContext();

  const { events } = useRouter();

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      events.on('routeChangeComplete', (ev) => {
        setShowNav(false);
      });
    }

    return () => {
      isCancelled = true;
      events.off('routeChangeComplete', () => {
        setShowNav(false);
      });
    };
  }, [events]);

  return (
    <div className="sm:flex">
      <nav
        className={`sm:bg-transparent sm:shadow-none sm:rounded-none ${
          showNav ? 'fixed' : 'sm:block hidden'
        } fixed left-0 bottom-0 sm:right-auto right-0 top-16  z-10 bg-gray-50 shadow-xl rounded-b-2xl h-fit
        `}
      >
        <AccountNavItemButton
          href={Routes.Profile}
          icon={<AiOutlineUser />}
          title="My Profile"
          isActive={option === 'profile'}
        />
        <AccountNavItemButton
          href={Routes.LinkedProfiles}
          icon={<BsPeople />}
          title="View Linked Profiles"
          isActive={option === 'linkedProfiles'}
        />
        <AccountNavItemButton
          href={Routes.Orders}
          icon={<AiOutlineMedicineBox />}
          title="My Orders"
          isActive={option === 'myOrders'}
        />
        <AccountNavItemButton
          href={''}
          icon={<AiOutlineSchedule />}
          title="My Appointments"
          isActive={option === 'myAppointments'}
        />
        <AccountNavItemButton
          href={Routes.Home}
          icon={<BiReceipt />}
          title="Invoices"
          isActive={false}
        />
        <AccountNavItemButton
          href={''}
          icon={<FaRegAddressCard />}
          title="Delivery Address"
          isActive={false}
        />

        {isLogged && (
          <button
            onClick={logout}
            className={`flex p-4 pr-16 w-full items-center 
            hover:bg-razzmatazz hover:text-gray-50 transition-all transform duration-300`}
          >
            <AiOutlineLogout />
            <span className="ml-2">Logout</span>
          </button>
        )}
      </nav>
      <div id="clearfix" className="[margin-right:248px] sm:block hidden" />
      <div className="w-full py-4 sm:px-6 px-2 overflow-y-auto grid [min-height:60vh] scroll-smooth border-l overflow-x-hidden">
        <button className="sm:hidden mb-4" onClick={() => setShowNav(true)}>
          <BackButton />
        </button>

        <FadePageTransition>
          {isLogged ? <div className="">{children}</div> : <NotAuthorised />}
        </FadePageTransition>
      </div>
    </div>
  );
};

export default AccountViewLayout;
