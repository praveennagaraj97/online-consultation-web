import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

const SwipePageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SwipePageTransition;
