import { FC, useState } from 'react';
import DoctorCard from '../../../components/consultation/shared/doctor-card';
import ViewContainer from '../../../components/container/view-container';

const ChooseDoctorView: FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <ViewContainer>
      <div className="flex sm:flex-row flex-col sm:gap-0  gap-5 sm:justify-between sm:items-center my-6">
        <h1 className="text-2xl font-semibold">General Medicines Doctors</h1>
        <div className="flex gap-4 ">
          <button
            className="border py-2 px-5
            zodiac-border-to-zodiac-bg
          "
          >
            Favourite Doctors
          </button>
          <button
            className="border py-2 px-5
            zodiac-border-to-zodiac-bg"
            onClick={() => setShowFilter(true)}
          >
            Apply Filter
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
      {/* <DoctorFilterModal setShowModal={setShowFilter} showModal={showFilter} /> */}
    </ViewContainer>
  );
};

export default ChooseDoctorView;
