import { AnimatePresence, motion, Variant } from 'framer-motion';
import { Dispatch, FC, SetStateAction, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import useHandleClose from '../../../../hooks/useHandleClose';

interface TimeSlotAccordianProps {
  timeSlot: 'morning' | 'afternoon' | 'evening';
  setSelectedTimeSlot: Dispatch<SetStateAction<string>>;
  selectedTimeSlot: string;
}

const TimeSlotAccordian: FC<TimeSlotAccordianProps> = ({
  timeSlot,
  setSelectedTimeSlot,
  selectedTimeSlot,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants: { animate: Variant; exit: Variant; initial: Variant } = {
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    initial: { height: 0, opacity: 0 },
  };

  const accordianRef = useRef<HTMLDivElement | null>(null);

  useHandleClose(() => {
    setIsOpen(false);
  }, accordianRef);

  function timeSlotTitle() {
    switch (timeSlot) {
      case 'morning':
        return ['Morning Slot', '08:00 AM - 11:30 AM'];
      case 'afternoon':
        return ['Afternoon Slot', '12:30 PM - 03:30 PM'];
      case 'evening':
        return ['Evening Slot', '04:30 PM - 07:30 PM'];
    }
  }

  function availableSlots() {
    switch (timeSlot) {
      case 'morning':
        return [
          '08:00 AM',
          '08:30 AM',
          '09:00 AM',
          '09:30 AM',
          '11:00 AM',
          '11:30 AM',
        ];
      case 'afternoon':
        return [
          '12:30 PM',
          '01:00 PM',
          '01:30 PM',
          '02:00 PM',
          '02:30 PM',
          '03:00 PM',
          '03:30 PM',
        ];
      case 'evening':
        return [
          '04:30 PM',
          '05:00 PM',
          '05:30 PM',
          '06:00 PM',
          '06:30 PM',
          '07:00 PM',
          '07:30 PM',
        ];
    }
  }

  return (
    <div className="select-none mb-3" ref={accordianRef}>
      <div
        className={`grid grid-cols-6 place-content-between items-center p-2 py-4 border-b cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="col-span-2">{timeSlotTitle()[0]}</p>
        <p className="text-center col-span-3">{timeSlotTitle()[1]}</p>
        <motion.span
          className="ml-auto col-span-1"
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
            transition={{ type: 'tween', duration: 0.7 }}
          >
            {availableSlots().map((slot, idx) => {
              return (
                <button
                  onClick={() => {
                    setSelectedTimeSlot(slot);
                  }}
                  className={`${
                    selectedTimeSlot === slot
                      ? 'bg-blue-zodiac text-gray-50'
                      : ''
                  } py-2 whitespace-nowrap px-4 zodiac-border-to-zodiac-bg mt-4 mx-2`}
                  key={idx}
                >
                  {slot}
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
