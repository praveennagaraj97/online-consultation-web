import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import Modal from '..';
import useHandleClose from '../../../hooks/useHandleClose';
import useWindowSize from '../../../hooks/useWindowSize';
import { ModalProps } from '../../../types/globals';
import DropZone from '../../shared/dropzone';

const UploadPrescriptionModal: FC<ModalProps> = ({
  setShowModal,
  showModal,
}) => {
  const closeRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useHandleClose(() => {
    if (showModal) {
      setShowModal(false);
    }
  }, closeRef);

  return (
    <Modal setShowModal={setShowModal} showModal={showModal}>
      <motion.div
        animate={{ y: 0 }}
        initial={width <= 640 ? { y: '100%' } : { y: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        ref={closeRef}
        className=" 
        overflow-auto  [max-height:100vh] [max-width:100vw] bg-white 
        lg:w-1/2 md:w-2/3 w-full 
        sm:rounded-2xl shadow-2xl  sm:m-auto mt-auto p-4 pt-2"
      >
        <IoIosClose
          onClick={() => setShowModal(false)}
          size={38}
          className="block ml-auto "
          role="button"
        />
        <DropZone className=" mb-5 mx-3 rounded-md pb-4 cursor-pointer">
          <div className="h-52 w-52 mx-auto">
            <Image
              alt="..."
              src="/assets/icons/upload-icon.png"
              layout="responsive"
              width={256}
              height={256}
              className="opacity-20"
            />
          </div>
          <h3 className="text-lg opacity-80 text-center">
            Drop your images here, or{' '}
          </h3>
          <button className="bg-green-600 text-gray-50 font-semibold text-lg mx-auto block py-2 px-8 rounded-3xl mt-3">
            Browse
          </button>
        </DropZone>
      </motion.div>
    </Modal>
  );
};

export default UploadPrescriptionModal;
