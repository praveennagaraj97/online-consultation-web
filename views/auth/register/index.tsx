import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { MdSendToMobile } from 'react-icons/md';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import useMessageStatusSetter from '../../../components/container/useStatusMessageSetter';
import DatePicker from '../../../components/date-picker';
import CommonInput from '../../../components/shared/inputs/common-input';

import PhoneInput from '../../../components/shared/inputs/phone-input';

const RegisterView: FC = () => {
  const [date, setDate] = useState<Date>();
  const { StatusTag, setter } = useMessageStatusSetter();

  return (
    <AuthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-blue-zodiac py-16 xl:px-24 lg:px-20 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
          <div>
            <Image
              src={'/assets/illustrate/register_bg.svg'}
              alt=""
              layout="responsive"
              width={430}
              height={360}
              unoptimized={true}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/assets/illustrate/register_bg.png"
            />
          </div>
        </div>
        <div className="sm:p-8 px-2">
          <div className="text-center mb-9">
            <h1 className=" text-blue-zodiac text-2xl  ">Register</h1>
            <p className="text-blue-zodiac/70">Create an account to continue</p>
          </div>
          <div className="grid gap-y-3 xl:px-20 lg:8">
            <CommonInput
              className="input-focus w-full common-input px-3 py-2 h-12 mb-2"
              placeholder="Name"
              type="text"
            />
            <CommonInput
              className="input-focus w-full common-input px-3 py-2 h-12 mb-2"
              placeholder="Email"
              type="email"
            />
            <PhoneInput
              type="tel"
              placeholder="Enter mobile number"
              className="input-focus w-full common-input pr-3 py-2 pl-14 h-12 mb-2 drop-shadow-sm "
            />
            <DatePicker
              onChange={setDate}
              className="input-focus w-full common-input px-3 py-2 h-12 "
              btnClass="right-0 -top-1"
              placeholder="Date of birth"
              maxDate={new Date()}
            />
            <input
              className="input-focus w-full common-input px-3 py-2 h-12 mb-2"
              placeholder="Gender"
              type="text"
            />
          </div>

          <span className="block text-center text-blue-zodiac/70 mt-3 text-sm">
            By clicking on below button, you agree to our{' '}
            <span className="text-razzmatazz/70 ml-2 cursor-pointer hover:text-blue-zodiac text-sm smooth-animate">
              Terms & Conditions
            </span>
          </span>
          <div className="text-center [min-height:20px] my-2 text-sm">
            <StatusTag />
          </div>

          <button
            type="submit"
            className="md:w-1/2 w-11/12 min-w-fit px-2 rounded-lg py-2 mx-auto 
              razzmatazz-to-transparent  whitespace-nowrap flex items-center gap-2 justify-center"
            disabled={false}
          >
            {false ? (
              <ImSpinner9 className="animate-spin" />
            ) : (
              <MdSendToMobile />
            )}
            <span>
              {false ? 'Please wait' : 'Send Verification code to Mobile'}
            </span>
          </button>
          <div className="px-6 mt-8 sm:mb-2 mb-10">
            <hr className="opacity-25" />
            <p className="flex justify-center text-razzmatazz/70 pt-6">
              Already have an account?
            </p>
            <Link href={{ pathname: '/auth/login/phone' }}>
              <a
                role="button"
                className="md:w-1/2 w-11/12 rounded-lg py-2 mx-auto block border border-razzmatazz mt-5
             hover:bg-razzmatazz hover:shadow-xl hover:shadow-razzmatazz/40 hover:text-gray-50
              transform transition-all duration-300 hover:scale-105 text-center"
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default RegisterView;
