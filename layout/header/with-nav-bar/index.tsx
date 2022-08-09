import { useScroll } from 'framer-motion';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FaFilePrescription } from 'react-icons/fa';
import AnchorTwist from '../../../components/animations/anchor-tag-twist';
import { Routes } from '../../../routes';

import { toggleFixedHeader } from '../../../utils/helpers';
import BrandLogo from '../shared/brand-logo';
import Searchbar from '../shared/search-bar';
import ToggleHeader from '../shared/toogle-header';
import AuthNavLink from './auth-link';

interface HeaderWithMenuBarProps {
  isRootPage: boolean;
  userIP: any;
}

const HeaderWithMenuBar: FC<HeaderWithMenuBarProps> = ({
  isRootPage,
  userIP,
}) => {
  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      toggleFixedHeader(scrollY.get(), setIsFixed, {
        isRoot: isRootPage,
        otherPageMargin: 95,
        rootPageMargin: 143,
        isCancelled,
      });

      scrollY.onChange((view) => {
        toggleFixedHeader(view, setIsFixed, {
          isRoot: isRootPage,
          otherPageMargin: 95,
          rootPageMargin: 143,
          isCancelled,
        });
      });
    }
    return () => {
      isCancelled = false;
      scrollY.clearListeners();
    };
  }, [isRootPage, scrollY]);

  return (
    <div className="sm:block hidden ">
      <ToggleHeader isFixed={isFixed} isRootPage={isRootPage}>
        <div
          className={`${isRootPage ? 'bg-blue-zodiac' : 'bg-gray-50'} 
        pt-2 pb-3 lg:px-4 px-2 md:flex   justify-between  
        shadow-xl rounded-b-lg`}
        >
          <BrandLogo isRootPage={isRootPage} />

          <div className="sm:flex hidden  flex-col justify-between w-full xl:pl-32 lg:pl-24 md:pl-10 ">
            <nav
              className={`sm:flex hidden justify-end items-center h-full  ${
                isRootPage ? 'text-gray-50' : 'text-blue-zodiac h-9'
              }`}
            >
              <div className="relative lg:w-40 w-20 h-7 justify-start md:hidden block mr-auto">
                <BrandLogo isRootPage={isRootPage} />
              </div>
              <AnchorTwist
                className="mx-4  hover:text-pink-500 text-sm"
                href={Routes.OrderMedicines}
              >
                <span>Order Medicines</span>
              </AnchorTwist>
              <AnchorTwist
                className="mx-4  hover:text-pink-500 text-sm"
                href={Routes.Consultation}
              >
                <span>Consult a Doctor</span>
              </AnchorTwist>

              <AnchorTwist
                href={Routes.Cart}
                className="mx-4 flex items-center cursor-pointer  hover:text-pink-500 text-sm"
              >
                <BsFillCartPlusFill
                  size={14}
                  className={!isRootPage ? 'text-razzmatazz' : ''}
                />
                <span className="ml-1 ">Cart</span>
              </AnchorTwist>

              <AuthNavLink isRootPage={isRootPage} />
            </nav>
            {isRootPage ? (
              <div className="lg:pt-2 pt-1 flex lg:text-base text-sm sm:ml-0 ml-2 gap-x-2">
                <Searchbar userIP={userIP} />
                <Link href={Routes.UploadPrescription}>
                  <a
                    className="razzmatazz-to-white py-1 flex whitespace-nowrap items-center rounded-lg px-3 text-sm"
                    role="button"
                  >
                    <FaFilePrescription className="" size={14} />
                    <span className="ml-1 ">Upload Prescription</span>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </ToggleHeader>
      {isFixed ? <div className={`${isRootPage ? 'mt-36' : 'mt-24'}`} /> : ''}
    </div>
  );
};

export default HeaderWithMenuBar;
