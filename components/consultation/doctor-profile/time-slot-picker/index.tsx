import Link from 'next/link';
import { FC, useState } from 'react';
import { BsCalendar3, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Routes } from '../../../../routes';
import TimeSlotAccordian from './slot-accordian';

const TimeSlotsPicker: FC = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

  return (
    <div className="shadow-lg px-3 py-6 rounded-lg">
      <div className="flex items-center gap-4 justify-center text-razzmatazz font-semibold mt-3 mb-6">
        <BsChevronLeft />
        <div className="flex items-center gap-2">
          <BsCalendar3 size={18} />
          <span>Tomorrow</span>
        </div>
        <BsChevronRight />
      </div>
      <TimeSlotAccordian
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
        timeSlot="morning"
      />
      <TimeSlotAccordian
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
        timeSlot="afternoon"
      />
      <TimeSlotAccordian
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
        timeSlot="evening"
      />
      <Link href={Routes.ReviewAppointmentBooking}>
        <a className={!selectedTimeSlot ? 'pointer-events-none' : ''}>
          <button
            disabled={!selectedTimeSlot}
            className="py-2 px-6 bg-gray-200 rounded-lg block mx-auto mt-6"
          >
            Proceed
          </button>
        </a>
      </Link>
    </div>
  );
};

export default TimeSlotsPicker;
