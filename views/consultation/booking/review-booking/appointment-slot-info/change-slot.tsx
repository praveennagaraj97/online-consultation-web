import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import useSWR from 'swr';
import AppointmentTimeSlotsPicker from '../../../../../components/consultation/appointment-time-slot-picker';
import SlotDatePicker from '../../../../../components/consultation/appointment-time-slot-picker/slot-date-picker';
import ModalContainer from '../../../../../components/container/modal-container';
import Portal from '../../../../../components/modal';
import AppointmentTimeSlotPickerSkeleton from '../../../../../components/skeletons/consultation/appointment-time-slot-picker.skeleton';
import useHandleClose from '../../../../../hooks/useHandleClose';
import useWindowResize from '../../../../../hooks/useWindowResize';
import { publicRoutes } from '../../../../../routes/api-routes';
import { BaseAPiResponse } from '../../../../../types/response';
import { SlotEntity } from '../../../../../types/response/consultation.response';
import { formateDateToISO8601 } from '../../../../../utils/date-utils';

const ChangeAppointmentSlot: FC<{ currentDate: string }> = ({
  currentDate,
}) => {
  const [showSlotChangeModal, setShowSlotChangeModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const closeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedDate(currentDate);
  }, [currentDate]);

  const { query, push } = useRouter();
  const { width } = useWindowResize(true);

  const { isValidating, data } = useSWR<BaseAPiResponse<SlotEntity[]>>(
    query?.['doctor'] && selectedDate && showSlotChangeModal
      ? [
          publicRoutes.AppointmentSlot(query?.['doctor'] as string),
          { date: formateDateToISO8601(selectedDate) },
        ]
      : ''
  );

  useHandleClose(() => {
    setShowSlotChangeModal(false);
  }, closeRef);

  return (
    <div className="font-semibold text-razzmatazz">
      <button
        className="underline-link"
        onClick={(ev) => {
          ev.stopPropagation();
          setShowSlotChangeModal(true);
        }}
      >
        Change Date & Time
      </button>

      <Portal
        showModal={showSlotChangeModal}
        setShowModal={(value) => {
          setShowSlotChangeModal(value);
        }}
      >
        <ModalContainer>
          <div className="md:w-[640px] w-full sm:mt-0 mt-auto">
            <motion.div
              animate={{ y: 0 }}
              initial={width <= 640 ? { y: '100%' } : { y: '-100%' }}
              exit={width <= 640 ? { y: '100%' } : { y: '-100%' }}
              className="relative sm:rounded-xl rounded-t-xl shadow-2xl  m-auto bg-gray-50"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              ref={closeRef}
            >
              <header className="p-2 flex items-center justify-between">
                <h1 className="text-xl">Change appointment time</h1>
                <IoIosClose
                  fontSize={24}
                  className="cursor-pointer bg-razzmatazz rounded-full text-gray-50
              border border-razzmatazz hover:bg-transparent hover:text-blue-zodiac/70 smooth-animate"
                  role="button"
                  onClick={() => {
                    setShowSlotChangeModal(false);
                  }}
                />
              </header>
              {isValidating ? (
                <AppointmentTimeSlotPickerSkeleton />
              ) : (
                <AppointmentTimeSlotsPicker
                  defaultSelectedSlot={(query?.['slot'] as string) || ''}
                  onProceed={(slot) => {
                    setTimeout(() => {
                      push({ query: { ...query, slot } }, undefined, {
                        scroll: false,
                      });
                    }, 500);
                    setShowSlotChangeModal(false);
                  }}
                  slots={data?.result || []}
                  datePicker={
                    <SlotDatePicker
                      selectedDate={selectedDate}
                      onChange={(value) => {
                        setSelectedDate(value);
                      }}
                      minDate={new Date()}
                    />
                  }
                />
              )}
            </motion.div>
          </div>
        </ModalContainer>
      </Portal>
    </div>
  );
};

export default ChangeAppointmentSlot;
