import { FC, Fragment } from 'react';
import { daysOfWeekNames } from '../../../utils/date-utils';

const WeeksHeading: FC = () => {
  return (
    <Fragment>
      {daysOfWeekNames.map((day) => (
        <div
          key={(200 + day).toString()}
          className="p-1 text-sm font-semibold"
          style={{ textAlign: 'center' }}
        >
          {day[0]}
        </div>
      ))}
    </Fragment>
  );
};

export default WeeksHeading;
