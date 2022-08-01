import { motion } from 'framer-motion';
import { FC, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import useHandleClose from '../../../hooks/useHandleClose';
import useWindowSize from '../../../hooks/useWindowSize';
import { ModalProps } from '../../../types/globals';
import { DatePicker } from '../../date-picker';
import Modal from '../../modal';

const DoctorFilterModal: FC<ModalProps> = ({ setShowModal, showModal }) => {
  const closeRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const [date, setDate] = useState<Date>();

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
            <h4 className="font-semibold text-xl">Appy Filter</h4>
            <IoIosClose
              fontSize={24}
              className="absolute right-2 cursor-pointer bg-razzmatazz rounded-full text-gray-50
              border border-razzmatazz
                hover:bg-transparent hover:text-blue-zodiac/70
              "
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="h-full flex flex-col justify-between gap-1">
              <label
                htmlFor="availability"
                className="text-razzmatazz font-semibold"
              >
                By availability / slot
              </label>
              <DatePicker
                onChange={setDate}
                date={date}
                className="common-input px-3 py-2 h-12  drop-shadow-sm"
                placeholder="Date of birth"
                // maxDate={new Date()}
                minDate={new Date()}
                iconClassName="text-razzmatazz/80"
              />
            </div>
            <div className="h-full flex flex-col justify-between gap-1">
              <label
                htmlFor="language"
                className="text-razzmatazz font-semibold"
              >
                Time Slots
              </label>
              <select className="common-input px-3 py-2 h-12  drop-shadow-sm ">
                <option value="English">Choose time slots</option>
                <option value="English">1PM to 2PM</option>
                <option value="Hindi">4PM to 5PM</option>
                <option value="Malayalam">7PM to 8PM</option>
              </select>
            </div>
            <div className="h-full flex flex-col justify-between gap-1">
              <label
                htmlFor="language"
                className="text-razzmatazz font-semibold"
              >
                By language known
              </label>
              <select className="common-input px-3 py-2 h-12  drop-shadow-sm ">
                <option value="English">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </div>
            <div className="h-full flex flex-col justify-between gap-1">
              <label htmlFor="exp" className="text-razzmatazz font-semibold">
                By years of experience
              </label>
              <select className="common-input px-3 py-2 h-12  drop-shadow-sm ">
                <option value="English">Select experience</option>
                <option value="English">2+ Years</option>
                <option value="Hindi">5+ Years</option>
                <option value="Malayalam">10+ Years</option>
              </select>
            </div>
          </div>

          <button className="razzmatazz-to-transparent px-6 py-2 rounded-lg block mx-auto my-5">
            Add Filter
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default DoctorFilterModal;
