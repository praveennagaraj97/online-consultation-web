import ConnectingWindow from '../../../components/consultation/connect/connecting';
import ViewContainer from '../../../components/container/view-container';

const InstantConsultationConnectToDoctorView = () => {
  return (
    <ViewContainer ariaDescribedBy="connecting you to our next Doctor available section Start">
      <ConnectingWindow />
    </ViewContainer>
  );
};

export default InstantConsultationConnectToDoctorView;
