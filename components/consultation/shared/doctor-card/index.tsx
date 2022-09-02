import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaHospitalUser, FaLanguage } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { GiHospital } from 'react-icons/gi';
import { LoadingPlaceholder, NotFoundImage } from '../../../../constants';
import { DoctorEntity } from '../../../../types/response/consultation.response';
import { formatDateRelatively } from '../../../../utils/date-utils';

interface DoctorCardProps extends DoctorEntity {
  onViewClick: () => void;
}

const DoctorCard: FC<DoctorCardProps> = ({
  name,
  professional_title,
  profile_pic,
  education,
  hospital,
  experience,
  spoken_languages,
  next_available_slot,
  onViewClick,
}) => {
  return (
    <div
      onClick={(ev) => {
        ev.stopPropagation();
        onViewClick();
      }}
      className={`${
        !next_available_slot ? 'opacity-70' : ''
      } shadow-lg rounded-lg py-4 px-6
        md:grid grid-cols-3 smooth-animate hover:shadow-2xl border hover:border-razzmatazz`}
      role="button"
    >
      <div className="sm:flex col-span-2 sm:space-x-5 items-center">
        <div className="sm:w-48 sm:mb-0 mb-4">
          <div className="relative overflow-hidden  w-full  rounded-full border border-razzmatazz">
            <Image
              src={profile_pic?.image_src || NotFoundImage}
              alt="..."
              className="rounded-full "
              layout="responsive"
              width={profile_pic?.width || 80}
              height={profile_pic?.height || 80}
              objectFit="cover"
              loading="lazy"
              blurDataURL={profile_pic?.blur_data_url || LoadingPlaceholder}
            />
          </div>
        </div>
        <div className="h-full flex flex-col pt-2">
          <h2 className="text-lg text-razzmatazz font-semibold">{name}</h2>
          <p className="text-razzmatazz opacity-70">{professional_title}</p>
          <div className="mt-2 grid grid-cols-1 gap-2">
            <div className="flex items-center space-x-2">
              <div className="w-5">
                <FcGraduationCap />
              </div>
              <span>{education}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5">
                <GiHospital />
              </div>
              <span>{hospital.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5">
                <FaHospitalUser />
              </div>
              <span>
                {experience} year<small>(s)</small> of experience
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5">
                <FaLanguage />
              </div>
              <span>
                {spoken_languages
                  ?.map(({ locale_name }) => locale_name)
                  .join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {next_available_slot ? (
        <div className="md:flex justify-end items-center md:mt-0 mt-3 sm:border-t-0 border-t sm:pt-0 pt-3 border-gray-700/50">
          <div>
            <p>Next available:</p>
            <div className="flex items-center gap-2 my-1">
              <AiOutlineFieldTime />
              <span className="">
                {formatDateRelatively(next_available_slot.start)}
              </span>
            </div>
            <Link href={'/consultation/book-appointment/review-booking'}>
              <a
                role="button"
                className="razzmatazz-to-transparent py-2 px-6 rounded-lg mt-3 block"
              >
                Book Appointment
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="md:flex justify-end items-center md:mt-0 mt-3 sm:border-t-0 border-t sm:pt-0 pt-3 border-gray-700/50">
          <div className="flex items-center gap-2 my-1">
            <span>
              Sorry this doctor is not available at the moment, please choose
              other doctor or check back later.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
