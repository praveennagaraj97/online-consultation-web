import Image from 'next/image';
import { FC, Fragment } from 'react';
import { MdOutlineGppGood, MdOutlinePlayCircle } from 'react-icons/md';
import SearchHeader from '../../../components/container/search-header';
import ViewContainer from '../../../components/container/view-container';

const OrderMedicinesThroughPrescriptionView: FC = () => {
  const steps: string[] = [
    'Do not crop any part of the prescription',
    'Do not upload blurred images',
    'Details of Doctor, patient and the clinic visit date must be clearly visible',
    'Supported fle type: jpeg / jpg / png / pdf',
    'Maximum fle size: 5MB',
  ];

  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer ariaDescribedBy="Order Medicines Through prescription section start">
        <h1 className="text-2xl font-semibold my-5">
          Order medicine through prescription
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="lg:col-span-2 shadow-md rounded-lg p-5 h-fit">
            <div className="flex gap-1 items-center mb-2">
              <MdOutlineGppGood className="text-razzmatazz" />
              <p className="font-semibold">
                How to upload a valid prescription
              </p>
            </div>
            {steps.map((step) => {
              return (
                <div key={step} className="flex gap-1 items-center mb-1">
                  <span className="w-6">
                    <MdOutlinePlayCircle size={24} />
                  </span>
                  <p>{step}</p>
                </div>
              );
            })}
          </div>
          <div className="col-span-1 p-4 bg-gray-200 rounded-lg">
            <div>
              <h6 className="font-semibold text-lg mb-3">Prescription Added</h6>
              <div className="w-28 h-28 bg-emerald-200 p-1 rounded-lg mb-4">
                <Image
                  src="/assets/icons/medical-prescription.png"
                  layout="responsive"
                  width={256}
                  height={256}
                  objectFit="cover"
                  alt="..."
                />
              </div>
              <small>
                For ordering just a few medicines from the prescription
              </small>
              <button className="razzmatazz-to-transparent py-2 px-4 rounded-md mx-auto block mt-2 mb-4">
                Add products manually
              </button>
              <small>For ordering all medicines as per the prescription</small>
              <button className="zodiac-to-transparent  py-2 px-4 rounded-md mx-auto block mt-2 mb-4">
                Order all medicine
              </button>
            </div>
          </div>
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default OrderMedicinesThroughPrescriptionView;
