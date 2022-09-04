import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaUserNurse } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineFolderSpecial, MdOutlineRateReview } from 'react-icons/md';

const ConsultationBookingStepper: FC<{ step: number }> = ({ step }) => {
  const { query } = useRouter();

  return (
    <div className="xl:container mx-auto xl:px-4 sm:px-2  px-4 ">
      <div className="mt-6">
        <div className="flex items-center sm:px-6 px-2">
          <div className="flex items-center text-pink-600 relative">
            <Link href={'/consultation/book-appointment/'}>
              <a>
                <button
                  className={`${
                    step >= 0
                      ? 'bg-pink-600 text-white'
                      : 'text-black hover:bg-pink-600 hover:text-white'
                  } rounded-full transition duration-500 ease-in-out sm:h-12 sm:w-12 h-10 w-10 py-3 border-2 border-pink-600`}
                >
                  <FiUserPlus
                    size={24}
                    className="sm:w-6 sm:h-6 h-4 w-4 mx-auto pb-1"
                  />
                </button>
              </a>
            </Link>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out will-change-transform `}
          />
          <div className="flex items-center text-pink-600 relative">
            <Link
              href={{
                pathname: '/consultation/book-appointment/choose-speciality/',
                query,
              }}
            >
              <button disabled={step < 1}>
                <div
                  className={`${
                    step >= 1
                      ? 'bg-pink-600 text-white'
                      : 'text-black hover:bg-pink-600 hover:text-white'
                  } rounded-full transition duration-500 ease-in-out sm:h-12 sm:w-12 h-10 w-10 py-3 border-2 border-pink-600`}
                >
                  <MdOutlineFolderSpecial
                    size={24}
                    className="sm:w-6 sm:h-6 h-4 w-4 mx-auto pb-1"
                  />
                </div>
              </button>
            </Link>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out will-change-transform`}
          />

          <div className="flex items-center text-pink-600 relative">
            <Link
              href={{
                pathname: '/consultation/book-appointment/choose-doctor/',
                query,
              }}
              passHref
            >
              <button disabled={step < 2}>
                <div
                  className={`${
                    step >= 2
                      ? 'bg-pink-600 text-white'
                      : 'text-black hover:bg-pink-600 hover:text-white'
                  } rounded-full transition duration-500 ease-in-out sm:h-12 sm:w-12 h-10 w-10 py-3 border-2 border-pink-600`}
                >
                  <FaUserNurse
                    size={24}
                    className="sm:w-6 sm:h-6 h-4 w-4 mx-auto pb-1"
                  />
                </div>
              </button>
            </Link>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out will-change-transform`}
          />

          <div className="flex items-center text-pink-600 relative">
            <Link
              href={{
                pathname: '/consultation/book-appointment/choose-slot/',
                query,
              }}
              passHref
            >
              <button disabled={step < 3}>
                <div
                  className={`${
                    step >= 3
                      ? 'bg-pink-600 text-white'
                      : 'text-black hover:bg-pink-600 hover:text-white'
                  } rounded-full transition duration-500 ease-in-out sm:h-12 sm:w-12 h-10 w-10 py-3 border-2 border-pink-600`}
                >
                  <AiOutlineSchedule
                    size={24}
                    className="sm:w-6 sm:h-6 h-4 w-4 mx-auto pb-1"
                  />
                </div>
              </button>
            </Link>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out will-change-transform`}
          />
          <div className="flex items-center text-pink-600 relative">
            <button
              disabled={step < 4}
              className={` rounded-full transition duration-500 ease-in-out sm:h-12 sm:w-12 h-10 w-10 py-3 border-2 border-pink-600`}
            >
              <MdOutlineRateReview
                size={24}
                className="sm:w-6 sm:h-6 h-4 w-4 mx-auto pb-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBookingStepper;
