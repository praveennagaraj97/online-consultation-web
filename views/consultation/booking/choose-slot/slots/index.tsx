import { FC, useEffect, useState } from 'react';
import useSWR from 'swr';
import AppointmentTimeSlotsPicker from '../../../../../components/consultation/appointment-time-slot-picker';
import SlotDatePicker from '../../../../../components/consultation/appointment-time-slot-picker/slot-date-picker';
import AppointmentTimeSlotPickerSkeleton from '../../../../../components/skeletons/consultation/appointment-time-slot-picker.skeleton';
import { publicRoutes } from '../../../../../routes/api-routes';
import { BaseAPiResponse } from '../../../../../types/response';
import { SlotEntity } from '../../../../../types/response/consultation.response';
import { formateDateToISO8601 } from '../../../../../utils/date-utils';

interface DoctorAvailabilitySlotsProps {
  nextAvailableSlotDate?: string;
  doctorId: string;
}

const DoctorAvailabilitySlots: FC<DoctorAvailabilitySlotsProps> = ({
  doctorId,
  nextAvailableSlotDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const { isValidating, data } = useSWR<BaseAPiResponse<SlotEntity[]>>(
    doctorId && selectedDate && nextAvailableSlotDate
      ? [
          publicRoutes.AppointmentSlot(doctorId),
          { date: formateDateToISO8601(selectedDate) },
        ]
      : ''
  );

  useEffect(() => {
    if (nextAvailableSlotDate) {
      setSelectedDate(nextAvailableSlotDate);
    }
  }, [nextAvailableSlotDate]);

  if (isValidating || !doctorId) {
    return <AppointmentTimeSlotPickerSkeleton />;
  }

  return (
    <AppointmentTimeSlotsPicker
      slots={data?.result || []}
      datePicker={
        <SlotDatePicker
          selectedDate={selectedDate}
          onChange={(value) => {
            setSelectedDate(value);
          }}
          minDate={
            nextAvailableSlotDate ? new Date(nextAvailableSlotDate) : new Date()
          }
        />
      }
    />
  );
};

export default DoctorAvailabilitySlots;
