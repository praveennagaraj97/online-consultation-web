import { motion } from 'framer-motion';
import { FC, Fragment, ReactNode } from 'react';

const ToggleHeader: FC<{
  isFixed: boolean;
  children: ReactNode;
  isRootPage: boolean;
}> = ({ children, isFixed, isRootPage }) => {
  return (
    <Fragment>
      {isFixed ? (
        <motion.header
          animate={{ y: 0 }}
          initial={{ y: '-100%' }}
          transition={{ damping: 0 }}
          className={`fixed top-0 left-0 right-0 w-full z-50 shadow-2xl 
          transform transition-shadow ${
            isRootPage ? 'shadow-blue-zodiac/70' : 'shadow-gray-400/70'
          }`}
        >
          {children}
        </motion.header>
      ) : (
        children
      )}
    </Fragment>
  );
};

export default ToggleHeader;
