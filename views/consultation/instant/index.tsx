import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import ViewContainer from '../../../components/container/view-container';

const InstantConsultationView: FC = () => {
  return (
    <ViewContainer>
      <div className="container  mx-auto my-14">
        <div className="rounded-xl lg:border-t  drop-shadow-xl shadow-xl">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div
              className="bg-blue-zodiac  w-full h-full rounded-xl rounded-r-none  
            lg:flex flex-col justify-center hidden"
            >
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

            <div className="px-2 xl:px-12 lg:px-10 md:px-14 py-10 mx-auto w-full h-full flex flex-col justify-between">
              <div>
                <div className="text-center mb-9">
                  <h1 className=" text-blue-zodiac text-2xl ">
                    Instant Consultation
                  </h1>
                  <p>Get started now</p>
                </div>
                <h2 className="text-lg text-razzmatazz mb-2">
                  Welcome, Ellie Williams
                </h2>
                <p>Please help us know who this consultation is for</p>
              </div>
              <div className="flex gap-4 mt-6 flex-wrap">
                <Link href={''}>
                  <a
                    role="button"
                    className="
                shadow-md shadow-razzmatazz/40
                hover:bg-razzmatazz hover:text-gray-50
                transform transition-colors duration-300
                border border-razzmatazz lg:px-8 px-4 py-3 rounded-3xl"
                  >
                    Ellie Williams
                  </a>
                </Link>
                <Link href={''}>
                  <a
                    role="button"
                    className="
                shadow-md shadow-razzmatazz/40
                hover:bg-razzmatazz hover:text-gray-50
                transform transition-colors duration-300
                border border-razzmatazz lg:px-8 px-4 py-3 rounded-3xl"
                  >
                    Joel Miller
                  </a>
                </Link>
                <Link href={''}>
                  <a
                    role="button"
                    className="
                  shadow-md shadow-razzmatazz/40
                  hover:bg-razzmatazz hover:text-gray-50
                  transform transition-colors duration-300
                  border border-razzmatazz lg:px-8 px-4 py-3 rounded-3xl"
                  >
                    Someone else
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
};

export default InstantConsultationView;
