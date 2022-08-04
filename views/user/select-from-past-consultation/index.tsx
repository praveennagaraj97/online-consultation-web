import Link from 'next/link';
import { FC, Fragment } from 'react';
import SearchHeader from '../../../components/container/search-header';
import ViewContainer from '../../../components/container/view-container';
import PrescriptionCard from '../../../components/prescription/prescription-card';
import BackButton from '../../../components/shared/back-btn';
import { Routes } from '../../../routes';

const SelectFromPastConsultationView: FC = () => {
  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer>
        <Link href={Routes.UploadPrescription}>
          <a className="my-4 block w-fit">
            <BackButton />
          </a>
        </Link>
        <h1 className="text-xl font-semibold">Order from Past Consultation</h1>
        <p>Select the prescription from which the order needs to be placed </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 mt-5">
          <PrescriptionCard />
          <PrescriptionCard />
          <PrescriptionCard />
          <PrescriptionCard />
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default SelectFromPastConsultationView;
