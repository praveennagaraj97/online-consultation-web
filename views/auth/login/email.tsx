import Image from 'next/image';
import { FC, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import AnchorTwist from '../../../components/animations/anchor-tag-twist';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import IsNewUser from '../../../components/auth/is-new-user';
import TermsAndConditions from '../../../components/auth/terms-and-condition';

const LoginWithEmailView: FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false);

  return (
    <AuthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-blue-zodiac py-16 xl:px-24 lg:px-20 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
          <div>
            <Image
              src={'/assets/illustrate/login_bg.svg'}
              alt=""
              layout="responsive"
              width={430}
              height={360}
              unoptimized={true}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/assets/blur-data/login_bg.png"
            />
          </div>
        </div>

        <form
          className="py-4 px-2 xl:px-20 lg:px-10 md:px-14 my-auto  mx-auto w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="text-center mb-9">
            <h1 className=" text-blue-zodiac text-2xl  ">Login</h1>
            <p>Enter email address to continue</p>
          </div>

          <div className="lg:px-6">
            <input
              type="tel"
              placeholder="Enter email address"
              className="common-input w-full px-3 py-2 h-12 drop-shadow-sm"
            />
            <AnchorTwist
              href="/auth/login/phone"
              className="ml-1 underline text-blue-zodiac/80 mt-1"
            >
              <small>Login with mobile number</small>
            </AnchorTwist>
          </div>

          <div className="my-1">
            <TermsAndConditions />
          </div>
          <button
            type="submit"
            className="md:w-1/2 w-11/12 rounded-lg py-2 mt-2
            mx-auto  razzmatazz-to-transparent flex items-center justify-center gap-3
            "
            disabled={isSending}
          >
            {isSending ? <ImSpinner9 className="animate-spin" /> : ''}
            {isSending ? 'Please wait' : 'Continue'}
          </button>
          <IsNewUser />
        </form>
      </div>
    </AuthWrapper>
  );
};

export default LoginWithEmailView;
