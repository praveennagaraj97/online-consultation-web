import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import AuthWrapper from '../../../components/auth/auth-wrapper';
import { DatePicker } from '../../../components/date-picker';
import PhoneInput from '../../../components/shared/phone-input';
import { Routes } from '../../../routes';
import { RegisterUserDTO } from '../../../types/dto';
import { transformToNumberPipe } from '../../../utils/helpers';

const RegisterView: FC = () => {
  const [formValues, setFormValues] = useState<RegisterUserDTO>({
    'patientprofile.gender': 'M',
    display_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
  });
  const [date, setDate] = useState<Date>();

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
            <input
              className="common-input px-3 py-2 h-12 mb-2"
              placeholder="Name"
              type="text"
            />
            <input
              className="common-input px-3 py-2 h-12 mb-2"
              placeholder="Email"
              type="email"
            />
            <PhoneInput
              type="tel"
              value={formValues.phone_number}
              onChange={(e) =>
                setFormValues((current) => ({
                  ...current,
                  phone_number: transformToNumberPipe(e.target.value),
                }))
              }
              placeholder="Enter mobile number"
              className="common-input px-3 py-2 h-12 mb-2 drop-shadow-sm "
            />
            <DatePicker
              onChange={setDate}
              date={date}
              className="common-input px-3 py-2 h-12  drop-shadow-sm"
              containerClassName="mb-2"
              placeholder="Date of birth"
              maxDate={new Date()}
              // minDate={new Date('January 8, 2012')}
            />
            <input
              className="common-input px-3 py-2 h-12 mb-2"
              placeholder="Gender"
              type="text"
            />
          </div>

          <span className="block text-center text-blue-zodiac/70 mt-3 text-sm">
            By clicking on below button, you agree to our Terms & Conditions
          </span>

          <button
            type="submit"
            className="md:w-1/2 w-11/12 min-w-fit px-2 rounded-lg py-2 mx-auto block razzmatazz-to-transparent mt-4 whitespace-nowrap"
          >
            Send Verification code to Mobile
          </button>
          <div className="px-6 mt-8 sm:mb-2 mb-10">
            <hr className="opacity-25" />
            <p className="flex justify-center text-razzmatazz/70 pt-6">
              Already have an account?
            </p>
            <Link href={Routes.LoginWithPhone}>
              <a
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
