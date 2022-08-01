import { motion } from 'framer-motion';
import { FC, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import Modal from '.';
import useHandleClose from '../../hooks/useHandleClose';
import useWindowSize from '../../hooks/useWindowSize';
import type { ModalProps } from '../../types/globals';

const DelivertAddressModel: FC<ModalProps> = ({ setShowModal, showModal }) => {
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
        overflow-auto  [max-height:90vh] [max-width:100vw] bg-white 
        lg:w-1/2 md:w-2/3 w-full 
        sm:rounded-2xl rounded-t-2xl shadow-2xl  sm:m-auto mt-auto p-4"
      >
        <div className="sm:rounded-xl rounded-t-xl border  border-blue-zodiac relative p-2">
          <div className="flex items-center mb-8 mt-2">
            <h4 className="font-semibold">Add Delivery Address</h4>
            <IoIosClose
              fontSize={24}
              className="absolute right-2 cursor-pointer bg-razzmatazz rounded-full text-gray-50
              border border-razzmatazz
                hover:bg-transparent hover:text-blue-zodiac/70
              "
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="common-input py-3 px-2"
              placeholder="Name"
            />
            <input
              type="text"
              className="common-input py-3 px-2"
              placeholder="Address (House No, Building, Street, Area)"
            />
            <input
              type="text"
              className="common-input py-3 px-2"
              placeholder="Locality / Town"
            />
            <input
              type="text"
              className="common-input py-3 px-2"
              placeholder="Pin Code"
            />
            <input
              type="text"
              className="common-input py-3 px-2"
              placeholder="Mobile"
            />
          </div>

          <button className="razzmatazz-to-transparent px-6 py-2 rounded-lg block mx-auto my-5">
            Add Address
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default DelivertAddressModel;
