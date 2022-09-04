import Image from 'next/image';
import { FC, Fragment } from 'react';
import { LoadingPlaceholder, NotFoundImage } from '../../../constants';
import { DoctorEntity } from '../../../types/response/consultation.response';

interface DoctorProfileModalProps {
  data: DoctorEntity;
  onBookAppointmentClick: () => void;
}

const DoctorProfileModal: FC<DoctorProfileModalProps> = ({
  data,
  onBookAppointmentClick,
}) => {
  return (
    <Fragment>
      <div className="p-2  overflow-y-auto h-full max-h-[90vh] pb-32">
        <div className="w-28 mx-auto my-4">
          <Image
            src={data?.profile_pic?.image_src || NotFoundImage}
            alt="..."
            className="rounded-full"
            layout="responsive"
            width={data?.profile_pic?.width || 176}
            height={data?.profile_pic?.height || 176}
            objectFit="cover"
            loading="lazy"
            blurDataURL={data?.profile_pic?.blur_data_url || LoadingPlaceholder}
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Name</strong>
            <p>{data.name}</p>
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Professional title</strong>
            <p>{data.professional_title}</p>
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Speaks</strong>
            <p>
              {data.spoken_languages
                ?.map(({ name }) => name)
                .join(', ')
                .replace(/,(?=[^,]*$)/, ' and')}
            </p>
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Experience</strong>
            <p>
              {data.experience}{' '}
              {`${data.experience || 0 > 1 ? 'Years' : 'Year'}`}
            </p>
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Education</strong>
            <p>{data.education}</p>
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Works At</strong>
            <p>{data.hospital.name}</p>
            <p className="text-sm opacity-70">{data.hospital.address}</p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 sm:bottom-5 bottom-2">
        {data?.next_available_slot ? (
          <div className="w-full sm:pt-0 pt-3 border-gray-700/50">
            <button
              onClick={onBookAppointmentClick}
              role="button"
              className="razzmatazz-to-white py-2 px-6 rounded-lg mt-3 block w-full text-center"
            >
              Book Appointment
            </button>
          </div>
        ) : (
          <div className="w-full sm:pt-0 pt-3 border-gray-700/50">
            <button
              role="button"
              disabled
              className="razzmatazz-to-white py-2 px-6 rounded-lg mt-3 block w-full text-center"
            >
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DoctorProfileModal;
