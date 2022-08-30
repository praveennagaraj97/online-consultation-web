import { FC } from 'react';
import useSWR from 'swr';
import DoctorCard from '../../../../components/consultation/shared/doctor-card';
import DoctorCardSkeleton from '../../../../components/skeletons/consultation/doctor-card';
import { publicRoutes } from '../../../../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../../../../types/response';
import type { DoctorEntity } from '../../../../types/response/consultation.response';

const DoctorList: FC<{ speciality: string }> = ({ speciality }) => {
  const { data, isValidating } = useSWR<
    PaginatedBaseAPiResponse<DoctorEntity[]>
  >([
    publicRoutes.Doctor,
    {
      next_available_slot: true,
      per_page: 30,
      'speciality_id[eq]': speciality,
    },
  ]);

  if (isValidating) {
    return (
      <div className="flex flex-col space-y-10">
        <DoctorCardSkeleton />
        <DoctorCardSkeleton />
        <DoctorCardSkeleton />
        <DoctorCardSkeleton />
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-10">
      {data?.results?.map((doctor) => {
        return <DoctorCard key={doctor.id} {...doctor} />;
      })}
    </div>
  );
};

export default DoctorList;
