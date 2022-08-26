import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ConsultationTypeEntity } from '../../types/response/consultation.response';

interface ConsultationTypeCardProps extends ConsultationTypeEntity {}

const ConsultationTypeCard: FC<ConsultationTypeCardProps> = ({
  icon,
  title,
  description,
  price,
  action_name,
  type,
}) => {
  return (
    <div className="border rounded-xl shadow-md px-2 py-6">
      <div className="rounded-full flex justify-center">
        <Image
          src={icon.image_src}
          blurDataURL={icon.blur_data_url}
          width={icon.width}
          height={icon.height}
          layout="fixed"
          placeholder="blur"
          alt="consultation_ico"
          className="rounded-full"
        />
      </div>
      <p className="text-center font-semibold my-4">{title}</p>
      <span className="text-center block whitespace-pre">{description}</span>
      <div className="flex justify-around items-center mt-10">
        <span>₹ {price}</span>
        <Link
          href={
            type === 'Instant'
              ? '/consultation/instant'
              : '/consultation/book-appointment'
          }
        >
          <a
            role="button"
            className="razzmatazz-to-transparent px-4 py-2 rounded-lg"
          >
            {action_name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ConsultationTypeCard;
