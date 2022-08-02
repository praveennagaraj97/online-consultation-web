import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function ModalContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={
        className ||
        `fixed top-0 left-0 w-full
       h-full z-50 flex justify-center items-center backdrop-blur-sm bg-blue-zodiac/25`
      }
    >
      {children}
    </motion.div>
  );
}
