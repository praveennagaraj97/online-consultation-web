import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import useSWR from 'swr';
import SelectedPatientProfileSkeleton from '../../../../components/skeletons/consultation/selected-patient-profile.skeleton';
import { useAuthContext } from '../../../../context/auth-context';
import { privateRoutes } from '../../../../routes/api-routes';
import type { PaginatedBaseAPiResponse } from '../../../../types/response';
import type { RelativeEntity } from '../../../../types/response/user.response';

const PatientProfiles: FC = () => {
  const { user, isLogged } = useAuthContext();
  const { query } = useRouter();

  const { isValidating, data } = useSWR<
    PaginatedBaseAPiResponse<RelativeEntity[]>
  >(isLogged ? privateRoutes.Relative : '');

  if (isValidating) {
    return <SelectedPatientProfileSkeleton />;
  }

  return (
    <div className="shadow-lg px-3 py-6 rounded-lg gap-4 border">
      <h3 className="font-semibold text-lg  mb-4">Patient Profile</h3>
      <div className="flex items-center space-x-5 flex-wrap">
        <Link scroll={false} href={{ query: { ...query, patient: user?.id } }}>
          <a>
            <button
              className={`${
                query?.['patient'] === user?.id
                  ? 'bg-blue-zodiac text-gray-50 cursor-default'
                  : ''
              } zodiac-border-to-zodiac-bg py-2 px-6 rounded-md my-2`}
            >
              {user?.name}
            </button>
          </a>
        </Link>
        {data?.results?.map(({ id, name }) => {
          return (
            <Link
              scroll={false}
              key={id}
              href={{ query: { ...query, patient: id } }}
            >
              <a>
                <button
                  className={`${
                    query?.['patient'] === id
                      ? 'bg-blue-zodiac text-gray-50 cursor-default'
                      : ''
                  } zodiac-border-to-zodiac-bg py-2 px-6 rounded-md my-2`}
                >
                  {name}
                </button>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PatientProfiles;
