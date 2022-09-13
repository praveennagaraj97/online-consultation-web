import { FC } from 'react';
import { BsCalendar3, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  addNextDaysToDate,
  formatDateRelatively,
  subtractDaysFromDate,
} from '../../../utils/date-utils';

interface SlotDatePickerProps {
  selectedDate: string;
  onChange: (date: string) => void;
  minDate: Date;
}

const SlotDatePicker: FC<SlotDatePickerProps> = ({
  onChange,
  selectedDate,
  minDate,
}) => {
  return (
    <div
      onClick={(ev) => {
        ev.stopPropagation();
      }}
      className="flex items-center gap-4 justify-center text-razzmatazz font-semibold mt-3 mb-6"
    >
      <button
        disabled={new Date(selectedDate) <= minDate}
        className="smooth-animate hover:scale-105"
        onClick={() => {
          onChange(
            subtractDaysFromDate(1, new Date(selectedDate)).toDateString()
          );
        }}
      >
        <BsChevronLeft />
      </button>
      <div className="flex items-center gap-2">
        <BsCalendar3 size={18} />
        <span>{formatDateRelatively(selectedDate, undefined, false)}</span>
      </div>
      <BsChevronRight
        role="button"
        className="smooth-animate hover:scale-105"
        onClick={() => {
          console.log('clicked');
          onChange(addNextDaysToDate(1, new Date(selectedDate)).toDateString());
        }}
      />
    </div>
  );
};

export default SlotDatePicker;
