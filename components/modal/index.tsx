import { motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../types/globals';
import { _document } from '../../utils/web.api';

interface PortalProps extends ModalProps {
  children: ReactNode;
}

const Modal: FC<PortalProps> = ({ showModal, children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  const OverlayComponent: FC = () => {
    if (!showModal) {
      return null;
    }

    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full
         h-full z-50 flex justify-center items-center backdrop-blur-sm bg-blue-zodiac/25"
      >
        {children}
      </motion.div>
    );
  };

  return mounted
    ? createPortal(
        <OverlayComponent />,
        _document()?.getElementById('portals')!
      )
    : null;
};

export default Modal;
