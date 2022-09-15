import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, ReactNode, useState } from 'react';
import { SlotEntity } from '../../../types/response/consultation.response';
import TimeSlotAccordian from './slot-accordian';

interface AppointmentTimeSlotsPickerProps {
  slots: SlotEntity[];
  datePicker: ReactNode;
}

const AppointmentTimeSlotsPicker: FC<AppointmentTimeSlotsPickerProps> = ({
  slots,
  datePicker,
}) => {
  const { query } = useRouter();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

  return (
    <div className="shadow-lg px-3 py-6 rounded-lg border">
      {datePicker}
      {!slots.length ? (
        'No Slots'
      ) : (
        <Fragment>
          <TimeSlotAccordian
            selectedTimeSlot={selectedTimeSlot}
            onTimeSlotSelect={setSelectedTimeSlot}
            timeSlot="morning"
            slots={slots}
          />
          <TimeSlotAccordian
            selectedTimeSlot={selectedTimeSlot}
            onTimeSlotSelect={setSelectedTimeSlot}
            timeSlot="afternoon"
            slots={slots}
          />
          <TimeSlotAccordian
            selectedTimeSlot={selectedTimeSlot}
            onTimeSlotSelect={setSelectedTimeSlot}
            timeSlot="evening"
            slots={slots}
          />
          <Link
            href={{
              pathname: '/consultation/book-appointment/review-booking',
              query: { ...query, slot: selectedTimeSlot },
            }}
            passHref
          >
            <button
              disabled={!selectedTimeSlot}
              className="py-2 px-6 razzmatazz-to-transparent rounded-lg block mx-auto mt-6"
            >
              Proceed
            </button>
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default AppointmentTimeSlotsPicker;
