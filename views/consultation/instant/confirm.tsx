import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BsShieldLock } from 'react-icons/bs';
import { FaFilePrescription } from 'react-icons/fa';
import { GiVideoConference } from 'react-icons/gi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import ViewContainer from '../../../components/container/view-container';

const InstantConsultationConfirmView: FC = () => {
  return (
    <ViewContainer>
      <div className="container  mx-auto my-14">
        <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-blue-zodiac  w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
              <div>
                <Image
                  src={'/assets/illustrate/instant-consult.svg'}
                  alt=""
                  layout="responsive"
                  width={220}
                  height={130}
                  unoptimized={true}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/blur-data/login_bg.png"
                />
              </div>
            </div>

            <div className="px-4 xl:px-12 lg:px-10 md:px-14 py-10 mx-auto w-full h-full flex flex-col justify-between">
              <div>
                <div>
                  <div className="text-center mb-6">
                    <h1 className=" text-blue-zodiac text-2xl mb-1 ">
                      Instant Consultation
                    </h1>
                    <p>Make Payment and get started.</p>
                  </div>
                  <h2 className="text-lg text-razzmatazz mb-2">
                    Video consultation with a General Physician
                  </h2>
                  <div className="text-2xl flex gap-3">
                    <p>₹ 100</p>
                    <p className="line-through decoration-red-400">₹ 300</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <GiVideoConference />
                    <span>Instant video consultation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaFilePrescription />
                    <span>Instant digital prescription</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsShieldLock />
                    <span>Confidentiality maintained</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineDeliveryDining />
                    <span>Medicines delivered home</span>
                  </div>
                </div>
                <p className="font-semibold mt-4">
                  Got a discount coupon?{' '}
                  <span className="text-razzmatazz">Apply</span>
                </p>
              </div>

              <Link href={''}>
                <a
                  role="button"
                  className="razzmatazz-to-transparent block mx-auto py-2 px-5 rounded-md mt-10"
                >
                  Pay Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
};

export default InstantConsultationConfirmView;
