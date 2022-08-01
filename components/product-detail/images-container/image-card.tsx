import Image from 'next/image';
import type { FC } from 'react';

interface ImageCardProps {
  imageSrc: string;
}

const ImageCard: FC<ImageCardProps> = ({ imageSrc }) => {
  return (
    <div className="shadow-sm rounded-xl sm:snap-none snap-center cursor-pointer border">
      <div className="xl:w-36 lg:w-32 sm:w-28 w-24 ">
        <div className="w-full border-b">
          <Image
            src={imageSrc}
            layout="responsive"
            width={310}
            height={230}
            draggable={false}
            alt="..."
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
