import { FC } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  addNextDaysToDate,
  formatDateRelatively,
  subtractDaysFromDate,
} from '../../../utils/date-utils';
import DatePicker from '../../date-picker';

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
        <div className="w-8 h-4">
          <DatePicker
            minDate={minDate}
            onChange={(date) => {
              onChange(date.toDateString());
            }}
            postionTop={30}
            showDateString={false}
            className="left-0 top-0"
            date={new Date(selectedDate)}
            centerDropdownOnSmallScreen
          />
        </div>
        <span>{formatDateRelatively(selectedDate, undefined, false)}</span>
      </div>
      <BsChevronRight
        role="button"
        className="smooth-animate hover:scale-105"
        onClick={() => {
          onChange(addNextDaysToDate(1, new Date(selectedDate)).toDateString());
        }}
      />
    </div>
  );
};

export default SlotDatePicker;
