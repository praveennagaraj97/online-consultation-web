import { AnimatePresence, motion, Variant } from 'framer-motion';
import { FC, ReactNode, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import useHandleClose from '../../../hooks/useHandleClose';

interface AccordianProps {
  defaultOpenState?: boolean;
  heading: string;
  children: ReactNode;
  className?: string;
}

const Accordian: FC<AccordianProps> = ({
  defaultOpenState = false,
  heading,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpenState);

  const variants: { animate: Variant; exit: Variant; initial: Variant } = {
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    initial: { height: 0, opacity: 0 },
  };

  const accordianRef = useRef<HTMLDivElement | null>(null);

  useHandleClose(() => {
    setIsOpen(false);
  }, accordianRef);

  return (
    <div className="select-none" ref={accordianRef}>
      <div
        className={`flex justify-between items-center py-4 px-3 border-b cursor-pointer ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{heading}</p>
        <motion.span animate={isOpen ? { rotate: 180 } : { rotate: 0 }}>
          <FiChevronDown className="text-razzmatazz" size={20} />
        </motion.span>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            variants={variants}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ type: 'tween', duration: 0.7 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordian;
