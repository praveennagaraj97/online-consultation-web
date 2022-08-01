import { FC } from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { GiVideoConference } from 'react-icons/gi';
import DoctorProfileCard from '../../../../components/consultation/doctor-profile/profile-card';
import TimeSlotsPicker from '../../../../components/consultation/doctor-profile/time-slot-picker';
import ViewContainer from '../../../../components/shared/view-container';

const DoctorProfileView: FC = () => {
  return (
    <ViewContainer ariaDescribedBy="Profile view of doctor">
      <h1 className="text-2xl font-semibold my-7">Doctor Profile</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="col-span-1">
          <DoctorProfileCard />
          <div className="shadow-lg px-3 py-6 rounded-lg flex flex-wrap gap-4 mt-5">
            <div className="flex items-center gap-2">
              <GiVideoConference size={24} />
              <span>Video consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineSchedule size={24} />
              <span>Easy Reschedule</span>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <TimeSlotsPicker />
        </div>
      </div>
    </ViewContainer>
  );
};

export default DoctorProfileView;
