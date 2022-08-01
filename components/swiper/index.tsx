import { FC, ReactNode, useRef, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

interface SwipeProps {
  /**
   * @description swipers speed
   * @default 1
   */
  swipeSpeed?: number;
  /**
   * @description swipers slides
   */
  children: ReactNode;
  className?: string;
}

const Swiper: FC<SwipeProps> = ({ swipeSpeed = 1, children, className }) => {
  const [startX, setStartX] = useState<number>(0);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  function handlePageScroll(type: 'next' | 'prev') {
    if (sliderRef.current) {
      if (type === 'prev') {
        sliderRef.current!.scrollLeft -= sliderRef.current!.offsetWidth - 200;
      } else {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth - 200;
      }
    }
  }

  return (
    <div className="relative select-none">
      <div
        onMouseDown={(e) => {
          if (!sliderRef.current) {
            return;
          }
          setIsDown(true);
          const startX = e.pageX - sliderRef.current.offsetLeft;
          setStartX(startX);
          const scrollLeft = sliderRef.current.scrollLeft;
          setScrollLeft(scrollLeft);
        }}
        onMouseLeave={(e) => {
          setIsDown(false);
        }}
        onMouseUp={(e) => {
          setIsDown(false);
        }}
        onMouseMove={(e) => {
          if (!isDown || !sliderRef.current) {
            return;
          }
          e.preventDefault();
          const x = e.pageX - sliderRef.current.offsetLeft;

          const walk = (x - startX) * swipeSpeed;
          sliderRef.current.scrollLeft = scrollLeft - walk;
        }}
        className={`flex  scroll-smooth transform transition-transform overflow-x-auto  relative
      sm:snap-none snap-x hide-scrollbar cursor-grabbing  ${className} `}
        ref={sliderRef}
      >
        {children}
      </div>
      <span className="absolute top-0 -left-4 sm:flex hidden items-center h-full  cursor-default">
        <AiFillLeftCircle
          className="cursor-pointer text-razzmatazz h-8 w-8  rounded-full  bg-gray-50 hover:scale-110 transform transition-all ease-out duration-300"
          onClick={() => handlePageScroll('prev')}
        />
      </span>
      <span className="absolute top-0 -right-4 sm:flex hidden items-center h-full  cursor-default">
        <AiFillRightCircle
          className="cursor-pointer text-razzmatazz h-8 w-8  rounded-full bg-gray-50 hover:scale-110 transform transition-all ease-out duration-300"
          onClick={() => handlePageScroll('next')}
        />
      </span>
    </div>
  );
};

export default Swiper;
