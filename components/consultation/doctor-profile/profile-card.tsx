import Image from 'next/image';
import { FC, Fragment } from 'react';
import { FaHospitalUser, FaLanguage } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { GiHospital } from 'react-icons/gi';
import { IoIosHeartEmpty } from 'react-icons/io';

const DoctorProfileCard: FC = () => {
  return (
    <Fragment>
      <div className="shadow-lg px-3 py-6 rounded-lg">
        <div className="rounded-lg flex  items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="relative overflow-hidden h-36 w-36  rounded-full border border-razzmatazz">
              <Image
                src={
                  'https://images.unsplash.com/photo-1610013597524-6fe8bf4a4a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                }
                alt="..."
                className="rounded-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="text-2xl text-razzmatazz">Dr. Susan Duran</h3>
              <p className="text-razzmatazz">Consultant Physician</p>
              <IoIosHeartEmpty
                size={24}
                className="hover:scale-105 transform transition-all duration-500
            cursor-pointer hover:text-razzmatazz sm:hidden block mt-2
            "
              />
            </div>
          </div>
          <IoIosHeartEmpty
            size={32}
            className="hover:scale-105 transform transition-all duration-500
            cursor-pointer hover:text-razzmatazz sm:block hidden
            "
          />
        </div>
        <hr className="my-5 opacity-30" />
        <div className="mt-2 grid lg:grid-cols-2 grid-cols-1 gap-x-4 ">
          <div className="flex items-center gap-1 my-1">
            <div className="w-5">
              <FcGraduationCap />
            </div>
            <span>MBBS, MD (Medicine)</span>
          </div>
          <div className="flex items-center gap-1 my-1">
            <div className="w-5">
              <GiHospital />
            </div>
            <span>Manipal Hospital, Hebbal</span>
          </div>
          <div className="flex items-center gap-1 my-1">
            <div className="w-5">
              <FaHospitalUser />
            </div>
            <span>14 yrs of experience</span>
          </div>
          <div className="flex items-center gap-1 my-1">
            <div className="w-5">
              <FaLanguage />
            </div>
            <span>English, Malayalam, Hindi</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorProfileCard;
