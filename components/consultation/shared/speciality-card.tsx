import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

interface SpecialityCardProps {
  title: string;
  image: string;
  id: number;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<number | undefined>>;
}

const SpecialityCard: FC<SpecialityCardProps> = ({
  id,
  image,
  title,
  setIsSelected,
  isSelected,
}) => {
  return (
    <div
      onClick={() => setIsSelected(id)}
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
        src={image}
        placeholder="blur"
        blurDataURL={image}
        alt="..."
        layout="responsive"
        width={640}
        height={640}
      />

      <p className="font-semibold text-center mt-3">{title}</p>
    </div>
  );
};

export default SpecialityCard;
