import { AnimatePresence, motion, Variant } from 'framer-motion';
import Image from 'next/image';
import { FC, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Carousel: FC<{ images: string[] }> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);

  const variants: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  } = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  function paginatePrev() {
    if (activeSlide === images.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  }

  function paginateNext() {
    if (activeSlide === 0) {
      setActiveSlide(images.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  }

  function touchPaginate(clientX: number) {
    if (clientX === startX) {
      return;
    }

    if (clientX < startX) {
      paginatePrev();
    } else {
      paginateNext();
    }
  }

  return (
    <div
      onMouseDown={(e) => {
        e.preventDefault();
        setStartX(e.pageX);
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        touchPaginate(e.pageX);
      }}
      onTouchStart={(e) => {
        setStartX(e.touches[0]?.clientX);
      }}
      onTouchEnd={(e) => {
        touchPaginate(e.changedTouches[0]?.clientX);
      }}
    >
      <div
        aria-describedby="carousel slider displaying get med go's sponsored ads."
        className="my-4 relative"
      >
        {images.map((src, index) => {
          if (index !== activeSlide) {
            return null;
          }
          return (
            <AnimatePresence key={index} custom={index} exitBeforeEnter>
              <motion.div
                whileTap={{ cursor: 'grabbing' }}
                custom={index}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                key={index}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="w-full relative  lg:h-72 md:h-64 sm:h-60 h-52 rounded-xl overflow-hidden"
              >
                <Image src={src} alt="" layout="fill" objectFit="cover" />
              </motion.div>
            </AnimatePresence>
          );
        })}

        <span className="absolute top-0 left-0 flex items-center h-full px-3 cursor-default">
          <GrPrevious className="cursor-pointer" onClick={paginateNext} />
        </span>
        <span className="absolute top-0 right-0 flex items-center h-full px-3 cursor-default">
          <GrNext className="cursor-pointer" onClick={paginatePrev} />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
