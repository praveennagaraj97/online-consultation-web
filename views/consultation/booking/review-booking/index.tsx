import { useRouter } from 'next/router';
import { FC } from 'react';
import ViewContainer from '../../../../components/container/view-container';
import AppointmentSlotInfo from './appointment-slot-info';
import SelectedDoctorDetails from './doctor-info';
import OrderSummary from './order-summary';
import PatientProfiles from './patient-profiles';

const ReviewBookingView: FC = () => {
  const { query } = useRouter();

  return (
    <ViewContainer ariaDescribedBy="Profile view of doctor">
      <h1 className="text-2xl font-semibold my-7">Review Booking</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="col-span-1 grid grid-cols-1 gap-6">
          <SelectedDoctorDetails />
          <AppointmentSlotInfo />
          <PatientProfiles />
        </div>

        <OrderSummary />
      </div>
    </ViewContainer>
  );
};

export default ReviewBookingView;
