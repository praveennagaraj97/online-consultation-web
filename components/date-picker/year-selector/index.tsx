import { ReactNode, useContext, useLayoutEffect, useState } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { DatepickerCtx } from '../../../context/date-context';

const YearSelector: React.FC<{}> = (props) => {
  const {
    selectYear,
    prevDecade,
    nextDecade,
    visible: { year },
  } = useContext(DatepickerCtx);

  const [years, setYears] = useState<ReactNode[]>([]);
  const [minYear, maxYear] = [year - 6, year + 6];

  useLayoutEffect(() => {
    let years: ReactNode[] = [];

    for (let i = minYear; i < maxYear; i++) {
      years.push(
        <button
          key={`year${i}`}
          className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none`}
          onClick={(e) => selectYear(i)}
        >
          {i}
        </button>
      );
    }

    setYears(years);
  }, [maxYear, minYear, selectYear, year]);

  return (
    <div>
      <div className="flex gap-x-2 items-center justify-between">
        <button
          className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none`}
          onClick={(e) => prevDecade()}
        >
          <FiChevronsLeft fontSize={20} />
        </button>
        <button
          className={`rounded p-1 text-sm flex align-center justify-center focus:outline-none`}
        >
          {`${minYear} - ${maxYear - 1}`}
        </button>
        <button
          className={`hover:bg-slate-500/30 rounded p-1 text-sm flex align-center justify-center focus:outline-none`}
          onClick={(e) => nextDecade()}
        >
          <FiChevronsRight fontSize={20} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 items-stretch mt-3">{years}</div>
    </div>
  );
};

export default YearSelector;
