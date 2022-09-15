import { useRouter } from 'next/router';
import type { FC } from 'react';
import useSWR from 'swr';
import DoctorInfo from '../../../../components/consultation/doctor-profile/doctor-info';
import DoctorProfileInfoSkeleton from '../../../../components/skeletons/consultation/doctor-profile-info.skeleton';
import { publicRoutes } from '../../../../routes/api-routes';
import type { BaseAPiResponse } from '../../../../types/response';
import type { DoctorEntity } from '../../../../types/response/consultation.response';

const SelectedDoctorDetails: FC = () => {
  const { query } = useRouter();

  const { data, isValidating } = useSWR<BaseAPiResponse<DoctorEntity>>(
    query?.['doctor'] ? publicRoutes.Doctor + `/${query?.['doctor']}` : ''
  );

  if (isValidating) {
    return <DoctorProfileInfoSkeleton />;
  }

  return <DoctorInfo data={data?.result} />;
};

export default SelectedDoctorDetails;
