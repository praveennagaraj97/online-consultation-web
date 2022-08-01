import { FC, Fragment, useState } from 'react';
import AuthTermsAndConditionModal from '../modal/auth-terms-and-conditions';

const TermsAndConditions: FC = () => {
  const [showShowModal, setShowModal] = useState<boolean>(false);

  return (
    <Fragment>
      <small className="block text-center text-blue-zodiac/70 ">
        By clicking on Continue, you agree to our
        <p
          className="text-razzmatazz/70 ml-2 cursor-pointer hover:text-blue-zodiac text-sm"
          onClick={() => setShowModal(true)}
        >
          Terms & Conditions
        </p>
      </small>

      <AuthTermsAndConditionModal
        setShowModal={setShowModal}
        showModal={showShowModal}
        shouldCloseOnBackDrop={false}
      />
    </Fragment>
  );
};

export default TermsAndConditions;
