import { useRouter } from 'next/router';
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
  const { query, push } = useRouter();

  const { isValidating, data } = useSWR<BaseAPiResponse<SlotEntity[]>>(
    doctorId && selectedDate && nextAvailableSlotDate
      ? [
          publicRoutes.AppointmentSlot(doctorId),
          { date: formateDateToISO8601(selectedDate) },
        ]
      : ''
  );

  const { isValidating: selectedSlotValidating, data: selectedSlotData } =
    useSWR<BaseAPiResponse<SlotEntity>>(
      query?.['slot']
        ? publicRoutes.AppointmentSlotById(query?.['slot'] as string)
        : ''
    );

  // Set the previous selected slot or by default to next available date.
  useEffect(() => {
    if (nextAvailableSlotDate && !selectedSlotData) {
      setSelectedDate(nextAvailableSlotDate);
    } else if (selectedSlotData) {
      setSelectedDate(selectedSlotData.result.start);
    }
  }, [nextAvailableSlotDate, selectedSlotData]);

  if (isValidating || !doctorId || selectedSlotValidating) {
    return <AppointmentTimeSlotPickerSkeleton />;
  }

  return (
    <AppointmentTimeSlotsPicker
      defaultSelectedSlot={(query?.['slot'] as string) || ''}
      onProceed={(slot) => {
        push({
          pathname: '/consultation/book-appointment/review-booking',
          query: { ...query, slot },
        });
      }}
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
