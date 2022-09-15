import { motion, Variant } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import {
  BsCalendar2CheckFill,
  BsCalendar2PlusFill,
  BsCalendar2WeekFill,
} from 'react-icons/bs';
import { DatepickerCtx, useDatepickerCtx } from '../../context/date-context';
import useHandleClose from '../../hooks/useHandleClose';
import useWindowResize from '../../hooks/useWindowResize';
import { formattedDate } from '../../utils/date-utils';
import { _window } from '../../utils/web.api';
import Portal from '../modal';
import CommonInput from '../shared/inputs/common-input';

import DatePickerLayout from './layout';

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
  centerDropdownOnSmallScreen?: boolean;
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
  centerDropdownOnSmallScreen = false,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const ctxValue = useDatepickerCtx(date, onChange, setShow, maxDate, minDate);

  const [positionRect, setPositionRect] = useState<DOMRect>();

  const varients: { animate: Variant; initial: Variant; exit: Variant } = {
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
    initial: { y: '-10%', opacity: 0 },
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { width } = useWindowResize(centerDropdownOnSmallScreen);

  useHandleClose(() => {
    setShow(false);
  }, containerRef);

  useEffect(() => {
    if (containerRef.current) {
      setPositionRect(containerRef.current?.getBoundingClientRect());
      _window()?.addEventListener('scroll', () => {
        setPositionRect(containerRef.current?.getBoundingClientRect());
      });
    }

    return () => {
      window.removeEventListener('scroll', () => {
        setPositionRect(undefined);
      });
    };
  }, [containerRef, show]);

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
            setShow(!show);
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
            style={
              width < 640 && centerDropdownOnSmallScreen
                ? {
                    top: `${(positionRect?.top || 0) + postionTop}px`,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }
                : {
                    top: `${(positionRect?.top || 0) + postionTop}px`,
                    left: positionRect?.left,
                  }
            }
            variants={varients}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0"
          >
            <div className=" bg-white shadow-lg">
              <DatePickerLayout />
            </div>
          </motion.div>
        </Portal>
      </div>
    </DatepickerCtx.Provider>
  );
};

export default DatePicker;
