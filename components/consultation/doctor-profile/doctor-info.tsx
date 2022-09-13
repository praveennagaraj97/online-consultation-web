import Image from 'next/image';
import { FC } from 'react';
import { FaHospitalUser, FaLanguage } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { GiHospital } from 'react-icons/gi';
import { LoadingPlaceholder, NotFoundImage } from '../../../constants';
import type { DoctorEntity } from '../../../types/response/consultation.response';

const DoctorInfo: FC<{ data?: DoctorEntity }> = ({ data }) => {
  return (
    <div className="shadow-lg px-3 py-4 rounded-lg border">
      <div className="rounded-lg flex  items-center justify-between">
        <div className="sm:flex gap-4 items-center sm:w-auto w-full">
          <div className="relative overflow-hidden h-36 w-36 sm:mx-0 mx-auto rounded-full border border-razzmatazz">
            <Image
              src={data?.profile_pic?.image_src || NotFoundImage}
              blurDataURL={
                data?.profile_pic?.blur_data_url || LoadingPlaceholder
              }
              loading="lazy"
              placeholder="blur"
              alt="..."
              className="rounded-full "
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="sm:mt-0 mt-4">
            <h3 className="text-2xl text-razzmatazz">{data?.name}</h3>
            <p className="text-razzmatazz">{data?.professional_title}</p>
          </div>
        </div>
      </div>
      <hr className="sm:my-5 my-2 opacity-50" />
      <div className="mt-2 grid lg:grid-cols-2 grid-cols-1 gap-x-4 ">
        <div className="flex items-center gap-1 my-1">
          <div className="w-5">
            <FcGraduationCap />
          </div>
          <span>{data?.education}</span>
        </div>
        <div className="flex items-center gap-1 my-1">
          <div className="w-5">
            <GiHospital />
          </div>
          <span>{data?.hospital.name}</span>
        </div>
        <div className="flex items-center gap-1 my-1">
          <div className="w-5">
            <FaHospitalUser />
          </div>
          <span>
            {data?.experience} year<small>(s)</small> of experience
          </span>
        </div>
        <div className="flex items-center gap-1 my-1">
          <div className="w-5">
            <FaLanguage />
          </div>
          <span>
            {data?.spoken_languages
              ?.map(({ locale_name }) => locale_name)
              .join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
