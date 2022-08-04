import Link from 'next/link';
import { FC, useState } from 'react';
import DoctorsContactedCard from '../../../components/consultation/shared/doctors-contacted-card';
import SpecialityCard from '../../../components/consultation/shared/speciality-card';
import ViewContainer from '../../../components/container/view-container';
import { Routes } from '../../../routes';

const ChooseSpecialityView: FC = () => {
  const [isSelectedId, setIsSelectedId] = useState<number>();

  const specialities: { title: string; image: string }[] = [
    {
      title: 'Surgery',
      image:
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80',
    },
    {
      title: 'Pediatrics',
      image:
        'https://images.unsplash.com/photo-1632053002928-1919605ee6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2078&q=80',
    },
    {
      title: 'Dermatology',
      image:
        'https://images.unsplash.com/photo-1601458007492-20749caccf0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Radiology',
      image:
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
    {
      title: 'Orthopedics',
      image:
        'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Cardiology',
      image:
        'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Internal Medicine',
      image:
        'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <ViewContainer ariaDescribedBy="Choose speciality for booking appointment">
      <h1 className="text-2xl font-semibold my-5">Add Prescription</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="lg:col-span-2 shadow-lg p-4 rounded-lg">
          <p className="font-semibold mb-6 text-lg">
            Choose from the Specialities
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {specialities.map(({ image, title }, idx) => {
              return (
                <SpecialityCard
                  isSelected={idx + 1 === isSelectedId}
                  setIsSelected={setIsSelectedId}
                  id={idx + 1}
                  image={image}
                  title={title}
                  key={idx}
                />
              );
            })}
          </div>

          <Link href={Routes.ChooseDoctorForBookingAppointment}>
            <a className={!isSelectedId ? 'pointer-events-none' : ''}>
              <button
                className={`zodiac-to-transparent block mx-auto py-2 px-10 rounded-lg mt-8`}
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
