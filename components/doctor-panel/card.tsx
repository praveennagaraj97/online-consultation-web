import Image from 'next/image';
import { FC } from 'react';

interface DoctorPanelCardProps {
  name: string;
  image: string;
  role: string;
}

const DoctorPanelCard: FC<DoctorPanelCardProps> = ({ image, name, role }) => {
  return (
    <div
      className="shadow-sm rounded-xl sm:snap-none snap-center cursor-pointer border hover:border-razzmatazz hover:-translate-y-0.5
      transform transition-all duration-500
    "
    >
      <div className="xl:w-64 lg:w-60 md:w-56 w-52  pt-4">
        <div className="h-36 w-36 relative  rounded-full overflow-hidden mx-auto">
          <Image
            src={image}
            layout="fill"
            alt="..."
            loading="lazy"
            placeholder="blur"
            blurDataURL={image}
          />
        </div>
      </div>
      <div className="p-2">
        <h6 className="text-center font-semibold text-lg mt-2">{name}</h6>
        <p className="text-sm text-center">{role}</p>
      </div>
    </div>
  );
};

export default DoctorPanelCard;
