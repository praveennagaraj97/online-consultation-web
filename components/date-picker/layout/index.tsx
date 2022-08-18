import { FC, useContext, useEffect, useState } from 'react';
import { DatepickerCtx } from '../../../context/date-context';
import { ViewState } from '../../../types/dates';
import DateSelector from '../date-selector';
import MonthSelection from '../month-selector';
import YearSelector from '../year-selector';

const DatePickerLayout: FC = () => {
  const { view } = useContext(DatepickerCtx);
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      setShowChild(true);
    }

    return () => {
      isCancelled = true;
      setShowChild(false);
    };
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <div className="relative drop-shadow-xl shadow-lg max-w-xs w-64 p-2 rounded-lg">
      <SelectedView view={view} />
    </div>
  );
};

export default DatePickerLayout;

function SelectedView({ view }: { view: ViewState }): JSX.Element {
  switch (view) {
    case 'date':
      return <DateSelector />;
    case 'month':
      return <MonthSelection />;
    case 'year':
      return <YearSelector />;
    default:
      return <></>;
  }
}
