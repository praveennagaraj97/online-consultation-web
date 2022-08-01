import Link from 'next/link';
import { FC, Fragment } from 'react';
import { BsCalendarPlus } from 'react-icons/bs';
import { GiStethoscope } from 'react-icons/gi';
import SearchHeader from '../../components/container/search-header';
import ViewContainer from '../../components/shared/view-container';
import { Routes } from '../../routes';

const ConsultationView: FC = () => {
  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer>
        <h1 className="text-xl font-semibold my-5">Consult a Doctor</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-y-6">
          <div className="border rounded-xl shadow-md px-2 py-6">
            <div className="bg-black w-fit p-4 rounded-full mx-auto">
              <GiStethoscope size={64} className="text-gray-50" />
            </div>
            <p className="text-center font-semibold my-4">
              Instant Consultation
            </p>
            <span className="text-center block">
              Not feeling well?
              <br />
              Need to consult a doctor immediately?
              <br />
              Consult our doctors over video call.
            </span>
            <div className="flex justify-around items-center mt-5">
              <span>₹ 150</span>
              <Link href={Routes.InstantConsultation}>
                <a
                  role="button"
                  className="razzmatazz-to-transparent px-4 py-2 rounded-lg"
                >
                  Start Now
                </a>
              </Link>
            </div>
          </div>

          <div className="border rounded-xl shadow-md px-2 py-6">
            <div className="bg-black w-fit p-4 rounded-full mx-auto">
              <BsCalendarPlus size={64} className="text-gray-50" />
            </div>
            <p className="text-center font-semibold my-4">
              Book an appointment
            </p>
            <span className="text-center block">
              Want to consult a speacilist?
              <br />
              Book an appointment with our specialist doctors,
              <br />
              Consult our doctors over video call.
            </span>
            <div className="flex justify-around items-center mt-5">
              <span>₹ 450</span>
              <Link href={Routes.BookConsultation}>
                <a
                  role="button"
                  className="razzmatazz-to-transparent px-4 py-2 rounded-lg"
                >
                  Book Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default ConsultationView;
