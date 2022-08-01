import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import useIsTouchDevice from '../../hooks/useIsTouchDevice';

interface ProductCardProps {
  productName: string;
  imageSrc: string;
}

const ProductCard: FC<ProductCardProps> = ({ productName, imageSrc }) => {
  const { isTouchDevice } = useIsTouchDevice();
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);

  return (
    <div
      title={productName}
      draggable={false}
      className="shadow-sm rounded-xl sm:snap-none snap-center cursor-pointer border 
      hover:border-razzmatazz transform transition-all duration-500
      hover:shadow-md hover:-translate-y-1 
      "
      onMouseOver={() => !isTouchDevice && setShowAddToCart(true)}
      onMouseLeave={() => !isTouchDevice && setShowAddToCart(false)}
    >
      <Link href={'/product/dolo/ddwd-fea-ew-gge'}>
        <a>
          <div className="xl:w-48 lg:w-44 sm:w-40 w-44 ">
            <div className="w-full border-b">
              <Image
                src={imageSrc}
                layout="responsive"
                width={412}
                height={412}
                draggable={false}
                alt="..."
                className="rounded-xl"
              />
            </div>
            <div className="p-2">
              <h6 className="text-midnight-blue text-lg font-semibold cut-text-1">
                {productName}
              </h6>
              <div className="flex items-center justify-between h-7">
                <div>
                  <small className="line-through decoration-red-400 mr-2">
                    ₹ 149
                  </small>
                  <small className="font-semibold">₹ 143</small>
                </div>
                <AnimatePresence exitBeforeEnter>
                  {(showAddToCart || isTouchDevice) && (
                    <motion.small
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      role="button"
                      className="razzmatazz-to-transparent px-1.5 py-0.5 rounded-md"
                    >
                      Add to cart
                    </motion.small>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
