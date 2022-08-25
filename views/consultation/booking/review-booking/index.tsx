import Link from 'next/link';
import { FC } from 'react';
import AnchorTwist from '../../../../components/animations/anchor-tag-twist';
import DoctorProfileCard from '../../../../components/consultation/doctor-profile/profile-card';
import ViewContainer from '../../../../components/container/view-container';

const ReviewBookingView: FC = () => {
  return (
    <ViewContainer ariaDescribedBy="Profile view of doctor">
      <h1 className="text-2xl font-semibold my-7">Review Booking</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="col-span-1">
          <DoctorProfileCard />
          <div className="shadow-lg px-3 py-6 rounded-lg gap-4">
            <h3 className="font-semibold text-lg  mb-4">
              Appointment Date & Time
            </h3>
            <div className="flex items-center gap-5">
              <button className="zodiac-border-to-zodiac-bg py-2 px-6">
                09:00 AM, 30<small>th</small> July 2021
              </button>

              <div className="font-semibold text-razzmatazz">
                <AnchorTwist href={''}>Change Date & Time</AnchorTwist>
              </div>
            </div>
          </div>
          <div className="shadow-lg px-3 py-6 rounded-lg gap-4">
            <h3 className="font-semibold text-lg  mb-4">Patient Profile</h3>
            <div className="flex items-center gap-5">
              <button className="zodiac-border-to-zodiac-bg py-2 px-6">
                Ellie Williams
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 shadow-lg rounded-lg p-8 h-fit">
          <div className="sm:px-12">
            <div className=" flex justify-end p-1.5 border border-blue-zodiac bg-gray-50 rounded-lg">
              <input
                type="text"
                className="p-2  w-full focus:outline-none rounded-l-lg rounded-r-none bg-transparent"
                placeholder="Got Coupon?"
              />
              <button className="razzmatazz-to-transparent rounded-lg px-4 py-1 text-gray-50 ">
                <span className="ml-1">Apply</span>
              </button>
            </div>
          </div>
          <h4 className="mt-14 mb-4 text-xl font-semibold">Order Summary</h4>
          <div className="flex items-center text-lg mb-1 justify-between">
            <p>Consultation Charges</p>
            <p>₹ 550</p>
          </div>
          <div className="flex items-center text-lg mb-1 justify-between">
            <p>Price Discount</p>
            <p>₹ 150</p>
          </div>
          <div className="flex items-center text-lg mb-1 justify-between">
            <p>Coupon Discount</p>
            <p>₹ 0</p>
          </div>
          <hr className="my-4 opacity-40" />
          <div className="flex items-center text-lg mb-1 justify-between">
            <p className="font-semibold">Amount to be paid</p>
            <p>₹ 400</p>
          </div>
          <Link href={''}>
            <a
              role="button"
              className="razzmatazz-to-transparent block mx-auto py-2 px-5 rounded-md mt-10 text-center w-fit"
            >
              Pay Now
            </a>
          </Link>
        </div>
      </div>
    </ViewContainer>
  );
};

export default ReviewBookingView;
