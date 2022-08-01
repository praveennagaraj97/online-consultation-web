import { FC, Fragment, ReactNode, useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import useWindowResize from '../../hooks/useWindowResize';

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
  const startXRef = useRef<number>(0);
  const isDown = useRef<boolean>(false);
  const scrollLeftRef = useRef<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowResize(true);

  function handlePageScroll(type: 'next' | 'prev') {
    if (sliderRef.current) {
      if (type === 'prev') {
        sliderRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
          left: (sliderRef.current!.scrollLeft -=
            sliderRef.current!.offsetWidth - 200),
        });
      } else {
        sliderRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
          left: (sliderRef.current.scrollLeft +=
            sliderRef.current.offsetWidth - 200),
        });
      }
      sliderRef.current?.classList.remove('scroll-smooth');
    }
  }

  return (
    <div className="relative select-none">
      <div
        onMouseDown={(e) => {
          if (!sliderRef.current) {
            return;
          }
          isDown.current = true;
          const startX = e.pageX - sliderRef.current.offsetLeft;
          startXRef.current = startX;
          const scrollLeft = sliderRef.current.scrollLeft;
          scrollLeftRef.current = scrollLeft;
        }}
        onMouseLeave={() => {
          isDown.current = false;
        }}
        onMouseUp={() => {
          isDown.current = false;
        }}
        onMouseMove={(e) => {
          if (!isDown.current || !sliderRef.current) {
            return;
          }

          e.preventDefault();
          const x = e.pageX - sliderRef.current.offsetLeft;

          const walk = (x - startXRef.current) * 1;
          sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
        }}
        className={`flex overflow-x-auto hide-scrollbar 
        will-change-transform transition-all duration-300 cursor-grabbing relative ${className} 
        sm:snap-none snap-x`}
        ref={sliderRef}
      >
        {children}
      </div>
      {width > 640 &&
      sliderRef.current &&
      sliderRef.current.scrollWidth > sliderRef.current.clientWidth ? (
        <Fragment>
          <span className="absolute top-0 -left-4 flex items-center h-full  cursor-default">
            <AiFillLeftCircle
              className="cursor-pointer text-razzmatazz h-8 w-8  rounded-full  bg-gray-50 hover:scale-110 transform transition-all ease-out duration-300"
              onClick={() => handlePageScroll('prev')}
              onMouseDown={() => {
                sliderRef.current?.classList.add('scroll-smooth');
              }}
            />
          </span>
          <span className="absolute top-0 -right-4 flex items-center h-full  cursor-default ">
            <AiFillRightCircle
              className="cursor-pointer text-razzmatazz h-8 w-8  rounded-full bg-gray-50 hover:scale-110 transform transition-all ease-out duration-300"
              onClick={() => handlePageScroll('next')}
              onMouseDown={() => {
                sliderRef.current?.classList.add('scroll-smooth');
              }}
            />
          </span>
        </Fragment>
      ) : (
        ''
      )}
      <div className="scroll-smooth hidden" />
    </div>
  );
};

export default Swiper;
