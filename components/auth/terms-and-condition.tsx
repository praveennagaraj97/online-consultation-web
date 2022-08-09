import { FC, Fragment } from 'react';

const TermsAndConditions: FC = () => {
  return (
    <Fragment>
      <small className="block text-center text-blue-zodiac/70 ">
        By clicking on Continue, you agree to our
        <a
          target="_blank"
          href="/help/"
          className="text-razzmatazz/70 ml-2 cursor-pointer hover:text-blue-zodiac text-sm"
        >
          Terms & Conditions
        </a>
      </small>
    </Fragment>
  );
};

export default TermsAndConditions;
