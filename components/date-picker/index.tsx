import { AnimatePresence, motion, Variant } from 'framer-motion';
import React, { useRef, useState } from 'react';
import {
  BsCalendar2CheckFill,
  BsCalendar2PlusFill,
  BsCalendar2WeekFill,
} from 'react-icons/bs';
import { DatepickerCtx, useDatepickerCtx } from '../../context/date-context';
import useHandleClose from '../../hooks/useHandleClose';
import { formattedDate } from '../../utils/date-utils';
import DatePickerLayout from './layout';

export const inputStyle = {
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
};

interface DatePickerProps {
  date?: Date;
  onChange: (date: Date) => void;
  maxDate?: Date;
  minDate?: Date;
  className?: string;
  containerClassName?: string;
  placeholder?: string;
  iconClassName?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  date,
  onChange,
  maxDate,
  minDate,
  className,
  containerClassName,
  placeholder,
  iconClassName,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const ctxValue = useDatepickerCtx(date, onChange, setShow, maxDate, minDate);

  const varients: { animate: Variant; initial: Variant; exit: Variant } = {
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
    initial: { y: '-10%', opacity: 0 },
  };

  const closeRef = useRef<HTMLDivElement | null>(null);

  useHandleClose(() => {
    setShow(false);
  }, closeRef);

  return (
    <DatepickerCtx.Provider value={ctxValue}>
      <div
        className={`${containerClassName} relative cursor-pointer w-full`}
        ref={closeRef}
      >
        <input
          className={className}
          placeholder={placeholder}
          type="text"
          value={date ? formattedDate(date) : ''}
          onFocus={() => setShow(true)}
          readOnly
        />
        <button
          onClick={(e) => setShow(!show)}
          className="absolute right-0 top-0 h-full flex items-center p-2"
        >
          {date ? (
            <BsCalendar2CheckFill size={20} className={iconClassName} />
          ) : show ? (
            <BsCalendar2WeekFill size={20} className={iconClassName} />
          ) : (
            <BsCalendar2PlusFill size={20} className={iconClassName} />
          )}
        </button>
        <AnimatePresence exitBeforeEnter>
          {show && (
            <motion.div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              variants={varients}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-0 z-10 bg-white"
            >
              <DatePickerLayout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DatepickerCtx.Provider>
  );
};
