import type { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';
import type {
  DatepickerContextType,
  MonthYear,
  ViewState,
} from '../types/dates';

const initialState: DatepickerContextType = {
  date: undefined,
  maxDate: undefined,
  minDate: undefined,
  visible: {
    month: 0,
    year: 1970,
  },
  view: 'date',
  nextMonth: () => {},
  prevMonth: () => {},
  nextYear: () => {},
  prevYear: () => {},
  nextDecade: () => {},
  prevDecade: () => {},
  selectMonth: (m) => {},
  selectYear: (y) => {},
  selectDate: (d) => {},
  viewMonths: () => {},
  viewYears: () => {},
  isSelectedDate: () => false,
};

export const DatepickerCtx = createContext<DatepickerContextType>(initialState);

export function useDatepickerCtx(
  date: Date | undefined,
  onChange: (d: Date) => void,
  setVisible: Dispatch<SetStateAction<boolean>>,
  maxDate?: Date,
  minDate?: Date
): DatepickerContextType {
  const [monthYear, setMonthYear] = useState<MonthYear>({
    month: maxDate ? maxDate.getMonth() : new Date().getMonth(),
    year: maxDate ? maxDate.getFullYear() : new Date().getFullYear(),
  });

  const [view, setView] = useState<ViewState>('date');

  const selectDate = (d: number) => {
    onChange(new Date(monthYear.year, monthYear.month, d));
    setVisible(false);
  };

  const isSelectedDate = (d: number): boolean => {
    if (
      d === date?.getDate() &&
      monthYear.month === date.getMonth() &&
      monthYear.year === date.getFullYear()
    ) {
      return true;
    }
    return false;
  };

  const selectMonth = (m: number) => {
    setMonthYear((state) => ({ ...state, month: m }));
    setView('date');
  };

  const selectYear = (y: number) => {
    setMonthYear((state) => ({ ...state, year: y }));
    setView('month');
  };

  return {
    date,
    visible: monthYear,
    view,
    nextMonth: () =>
      setMonthYear((state) =>
        state.month >= 11
          ? { month: 0, year: state.year + 1 }
          : { month: state.month + 1, year: state.year }
      ),
    prevMonth: () =>
      setMonthYear((state) =>
        state.month <= 0
          ? { month: 11, year: state.year - 1 }
          : { month: state.month - 1, year: state.year }
      ),
    nextYear: () =>
      setMonthYear((state) => ({ ...state, year: state.year + 1 })),
    prevYear: () =>
      setMonthYear((state) => ({ ...state, year: state.year - 1 })),
    nextDecade: () =>
      setMonthYear((state) => ({ ...state, year: state.year + 10 })),
    prevDecade: () =>
      setMonthYear((state) => ({ ...state, year: state.year - 10 })),
    selectMonth,
    selectYear,
    selectDate,
    viewMonths: () => setView('month'),
    viewYears: () => setView('year'),
    isSelectedDate,
    maxDate,
    minDate,
  };
}
