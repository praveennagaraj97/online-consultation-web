import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLocationPlus } from 'react-icons/bi';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CgCloseO, CgMenuRound } from 'react-icons/cg';
import { FaBlog, FaFilePrescription, FaUserNurse } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import { RiArrowDownSFill } from 'react-icons/ri';
import useHandleClose from '../../hooks/useHandleClose';
import { Routes } from '../../routes';

import { toggleFixedHeader } from '../../utils/helpers';
import BrandLogo from './shared/brand-logo';
import Searchbar from './shared/search-bar';
import ToggleHeader from './shared/toogle-header';

const HeaderWithHamburgerMenu: FC<{ isRootPage: boolean; userIP: any }> = ({
  isRootPage,
  userIP,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { events } = useRouter();

  useHandleClose(() => {
    setShowMenu(false);
  }, menuRef);

  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      toggleFixedHeader(scrollY.get(), setIsFixed, {
        isRoot: isRootPage,
        otherPageMargin: 55,
        rootPageMargin: 175,
        isCancelled,
      });

      scrollY.onChange((view) => {
        toggleFixedHeader(view, setIsFixed, {
          isRoot: isRootPage,
          otherPageMargin: 55,
          rootPageMargin: 175,
          isCancelled,
        });
      });
    }
    return () => {
      isCancelled = false;
      scrollY.clearListeners();
    };
  }, [isRootPage, scrollY]);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      events.on('routeChangeComplete', () => {
        setShowMenu(false);
      });
    }
    return () => {
      isCancelled = false;
      events.off('routeChangeComplete', () => {
        setShowMenu(false);
      });
    };
  }, [events]);

  return (
    <div ref={menuRef} className="block sm:hidden">
      <ToggleHeader isFixed={isFixed} isRootPage={isRootPage}>
        <header className="bg-blue-zodiac pt-2 pb-4 px-1 sm:hidden  shadow-xl rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="w-20 h-10 relative">
              <BrandLogo isRootPage={true} />
            </div>
            <CgMenuRound
              onClick={() => setShowMenu(true)}
              className={` ml-2 text-3xl text-pink-600 cursor-pointer transform`}
            />
          </div>
          {isRootPage ? (
            <Fragment>
              <div className="text-gray-50 text-sm my-2 flex items-center ">
                <BiLocationPlus className="w-6" />
                <small className="mr-1">Deliver to</small>
                <small className="font-semibold">
                  {userIP.loading
                    ? 'Please wait'
                    : userIP.data
                    ? `${userIP.data?.postal}, ${userIP.data?.city}`
                    : 'Not available'}
                </small>
                <RiArrowDownSFill />
              </div>
              <div className="px-2">
                <Searchbar userIP={userIP} show={false} />
              </div>
            </Fragment>
          ) : (
            ''
          )}
        </header>
      </ToggleHeader>
      <AnimatePresence exitBeforeEnter>
        {showMenu && (
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ damping: 0 }}
            className="fixed h-3/4 w-full bg-blue-zodiac 
          top-0 left-0  right-0 z-50
          rounded-b-3xl shadow-2xl shadow-blue-zodiac
          "
          >
            <div className="pt-2 pb-4 px-1 text-gray-50 h-full">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-end"
              >
                <CgCloseO
                  className="ml-2 text-3xl text-pink-600 cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              </motion.div>

              <nav className="px-2 my-4 flex flex-col justify-between h-full">
                <div>
                  <Link href={Routes.OrderMedicines}>
                    <a role="button" className="mobile-nav-btn">
                      <GiMedicines />
                      <span className="ml-2 text-lg">Order Medicines</span>
                    </a>
                  </Link>
                  <Link href={Routes.Consultation}>
                    <a role="button" className="mobile-nav-btn">
                      <FaUserNurse />
                      <span className="ml-2 text-lg">Consult a Doctor</span>
                    </a>
                  </Link>
                  <Link href={Routes.Home}>
                    <a role="button" className="mobile-nav-btn">
                      <FaBlog />
                      <span className="ml-2 text-lg">Blog</span>
                    </a>
                  </Link>
                  <Link href={Routes.Cart}>
                    <a role="button" className="mobile-nav-btn">
                      <BsFillCartPlusFill />
                      <span className="ml-2 text-lg">Cart</span>
                    </a>
                  </Link>
                  <Link href={false ? Routes.Profile : Routes.LoginWithPhone}>
                    <a>
                      <button className="mobile-nav-btn">
                        <AiOutlineUser />
                        <span className="ml-2 text-lg">
                          {false ? 'Account' : 'Login'}
                        </span>
                      </button>
                    </a>
                  </Link>
                </div>
                <Link href={Routes.UploadPrescription}>
                  <a
                    className="bg-razzmatazz  border hover:border-opacity-50 border-opacity-0
                hover:bg-transparent shadow-xl py-2 px-4 w-full 
                rounded-lg flex justify-start items-center mb-12"
                    role="button"
                  >
                    <FaFilePrescription />
                    <span className="ml-1">Upload Prescription</span>
                  </a>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isFixed ? <div className={`${isRootPage ? 'mt-44' : 'mt-14'}`} /> : ''}
    </div>
  );
};

export default HeaderWithHamburgerMenu;
