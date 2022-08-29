import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import DoctorsContactedCard from '../../../../components/consultation/shared/doctors-contacted-card';
import SpecialityCard from '../../../../components/consultation/shared/speciality-card';
import ViewContainer from '../../../../components/container/view-container';
import { useAuthContext } from '../../../../context/auth-context';
import { SpecialityEntity } from '../../../../types/response/consultation.response';

export interface ChooseSpecialityViewProps {
  specialities: SpecialityEntity[];
  hasMore: boolean;
}

const ChooseSpecialityView: FC<ChooseSpecialityViewProps> = ({
  hasMore,
  specialities,
}) => {
  const { query } = useRouter();
  const { user } = useAuthContext();
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    let isCancelled = false;

    if (query?.['speciality'] && !isCancelled) {
      setSelectedId(query?.['speciality'] as string);
    }

    return () => {
      isCancelled = true;
    };
  }, [query]);

  return (
    <ViewContainer ariaDescribedBy="Choose speciality for booking appointment">
      <h1 className="text-2xl font-semibold my-5">Choose speciality</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="lg:col-span-2 shadow-lg p-4 rounded-lg">
          <p className="font-semibold mb-6 text-lg">
            Consult with top doctors across specialities
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {specialities?.map(({ id, thumbnail, title }) => {
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    staggerChildren: 0.5,
                    staggerDirection: 1,
                  }}
                >
                  <SpecialityCard
                    onSelect={() => {
                      setSelectedId(id);
                    }}
                    isSelected={id == selectedId}
                    id={id}
                    image={thumbnail}
                    title={title}
                  />
                </motion.div>
              );
            })}
          </div>

          <Link
            href={{
              pathname: `/consultation/book-appointment/choose-doctor/`,
              query: {
                patient: query?.['patient'] || user?.id,
                speciality: selectedId,
              },
            }}
            passHref
          >
            <button
              className={`razzmatazz-to-white block mx-auto py-2 px-10 rounded-lg mt-8`}
              disabled={!selectedId}
            >
              Proceed
            </button>
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
