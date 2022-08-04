import { FC, Fragment } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import SearchHeader from '../../components/container/search-header';
import ViewContainer from '../../components/container/view-container';
import OrderSummary from '../../components/order-summary';
import DontHavePrescriptionConsultCard from '../../components/prescription/dont-have-prescription-card';

const AddPrescriptionView: FC = () => {
  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer ariaDescribedBy="Add Prescription Section Start">
        <h1 className="text-2xl font-semibold my-5">Add Prescription</h1>
        <div
          className="shadow-lg rounded-lg p-4 first-letter:
          md:grid  grid-cols-3 gap-x-5
        "
        >
          <div className=" w-full p-3 border border-blue-zodiac border-opacity-30 rounded-lg col-span-2">
            <p>Few of your items require prescription to be uploaded</p>
            <div className="flex gap-4 py-4 flex-wrap">
              <button className="border border-blue-zodiac border-opacity-30 py-2 px-4 rounded-3xl bg-gray-200">
                Dolo 650<small>mg</small> tablet
              </button>
              <button className="border border-blue-zodiac border-opacity-30 py-2 px-4 rounded-3xl bg-gray-200">
                Allegro 650<small>mg</small> tablet
              </button>
              <button className="border border-blue-zodiac border-opacity-30 py-2 px-4 rounded-3xl bg-gray-200">
                Citizine 650<small>mg</small> tablet
              </button>
            </div>
          </div>
          <div className="col-span-1 md:py-4 pt-4 flex md:flex-col md:gap-8 gap-4 flex-wrap">
            <button className=" flex items-center gap-1 zodiac-to-transparent py-2 px-6 rounded-md mx-auto">
              <span className="font-semibold">Upload from Gallery</span>
              <BsChevronRight />
            </button>
            <button className=" flex items-center gap-1 zodiac-to-transparent py-2 px-6 rounded-md mx-auto">
              <span className="font-semibold">Select Past Consultation</span>
              <BsChevronRight />
            </button>
          </div>
        </div>
        <br />
        <DontHavePrescriptionConsultCard />
        <br />
        <div className="lg:w-1/2 md:w-3/4 ml-auto">
          <OrderSummary />
        </div>
      </ViewContainer>
    </Fragment>
  );
};

export default AddPrescriptionView;
