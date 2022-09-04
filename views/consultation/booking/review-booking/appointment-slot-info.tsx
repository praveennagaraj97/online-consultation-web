import { useRouter } from 'next/router';
import { FC } from 'react';
import AnchorTwist from '../../../../components/animations/anchor-tag-twist';

const AppointmentSlotInfo: FC = () => {
  const { query } = useRouter();

  console.log(query);

  return (
    <div className="shadow-lg px-3 py-4 rounded-lg gap-4 border">
      <h3 className="font-semibold text-lg  mb-4">Appointment Date & Time</h3>
      <div className="flex items-center flex-wrap gap-3">
        <button className="zodiac-border-to-zodiac-bg py-2 px-6 rounded-md">
          09:00 AM, 30<small>th</small> July 2021
        </button>

        <div className="font-semibold text-razzmatazz">
          <AnchorTwist href={''}>Change Date & Time</AnchorTwist>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSlotInfo;
