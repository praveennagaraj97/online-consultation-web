import { FC, useContext } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { DatepickerCtx } from '../../../context/date-context';
import { monthNames } from '../../../utils/date-utils';

const Header: FC = () => {
  const {
    nextMonth,
    prevMonth,
    viewMonths,
    viewYears,
    selectDate,
    visible: { month, year },
    isSelectedDate,
  } = useContext(DatepickerCtx);

  return (
    <header className="grid grid-cols-7 ">
      <button
        className={
          'hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none grid-cols-1'
        }
        onClick={(e) => prevMonth()}
      >
        <FiChevronLeft size={20} className="stroke-current" />
      </button>

      <button
        className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none font-semibold grid-cols-3`}
        style={{ gridColumn: '2/5' }}
        onClick={(e) => viewMonths()}
      >
        {monthNames[month]}
      </button>

      <button
        className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none font-semibold grid-cols-2`}
        style={{ gridColumn: '5/7' }}
        onClick={(e) => viewYears()}
      >
        {year}
      </button>

      <button
        className={
          'hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none grid-cols-1'
        }
        onClick={(e) => nextMonth()}
      >
        <FiChevronRight size={20} className="stroke-current" />
      </button>
    </header>
  );
};

export default Header;
