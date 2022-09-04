import { FC } from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { GiVideoConference } from 'react-icons/gi';

const AppointmentFeaturesCard: FC = () => {
  return (
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
  );
};

export default AppointmentFeaturesCard;
