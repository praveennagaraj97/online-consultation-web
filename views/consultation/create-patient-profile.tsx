import { FC } from 'react';
import CreatePatientProfile from '../../components/consultation/create-patient-profile';
import ViewContainer from '../../components/shared/view-container';

const CreatePatientProfileView: FC = () => {
  return (
    <ViewContainer ariaDescribedBy="create patient profile view start">
      <CreatePatientProfile />
    </ViewContainer>
  );
};

export default CreatePatientProfileView;
