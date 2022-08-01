import Image from 'next/image';
import { FC } from 'react';

const DontHavePrescriptionConsultCard: FC = () => {
  return (
    <div
      className="shadow-lg rounded-lg p-4 first-letter:
          md:grid  grid-cols-3 gap-x-5 border border-blue-zodiac border-opacity-30 
        "
    >
      <div className=" w-full p-3 border border-blue-zodiac border-opacity-30 rounded-lg col-span-2 md:mb-0 mb-3">
        <h5 className="text-lg font-semibold">
          {"Don't"} have a prescription?
        </h5>
        <p className="opacity-80">
          Do an instant consultation with our doctors now and upload the
          prescription to continue with this order
        </p>
        <button className="razzmatazz-to-transparent py-2 px-5 rounded-md mt-4">
          Consult a Doctor for this order
        </button>
      </div>
      <div className="col-span-1 md:py-4 pt-4 flex md:flex-col md:gap-8 gap-4 flex-wrap bg-emerald-200 rounded-md">
        <div className="w-28 h-28 mx-auto my-auto">
          <Image
            src="/assets/icons/medical-prescription.png"
            layout="responsive"
            width={256}
            height={256}
            objectFit="cover"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default DontHavePrescriptionConsultCard;
