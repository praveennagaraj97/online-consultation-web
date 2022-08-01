import { motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';

const FadePageTransition: FC<{ children: ReactNode; durationInSec?: number }> =
  ({ children, durationInSec = 0.5 }) => {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: durationInSec, type: 'tween', ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  };

export default FadePageTransition;
