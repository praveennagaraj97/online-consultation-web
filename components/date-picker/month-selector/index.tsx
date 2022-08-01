import { Fragment, useContext } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { DatepickerCtx } from '../../../context/date-context';
import { monthNames } from '../../../utils/date-utils';

const MonthSelector: React.FC<{}> = (props) => {
  const { viewYears, selectMonth, nextYear, prevYear, visible } =
    useContext(DatepickerCtx);

  return (
    <Fragment>
      <div className="flex gap-x-2 items-center">
        <button
          className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none stroke-current`}
          onClick={(e) => prevYear()}
        >
          <FiChevronsLeft size={20} />
        </button>
        <button
          className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none w-full`}
          onClick={(e) => viewYears()}
        >
          {visible.year}
        </button>
        <button
          className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none stroke-current`}
          onClick={(e) => nextYear()}
        >
          <FiChevronsRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 items-stretch mt-3">
        {monthNames.map((month, index) => (
          <button
            key={`month-name${index}`}
            className={`hover:bg-slate-500/30 rounded p-1 py-1.5 text-sm flex align-center justify-center focus:outline-none stroke-current`}
            onClick={(e) => selectMonth(index)}
          >
            {month.substring(0, 3)}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default MonthSelector;
