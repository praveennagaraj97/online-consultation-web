import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface AccountNavItenButtonProps {
  icon: ReactNode;
  title: string;
  isActive: boolean;
  href: string;
}

const AccountNavItemButton: FC<AccountNavItenButtonProps> = ({
  icon,
  title,
  isActive,
  href,
}) => {
  return (
    <Link href={href}>
      <a>
        <button
          className={`flex p-4 pr-16 w-full items-center whitespace-nowrap ${
            isActive
              ? `text-gray-50 bg-razzmatazz `
              : `hover:bg-razzmatazz hover:text-gray-50`
          } transition-all transform duration-300`}
        >
          <span className="w-5">{icon}</span>
          <span className="ml-2">{title}</span>
        </button>
      </a>
    </Link>
  );
};

export default AccountNavItemButton;
