import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import ViewContainer from '../../../../components/container/view-container';
import { useAuthContext } from '../../../../context/auth-context';

const SpecialityNotSelected = dynamic(
  () =>
    import(
      '../../../../components/consultation/shared/select-speciality-request'
    )
);
const DoctorList = dynamic(() => import('./list'));
const NotAuthorised = dynamic(
  () => import('../../../../components/shared/not-authorized'),
  { ssr: false }
);

const ChooseDoctorView: FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const { query } = useRouter();

  const { isLogged } = useAuthContext();

  if (!isLogged) {
    return <NotAuthorised />;
  }

  if (!query?.['speciality']) {
    return <SpecialityNotSelected />;
  }

  return (
    <ViewContainer>
      <header className="flex  gap-5 justify-between items-center my-6">
        <h1 className="text-2xl font-semibold">Choose Doctor</h1>

        <button
          className="border py-2 px-5
            zodiac-border-to-zodiac-bg rounded-md"
          onClick={() => setShowFilter(true)}
        >
          Apply Filter
        </button>
      </header>
      <DoctorList speciality={query?.['speciality'] as string} />
    </ViewContainer>
  );
};

export default ChooseDoctorView;
