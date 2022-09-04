import { FC } from 'react';

import TimeSlotsPicker from '../../../../components/consultation/doctor-profile/time-slot-picker';
import AppointmentFeaturesCard from '../../../../components/consultation/slot/features-card';
import ViewContainer from '../../../../components/container/view-container';
import DoctorProfile from './doctor-profile';

const DoctorAvailabilitySlotView: FC = () => {
  return (
    <ViewContainer ariaDescribedBy="Profile view of doctor">
      <h1 className="text-2xl font-semibold my-7">Doctor Profile</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="col-span-1">
          <DoctorProfile />
          <AppointmentFeaturesCard />
        </div>

        <div className="col-span-1">
          <TimeSlotsPicker />
        </div>
      </div>
    </ViewContainer>
  );
};

export default DoctorAvailabilitySlotView;
