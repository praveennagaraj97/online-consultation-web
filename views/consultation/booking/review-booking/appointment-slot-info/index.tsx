import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWR from 'swr';
import SelectedSlotInfoSkeleton from '../../../../../components/skeletons/consultation/selected-slot-info.skeleton';
import { publicRoutes } from '../../../../../routes/api-routes';
import type { BaseAPiResponse } from '../../../../../types/response';
import type { SlotEntity } from '../../../../../types/response/consultation.response';
import { formateDateStringToLocale } from '../../../../../utils/date-utils';
import ChangeAppointmentSlot from './change-slot';

const AppointmentSlotInfo: FC = () => {
  const { query } = useRouter();

  const { isValidating, data } = useSWR<BaseAPiResponse<SlotEntity>>(
    query?.['slot']
      ? publicRoutes.AppointmentSlotById(query?.['slot'] as string)
      : ''
  );

  if (isValidating || !data) {
    return <SelectedSlotInfoSkeleton />;
  }

  return (
    <div className="shadow-lg px-3 py-4 rounded-lg gap-4 border">
      <h3 className="font-semibold text-lg  mb-4">Appointment Date & Time</h3>
      <div className="flex items-center flex-wrap gap-3">
        <div className="border border-blue-zodiac/20 rounded-md py-2 px-6">
          <span className="uppercase">
            {formateDateStringToLocale(data?.result.start, {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </span>
          ,{' '}
          {formateDateStringToLocale(data?.result.start, {
            dateStyle: 'full',
          })}
        </div>
        <ChangeAppointmentSlot currentDate={data.result.start} />
      </div>
    </div>
  );
};

export default AppointmentSlotInfo;
