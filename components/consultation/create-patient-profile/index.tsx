import Image from 'next/image';
import { FC } from 'react';

const CreatePatientProfile: FC = () => {
  return (
    <div className="container  mx-auto my-14 ">
      <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-blue-zodiac  w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
            <div>
              <Image
                src={'/assets/illustrate/instant-consult.svg'}
                alt=""
                layout="responsive"
                width={220}
                height={130}
                unoptimized={true}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/assets/blur-data/login_bg.png"
              />
            </div>
          </div>

          <div className="sm:py-12 px-2 py-5">
            <div className="text-center mb-9">
              <h1 className=" text-blue-zodiac text-2xl  ">
                Create Patient Profile
              </h1>
              <p className="text-blue-zodiac/70">Get started now</p>
            </div>
            <div className="grid gap-y-3 xl:px-20 lg:8">
              <input
                className="common-input px-3 py-2 h-12 mb-2"
                placeholder="Name of the patient"
                type="text"
              />
              <input
                className="common-input px-3 py-2 h-12 mb-2"
                placeholder="Age of the patient"
                type="tel"
              />

              <select
                className="common-input px-3 py-2 h-12 mb-2"
                placeholder="Choose relationship with the patient"
              >
                <option value="">Choose relationship with the patient</option>
                <option value="mother">Mother</option>
                <option value="father">Father</option>
                <option value="brother">Brother</option>
                <option value="sister">Sister</option>
              </select>

              <select
                className="common-input px-3 py-2 h-12 mb-2"
                placeholder="Gender of the patient"
              >
                <option value="">Gender of the patient</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>

            <button
              type="submit"
              className="md:w-1/2 w-11/12 min-w-fit px-2 rounded-lg py-2 mx-auto block 
              razzmatazz-to-transparent mt-8 whitespace-nowrap "
            >
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePatientProfile;
