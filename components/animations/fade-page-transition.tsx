import { motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';

const FadePageTransition: FC<{
  children: ReactNode;
  durationInSec?: number;
}> = ({ children, durationInSec = 0.5 }) => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.99, overflow: 'hidden' }}
      transition={{ duration: durationInSec, type: 'tween', ease: 'linear' }}
      exit={{ opacity: 0, scale: 0.99, overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

export default FadePageTransition;
