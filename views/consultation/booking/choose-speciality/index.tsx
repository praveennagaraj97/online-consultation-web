import Link from 'next/link';
import { FC, useState } from 'react';
import DoctorsContactedCard from '../../../../components/consultation/shared/doctors-contacted-card';
import SpecialityCard from '../../../../components/consultation/shared/speciality-card';
import ViewContainer from '../../../../components/container/view-container';
import { SpecialityEntity } from '../../../../types/response/consultation.response';

export interface ChooseSpecialityViewProps {
  specialities: SpecialityEntity[];
  hasMore: boolean;
}

const ChooseSpecialityView: FC<ChooseSpecialityViewProps> = ({
  hasMore,
  specialities,
}) => {
  const [isSelectedId, setIsSelectedId] = useState<string>();

  return (
    <ViewContainer ariaDescribedBy="Choose speciality for booking appointment">
      <h1 className="text-2xl font-semibold my-5">Choose speciality</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="lg:col-span-2 shadow-lg p-4 rounded-lg">
          <p className="font-semibold mb-6 text-lg">
            Consult with top doctors across specialities
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {specialities?.map(({ id, slug, thumbnail, title }, idx) => {
              return (
                <SpecialityCard
                  onSelect={() => {
                    setIsSelectedId(id);
                  }}
                  isSelected={id == isSelectedId}
                  id={id}
                  image={thumbnail}
                  title={title}
                  key={id}
                />
              );
            })}
          </div>

          <Link href={''}>
            <a className={!isSelectedId ? 'pointer-events-none' : ''}>
              <button
                className={`razzmatazz-to-white block mx-auto py-2 px-10 rounded-lg mt-8`}
                disabled={!isSelectedId}
              >
                Proceed
              </button>
            </a>
          </Link>
        </div>

        <div className="col-span-1 shadow-lg p-4 rounded-lg">
          <p className="font-semibold mb-6 text-lg">Doctors consulted before</p>
          <DoctorsContactedCard name="Dr. Ram Mohan" role="General Medicine" />

          <DoctorsContactedCard name="Dr. Jerry Anderson" role="Radiology" />
        </div>
      </div>
    </ViewContainer>
  );
};

export default ChooseSpecialityView;
