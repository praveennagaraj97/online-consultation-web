import Image from 'next/image';
import type { FC } from 'react';
import type { ImageType } from '../../../types/response';

interface SpecialityCardProps {
  title: string;
  image: ImageType;
  id: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SpecialityCard: FC<SpecialityCardProps> = ({
  id,
  image,
  title,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`
      border hover:border-blue-zodiac hover:shadow-md hover:-translate-y-0.5
      p-2 rounded-xl transform transition-all duration-500 cursor-pointer
      ${
        isSelected
          ? 'border-blue-zodiac shadow-md -translate-y-0.5 scale-105'
          : ''
      } 
    `}
    >
      <Image
        className="rounded-xl"
        src={image.image_src}
        placeholder="blur"
        blurDataURL={image.blur_data_url}
        alt="..."
        layout="responsive"
        width={image.width}
        height={image.height}
      />

      <p className="font-semibold text-center mt-3">{title}</p>
    </div>
  );
};

export default SpecialityCard;
