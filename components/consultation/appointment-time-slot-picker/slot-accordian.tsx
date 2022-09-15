import { AnimatePresence, motion, Variant } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import useHandleClose from '../../../hooks/useHandleClose';
import { SlotEntity } from '../../../types/response/consultation.response';
import { formateDateStringToLocale } from '../../../utils/date-utils';
import { filterSlotsByRange } from './helpers';

interface TimeSlotAccordianProps {
  timeSlot: 'morning' | 'afternoon' | 'evening';
  onTimeSlotSelect: (slot: string) => void;
  selectedTimeSlot: string;
  slots: SlotEntity[];
}

const TimeSlotAccordian: FC<TimeSlotAccordianProps> = ({
  timeSlot,
  onTimeSlotSelect,
  selectedTimeSlot,
  slots,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants: { animate: Variant; exit: Variant; initial: Variant } = {
    animate: { height: 'auto', margin: '16px 0', opacity: 1 },
    exit: { height: 0, margin: 0, opacity: 0 },
    initial: { height: 0, margin: 0, opacity: 0 },
  };

  const accordianRef = useRef<HTMLDivElement | null>(null);

  useHandleClose(() => {
    setIsOpen(false);
  }, accordianRef);

  useEffect(() => {
    if (
      filterSlotsByRange('morning', slots).some(
        (slot) => slot.is_available && new Date() < new Date(slot.start)
      )
    ) {
      if (timeSlot === 'morning') {
        setIsOpen(true);
      }
      return;
    }
    if (
      filterSlotsByRange('afternoon', slots).some(
        (slot) => slot.is_available && new Date() < new Date(slot.start)
      )
    ) {
      if (timeSlot === 'afternoon') {
        setIsOpen(true);
      }
      return;
    }
    if (
      filterSlotsByRange('evening', slots).some(
        (slot) => slot.is_available && new Date() < new Date(slot.start)
      )
    ) {
      if (timeSlot === 'evening') {
        setIsOpen(true);
      }
    }
  }, [slots, timeSlot]);

  function timeSlotTitle() {
    switch (timeSlot) {
      case 'morning':
        return ['Morning', '08:00 AM - 11:30 AM'];
      case 'afternoon':
        return ['Afternoon', '12:30 PM - 03:30 PM'];
      case 'evening':
        return ['Evening', '04:30 PM - 07:30 PM'];
    }
  }

  return (
    <div className="select-none mb-3" ref={accordianRef}>
      <div
        className="grid grid-cols-3 place-content-between items-center p-2 
        py-4 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{timeSlotTitle()[0]}</p>
        <p className="text-center whitespace-nowrap">{timeSlotTitle()[1]}</p>
        <motion.span
          className="ml-auto "
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        >
          <FiChevronDown className="" size={20} />
        </motion.span>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            variants={variants}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ type: 'tween', duration: 0.3 }}
            className="grid xl:grid-cols-5 md:grid-cols-4 
            sm:grid-cols-3 grid-cols-2 gap-4"
          >
            {filterSlotsByRange(timeSlot, slots).map((slot, idx) => {
              return (
                <button
                  disabled={new Date() >= new Date(slot.start)}
                  onClick={() => {
                    onTimeSlotSelect(slot.id);
                  }}
                  className={`${
                    selectedTimeSlot === slot.id
                      ? 'bg-blue-zodiac text-gray-50'
                      : ''
                  } py-2 whitespace-nowrap zodiac-border-to-zodiac-bg w-full uppercase rounded-md`}
                  key={idx}
                >
                  {formateDateStringToLocale(slot.start, {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimeSlotAccordian;
