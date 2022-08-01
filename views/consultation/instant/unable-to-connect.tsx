import UnableToConnectWindow from '../../../components/consultation/connect/unable-to-connect';
import ViewContainer from '../../../components/shared/view-container';

const UnableToConnectViewView = () => {
  return (
    <ViewContainer ariaDescribedBy="Sorry Unable to connect to any doctor">
      <UnableToConnectWindow />
    </ViewContainer>
  );
};

export default UnableToConnectViewView;
