import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaHospitalUser, FaLanguage } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { GiHospital } from 'react-icons/gi';
import { DynamicRoutes, Routes } from '../../../routes';
import { slugify } from '../../../utils/helpers';
import AnchorTwist from '../../animations/anchor-tag-twist';

const DoctorCard: FC = () => {
  return (
    <div
      className="shadow-lg rounded-lg border py-4 px-6
        md:grid grid-cols-3"
    >
      <div className="flex col-span-2 gap-5 items-center">
        <div className="w-28">
          <div className="relative overflow-hidden h-28 w-28  rounded-full border border-razzmatazz">
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
          <div className="pt-2 block text-center">
            <AnchorTwist
              href={DynamicRoutes.DoctorProfile(
                slugify('Susuan Duran'),
                'uuiiddidiid'
              )}
            >
              View Profile
            </AnchorTwist>
          </div>
        </div>
        <div className="h-full flex flex-col pt-2">
          <h2 className="text-lg text-razzmatazz font-semibold">
            Dr. Susan Duran
          </h2>
          <p className="text-razzmatazz opacity-70">Consultatnt Physician</p>
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
      </div>

      <div className="md:flex justify-end items-center md:mt-0 mt-5">
        <div>
          <p>Next available:</p>
          <div className="flex items-center gap-2 my-1">
            <AiOutlineFieldTime />
            <span>3:00 PM, Tomorrow</span>
          </div>
          <Link href={Routes.ReviewAppointmentBooking}>
            <a
              role="button"
              className="razzmatazz-to-transparent py-2 px-6 rounded-lg mt-3 block"
            >
              Book Appointment
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
