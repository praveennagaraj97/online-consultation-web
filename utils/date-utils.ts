export const daysOfWeekNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * @description compares given date with current date returs if both are same
 * @param day number
 * @param month number
 * @param year number
 * @returns boolean
 */
export function isTodayEqualTo(day: number, month: number, year: number) {
  return (
    new Date(year, month, day).setHours(0, 0, 0, 0) ===
    new Date().setHours(0, 0, 0, 0)
  );
}

/**
 * @description checks for max allowed date
 * @param currentDate todays date from the picker creator
 * @param maxDate user defines max allowed date.
 * @returns boolean
 */
export function disableUpcomingDates(
  currentDate: { date: number; month: number; year: number },
  maxDate?: Date
) {
  if (!maxDate) {
    return false;
  }

  const maxAllowedDate = maxDate.setHours(0, 0, 0, 0);
  const current = new Date(
    currentDate.year,
    currentDate.month,
    currentDate.date
  ).setHours(0, 0, 0, 0);

  if (maxAllowedDate < current) {
    return true;
  }

  return false;
}

/**
 * @description checks for min allowed date
 * @param currentDate todays date from the picker creator
 * @param maxDate user defines max allowed date.
 * @returns boolean
 */
export function disablePreviousDates(
  currentDate: { date: number; month: number; year: number },
  min?: Date
) {
  if (!min) {
    return false;
  }

  const maxAllowedDate = min.setHours(0, 0, 0, 0);
  const current = new Date(
    currentDate.year,
    currentDate.month,
    currentDate.date
  ).setHours(0, 0, 0, 0);

  if (maxAllowedDate > current) {
    return true;
  }

  return false;
}

/**
 * Beginning of Day of Week of a Month
 * @param date
 */
export function beginningDayOfWeek(month: number, year: number): number {
  return new Date(year, month).getDay();
}

/**
 * Days in month
 */
export function daysInMonth(month: number, year: number) {
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return isLeapYear(year) ? 29 : 28;
    default:
      return 30;
  }
}

/**
 * Is Leap Year
 * @param year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @description Formats date
 * @param date
 * @returns formated date in DD/MM/YYYY
 */
export function formattedDate(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// Format the date to YYYY-MM-DD while submitting to backend.
export function formateDateToISO8601(dateStr?: string, date?: Date): string {
  if (dateStr) {
    date = new Date(dateStr);
  } else {
    date = new Date();
  }

  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    ?.toISOString()
    .split('T')[0];
}

// Adds set of date by days count
export function addNextDaysToDate(days: number, dateCursor: Date = new Date()) {
  dateCursor.setDate(dateCursor.getDate() + days);

  return dateCursor;
}

// Adds set of date by days count
export function subtractDaysFromDate(
  days: number,
  dateCursor: Date = new Date()
) {
  dateCursor.setDate(dateCursor.getDate() - days);

  return dateCursor;
}

export function addMinutes(minutes: number, dateCursor: Date = new Date()) {
  dateCursor.setMinutes(dateCursor.getMinutes() + minutes);

  return dateCursor;
}

export function subtractMinutes(
  minutes: number,
  dateCursor: Date = new Date()
) {
  dateCursor.setMinutes(dateCursor.getMinutes() - minutes);

  return dateCursor;
}

export function formateDateStringToLocale(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = {},
  locale: Intl.LocalesArgument = 'en-IN'
) {
  return new Date(dateStr).toLocaleString(locale, options);
}

export function formatDateRelatively(
  dateStr?: string,
  date?: Date,
  showTime = true
) {
  let compareDate = new Date();

  if (dateStr) {
    compareDate = new Date(dateStr);
    date = new Date(dateStr);
  } else if (!date) {
    compareDate = new Date();
    date = new Date();
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  compareDate.setHours(0, 0, 0, 0);

  const tomorrow = addNextDaysToDate(1);
  tomorrow.setHours(0, 0, 0, 0);

  const time = showTime
    ? ' at ' +
      date.toLocaleString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    : '';

  switch (true) {
    case +today === +compareDate:
      return 'Today' + time;

    case +tomorrow === +compareDate:
      return 'Tommorow' + time;

    default:
      return (
        date.toLocaleDateString('en', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }) + time
      );
  }
}
