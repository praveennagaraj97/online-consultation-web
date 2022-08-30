import { motion, Variant } from 'framer-motion';
import React, { useRef, useState } from 'react';
import {
  BsCalendar2CheckFill,
  BsCalendar2PlusFill,
  BsCalendar2WeekFill,
} from 'react-icons/bs';
import { DatepickerCtx, useDatepickerCtx } from '../../context/date-context';
import useHandleClose from '../../hooks/useHandleClose';
import { formattedDate } from '../../utils/date-utils';
import Portal from '../modal';
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
    type: 'success' | 'error';
    message?: string;
  };
  showvalidation?: boolean;
  disabled?: boolean;
  btnClass?: string;
  showDateString?: boolean;
  postionTop?: number;
}

const DatePicker: React.FC<DatePickerProps> = ({
  date,
  onChange,
  maxDate,
  minDate,
  className = '',
  placeholder,
  iconClassName = '',
  validation,
  disabled,
  btnClass = '',
  showDateString = true,
  showvalidation,
  postionTop = 50,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const ctxValue = useDatepickerCtx(date, onChange, setShow, maxDate, minDate);

  const varients: { animate: Variant; initial: Variant; exit: Variant } = {
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
    initial: { y: '-10%', opacity: 0 },
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  useHandleClose(() => {
    setShow(false);
  }, containerRef);

  return (
    <DatepickerCtx.Provider value={ctxValue}>
      <div className={`relative w-full`} ref={containerRef}>
        {showDateString ? (
          <CommonInput
            className={className}
            readOnly
            placeholder={placeholder}
            disabled={disabled}
            showvalidation={showvalidation}
            validation={validation}
            onFocus={() => setShow(true)}
            value={date ? formattedDate(date) : ''}
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
          type="button"
          className={`${btnClass} absolute  h-full flex items-center p-2`}
        >
          {date ? (
            <BsCalendar2CheckFill
              size={20}
              className={`${iconClassName} hover:scale-110 smooth-animate`}
            />
          ) : show ? (
            <BsCalendar2WeekFill
              size={20}
              className={`${iconClassName} hover:scale-110 smooth-animate`}
            />
          ) : (
            <BsCalendar2PlusFill
              size={20}
              className={`${iconClassName} hover:scale-110 smooth-animate`}
            />
          )}
        </button>
        <Portal disableScroll={false} showModal={show}>
          <motion.div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            variants={varients}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              top: `${
                (containerRef.current?.getBoundingClientRect().top || 0) +
                postionTop
              }px`,
              left: containerRef.current?.getBoundingClientRect().left,
            }}
            className="fixed z-50 left-0 bg-white shadow-lg"
          >
            <DatePickerLayout />
          </motion.div>
        </Portal>
      </div>
    </DatepickerCtx.Provider>
  );
};

export default DatePicker;
