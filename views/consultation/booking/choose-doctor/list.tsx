import { useRouter } from 'next/router';
import { FC, Fragment, useState } from 'react';
import useSWR from 'swr';
import DoctorCard from '../../../../components/consultation/shared/doctor-card';
import DoctorCardSkeleton from '../../../../components/skeletons/consultation/doctor-card';
import { publicRoutes } from '../../../../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../../../../types/response';
import type { DoctorEntity } from '../../../../types/response/consultation.response';
import ViewDoctorProfile from './view-doctor';

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

  const { query, push } = useRouter();

  const [viewDoctorId, setViewDoctorId] = useState<string>('');

  if (isValidating || !data) {
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
    <Fragment>
      <div className="flex flex-col space-y-10">
        {data?.results?.map((doctor) => {
          return (
            <DoctorCard
              key={doctor.id}
              {...doctor}
              onViewClick={() => {
                setViewDoctorId(doctor.id);
              }}
              onBookAppointmentClick={() => {
                push({
                  pathname: '/consultation/book-appointment/choose-slot',
                  query: { ...query, doctor: doctor.id },
                });
              }}
            />
          );
        })}
      </div>
      <ViewDoctorProfile
        showModal={!!viewDoctorId}
        setShowModal={() => {
          setViewDoctorId('');
        }}
        id={viewDoctorId}
      />
    </Fragment>
  );
};

export default DoctorList;
