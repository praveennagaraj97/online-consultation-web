import { FC } from 'react';
import useSWR from 'swr';
import DoctorCard from '../../../../components/consultation/shared/doctor-card';
import { publicRoutes } from '../../../../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../../../../types/response';
import type { DoctorEntity } from '../../../../types/response/consultation.response';

const DoctorList: FC = () => {
  const { data, isValidating } = useSWR<
    PaginatedBaseAPiResponse<DoctorEntity[]>
  >([
    publicRoutes.Doctor,
    {
      next_available_slot: true,
      per_page: 30,
    },
  ]);

  console.log(data);

  return (
    <div className="flex flex-col space-y-6">
      {data?.results?.map((doctor) => {
        return <DoctorCard key={doctor.id} />;
      })}
    </div>
  );
};

export default DoctorList;
