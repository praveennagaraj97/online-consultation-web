import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWR from 'swr';
import DoctorInfo from '../../../../components/consultation/doctor-profile/doctor-info';

import ViewContainer from '../../../../components/container/view-container';
import MissingParamsError from '../../../../components/shared/missing-params';
import DoctorProfileInfoSkeleton from '../../../../components/skeletons/consultation/doctor-profile-info.skeleton';
import { publicRoutes } from '../../../../routes/api-routes';
import { BaseAPiResponse } from '../../../../types/response';
import { DoctorEntity } from '../../../../types/response/consultation.response';
import DoctorAvailabilitySlots from './slots';

const AppointmentFeaturesCard = dynamic(
  () => import('../../../../components/consultation/slot/features-card'),
  { suspense: true, ssr: false }
);

const DoctorAvailabilitySlotView: FC = () => {
  const { query } = useRouter();

  const { data, isValidating } = useSWR<BaseAPiResponse<DoctorEntity>>(
    query?.['doctor'] ? publicRoutes.Doctor + `/${query?.['doctor']}` : ''
  );

  if (!query?.['doctor']) {
    return (
      <MissingParamsError description="Looks like you reached this page without selecting doctor!" />
    );
  }

  return (
    <ViewContainer ariaDescribedBy="Profile view of doctor">
      <h1 className="text-2xl font-semibold my-7">Doctor Profile</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="col-span-1">
          {isValidating ? (
            <DoctorProfileInfoSkeleton />
          ) : (
            <DoctorInfo data={data?.result} />
          )}
          <AppointmentFeaturesCard />
        </div>

        <div className="col-span-1">
          <DoctorAvailabilitySlots
            doctorId={data?.result.id || ''}
            nextAvailableSlotDate={data?.result.next_available_slot?.date}
          />
        </div>
      </div>
    </ViewContainer>
  );
};

export default DoctorAvailabilitySlotView;
