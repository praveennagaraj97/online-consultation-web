import { FC, ReactNode } from 'react';
import {
  AiOutlineLogout,
  AiOutlineMedicineBox,
  AiOutlineSchedule,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiReceipt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa';

import { Routes } from '../../../routes';
import { AccountPageOptions } from '../../../types/globals';
import FadePageTransition from '../../animations/fade-page-transition';
import AccountNavItemButton from '../nav-item-btn';

const AccountViewLayout: FC<{
  children: ReactNode;
  option: AccountPageOptions;
}> = ({ children, option }) => {
  return (
    <div className="xl:container mx-auto xl:px-2 px-4">
      <div className="flex">
        <nav className="border-r pb-10 w-1/4 ">
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
            href={Routes.Home}
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
            href={Routes.Home}
            icon={<FaRegAddressCard />}
            title="Delivery Address"
            isActive={false}
          />

          <button
            onClick={() => {}}
            className={`flex p-4 pr-16 w-full items-center 
            hover:bg-razzmatazz hover:text-gray-50 transition-all transform duration-300`}
          >
            <AiOutlineLogout />
            <span className="ml-2">Logout</span>
          </button>
        </nav>
        <div className="w-full py-8 px-6 overflow-y-auto grid ">
          <FadePageTransition>{children}</FadePageTransition>
        </div>
      </div>
    </div>
  );
};

export default AccountViewLayout;
