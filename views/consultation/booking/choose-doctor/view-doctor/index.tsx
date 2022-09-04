import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import useSWR from 'swr';
import DoctorProfileModal from '../../../../../components/consultation/doctor-profile/profile-modal';
import Portal from '../../../../../components/modal';
import DoctorProfileSkeleton from '../../../../../components/skeletons/consultation/doctor-profile.skeleton';
import useHandleClose from '../../../../../hooks/useHandleClose';
import useWindowResize from '../../../../../hooks/useWindowResize';
import { publicRoutes } from '../../../../../routes/api-routes';
import type { ModalProps } from '../../../../../types/globals';
import type { BaseAPiResponse } from '../../../../../types/response';
import type { DoctorEntity } from '../../../../../types/response/consultation.response';

interface ViewDoctorProfileProps extends ModalProps {
  id: string;
}

const ViewDoctorProfile: FC<ViewDoctorProfileProps> = ({
  id,
  showModal,
  setShowModal = () => {},
}) => {
  const { data, isValidating } = useSWR<BaseAPiResponse<DoctorEntity>>(
    id ? publicRoutes.Doctor + `/${id}` : ''
  );

  const { query, push } = useRouter();

  const viewRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowResize(true);

  useHandleClose(() => {
    setShowModal(false);
  }, viewRef);

  return (
    <Portal showModal={showModal}>
      <motion.div
        ref={viewRef}
        initial={width > 640 ? { x: '200%' } : { y: '100%' }}
        animate={width > 640 ? { x: 0 } : { y: 0 }}
        exit={width > 640 ? { x: '200%' } : { y: '100%' }}
        transition={{ duration: 0.5, damping: '0' }}
        className="sm:w-96 w-full sm:top-0  right-0 bottom-0 bg-gray-50 rounded-l-xl shadow-2xl fixed p-2 border z-50"
      >
        <div className="relative sm:h-screen">
          <header className="bg-gray-100 shadow-lg rounded-b-lg border-b flex items-center justify-between p-2">
            <h2 className="text-xl font-semibold">Doctor Profile</h2>
            <IoIosClose
              fontSize={24}
              className="cursor-pointer bg-razzmatazz rounded-full text-gray-50
            border border-razzmatazz hover:bg-transparent hover:text-blue-zodiac/70 smooth-animate"
              role="button"
              onClick={() => {
                setShowModal(false);
              }}
            />
          </header>
          {isValidating || !data?.result ? (
            <DoctorProfileSkeleton />
          ) : (
            <DoctorProfileModal
              data={data?.result}
              onBookAppointmentClick={() => {
                push({
                  pathname: '/consultation/book-appointment/choose-slot',
                  query: { ...query, doctor: data.result.id },
                });
              }}
            />
          )}
        </div>
      </motion.div>
    </Portal>
  );
};

export default ViewDoctorProfile;
