import Link from 'next/link';
import { FC } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const ConsultCard: FC = () => {
  return (
    <div
      className="bg-blue-zodiac/70 rounded-lg px-7 text-center py-8 text-gray-50 
      bg-blend-overlay  bg-cover opacity-95"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
      }}
    >
      <h3 className="uppercase text-lg font-semibold mb-4">Feeling unwell?</h3>
      <div className="mb-3">
        <p>Consult one of our doctors online now!</p>
        <div className="flex justify-around mt-3 mb-5">
          <div className="flex items-center">
            <GoPrimitiveDot className="text-razzmatazz" />
            <span>Video</span>
          </div>
          <div className="flex items-center">
            <GoPrimitiveDot className="text-razzmatazz" />
            <span>Instant Consultation</span>
          </div>
          <div className="flex items-center">
            <GoPrimitiveDot className="text-razzmatazz" />
            <span>Book an Appointment</span>
          </div>
        </div>
      </div>
      <Link href={'/consultation'} passHref>
        <button className="px-3 py-1 border rounded-lg razzmatazz-to-transparent hover:text-gray-50">
          Consult Now
        </button>
      </Link>
    </div>
  );
};

export default ConsultCard;
