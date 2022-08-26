import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { ConsultantCardSkeleton } from '../skeletons/consultation/consultant-card';

export interface ConsultantsProps {
  loading: boolean;
  users: { name: string; id: string }[];
  selfCard: ReactNode;
  newCard: ReactNode;
  pathName: string;
}

const Consultants: FC<ConsultantsProps> = ({
  loading,
  users,
  selfCard,
  newCard,
  pathName,
}) => {
  if (loading) {
    return <ConsultantCardSkeleton />;
  }

  return (
    <div className="flex mt-6 flex-wrap">
      <motion.div
        className="m-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {selfCard}
      </motion.div>
      {users?.map((user) => {
        return (
          <motion.div
            className="m-2"
            key={user.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              staggerChildren: 0.5,
              delayChildren: 0.5,
              staggerDirection: 1,
              delay: 0.2,
            }}
          >
            <Link href={{ pathname: pathName, query: { patient: user.id } }}>
              <a>
                <button
                  role="button"
                  className="shadow-md shadow-razzmatazz/40
                hover:bg-razzmatazz hover:text-gray-50
                transform transition-colors duration-300
                border border-razzmatazz lg:px-8 px-4 sm:py-3  py-2 rounded-3xl"
                >
                  {user.name}
                </button>
              </a>
            </Link>
          </motion.div>
        );
      })}
      <motion.div
        className="m-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {newCard}
      </motion.div>
    </div>
  );
};

export default Consultants;
