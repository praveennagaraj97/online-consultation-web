import { FC } from 'react';
import SectionTitleWithLink from '../shared/section-title-with-link';
import Swiper from '../swiper';
import DoctorPanelCard from './card';

const DoctorsPanel: FC = () => {
  const doctors: { name: string; speciality: string; image: string }[] = [
    {
      name: 'Dr. Jyotsna Mathai',
      speciality: 'Consultant Physician',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Dr. Manish Khanna',
      speciality: 'Consultant Physician',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Dr. MD Moiz Lalani',
      speciality: 'Pulmonologist',
    },
    {
      name: 'Dr. Priya',
      speciality: 'Consultant Physician',
      image:
        'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80',
    },
    {
      name: 'Dr. A K Shiny Prem',
      speciality: 'Gynecologist',
      image:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name: 'Dr. Santosh',
      speciality: 'ENT',
      image:
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
    {
      name: 'Dr. Sriram Nathan',
      speciality: 'ENT',
      image:
        'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
  ];

  return (
    <div>
      <SectionTitleWithLink sectionTitle="Our Panel of Doctors" />
      <Swiper className="gap-x-5 pb-3 pt-1 " swipeSpeed={3}>
        {doctors.map((doctor) => {
          return (
            <DoctorPanelCard
              key={doctor.name}
              image={doctor.image}
              name={doctor.name}
              role={doctor.speciality}
            />
          );
        })}
      </Swiper>
    </div>
  );
};

export default DoctorsPanel;
