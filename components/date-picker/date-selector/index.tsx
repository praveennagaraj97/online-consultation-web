import {
  FC,
  Fragment,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { DatepickerCtx } from '../../../context/date-context';
import {
  beginningDayOfWeek,
  daysInMonth,
  disablePreviousDates,
  disableUpcomingDates,
  isTodayEqualTo,
} from '../../../utils/date-utils';
import Header from './header';
import WeeksHeading from './weeks-display';

const DateSelector: FC = (props) => {
  const {
    selectDate,
    visible: { month, year },
    isSelectedDate,
    minDate,
    maxDate,
  } = useContext(DatepickerCtx);
  const [dates, setDates] = useState<ReactNode[]>([]);

  useLayoutEffect(() => {
    const dates: ReactNode[] = [];

    // to pre fill with empty grid col based on starting date of the month.
    for (let i = 0; i < beginningDayOfWeek(month, year); i++) {
      dates.push(<div key={`emptybefore${i}`} />);
    }

    // start at index 1 - in the prev loop start date is filled
    for (let i = 1; i <= daysInMonth(month, year); i++) {
      dates.push(
        <button
          key={`day${i}`}
          className={`hover:bg-slate-500/10 rounded p-1 text-sm hover:text-blue-zodiac/70 ${
            isSelectedDate(i) ? 'bg-blue-zodiac text-gray-50 font-semibold' : ''
          }
          ${isTodayEqualTo(i, month, year) ? 'bg-razzmatazz text-gray-50' : ''}
          `}
          onClick={() => selectDate(i)}
          style={{ textAlign: 'center' }}
          disabled={
            disablePreviousDates({ date: i, month, year }, minDate) ||
            disableUpcomingDates({ date: i, month, year }, maxDate)
          }
        >
          {i}
        </button>
      );
    }

    setDates(dates);
  }, [isSelectedDate, maxDate, minDate, month, selectDate, year]);

  return (
    <Fragment>
      <Header />
      <div className=" grid grid-cols-7 items-stretch">
        <WeeksHeading />
        {dates}
      </div>
    </Fragment>
  );
};

export default DateSelector;
