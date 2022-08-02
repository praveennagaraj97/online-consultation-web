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
import CommonInput from '../shared/inputs/common-input';

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
  placeholder?: string;
  iconClassName?: string;
  validation?: {
    error: boolean;
    message: string;
  };
  disabled?: boolean;
  btnClass?: string;
  showDateString?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  date,
  onChange,
  maxDate,
  minDate,
  className,
  placeholder,
  iconClassName,
  validation,
  disabled,
  btnClass = '',
  showDateString = true,
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
      <div className={`relative cursor-pointer w-full`} ref={closeRef}>
        {showDateString ? (
          <CommonInput
            value={date ? formattedDate(date) : ''}
            placeholder={placeholder}
            className={className}
            validation={validation}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            readOnly
          />
        ) : (
          ''
        )}
        <button
          onClick={() => {
            if (disabled) {
              return;
            }
            setTimeout(() => {
              setShow(!show);
            }, 100);
          }}
          tabIndex={-1}
          type="button"
          className={`${btnClass} absolute  h-full flex items-center p-2`}
        >
          {date ? (
            <BsCalendar2CheckFill
              tabIndex={-1}
              size={20}
              className={`${iconClassName} hover:scale-110 smooth-animate`}
            />
          ) : show ? (
            <BsCalendar2WeekFill
              tabIndex={-1}
              size={20}
              className={`${iconClassName} hover:scale-110 smooth-animate`}
            />
          ) : (
            <BsCalendar2PlusFill
              tabIndex={-1}
              size={20}
              className={`${iconClassName} hover:scale-110 smooth-animate`}
            />
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
              tabIndex={-1}
              animate="animate"
              exit="exit"
              className="absolute left-0 top-12 z-10 bg-white"
            >
              <DatePickerLayout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DatepickerCtx.Provider>
  );
};

export default DatePicker;
