import Link from 'next/link';
import { FC, Fragment, useState } from 'react';
import { AiOutlineSelect } from 'react-icons/ai';
import { RiGalleryUploadLine } from 'react-icons/ri';
import SearchHeader from '../../components/container/search-header';
import ViewContainer from '../../components/container/view-container';
import { Routes } from '../../routes';

const UploadPrescriptionView: FC = () => {
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);

  return (
    <Fragment>
      <SearchHeader />
      <ViewContainer ariaDescribedBy="Upload Prescription Section Start">
        <h1 className="text-2xl font-semibold my-5">Upload Prescription</h1>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6  gap-x-0 gap-y-12 mb-16">
          <div className="h-full">
            <div className="w-full bg-gray-100/70 rounded-lg border border-dashed border-blue-zodiac py-6 px-2 h-full">
              <div className="mx-auto flex justify-center mb-4">
                <RiGalleryUploadLine size={64} />
              </div>
              <span className="text-center block mb-4">
                If you have the prescription saved in your gallery
              </span>
              <button
                className="zodiac-to-transparent px-4 py-2 rounded-lg mx-auto block"
                onClick={() => setShowUploadModal(true)}
              >
                Upload from Gallery
              </button>
            </div>
            <span className="text-xs mt-2 block">
              Accepted File Types : doc, jpeg, png and pof
            </span>
          </div>

          <div className="h-full">
            <div className="w-full bg-gray-100/70 rounded-lg border border-dashed border-blue-zodiac py-6 px-2 h-full">
              <div className="mx-auto flex justify-center mb-4">
                <AiOutlineSelect size={64} />
              </div>
              <span className="text-center block mb-4">
                To upload a prescription from a past consultation with our
                doctors
              </span>
              <Link href={Routes.SelectFromPastConsultation}>
                <a
                  role="button"
                  className="zodiac-to-transparent px-4 py-2 rounded-lg mx-auto block w-fit"
                >
                  Select Past Consultation
                </a>
              </Link>
            </div>
            <span className="text-xs mt-2 block">
              Accepted File Types : doc, jpeg, png and pof
            </span>
          </div>
        </div>

        <div className="bg-gray-300/60 py-6 mt-8 rounded-lg">
          <h4 className="mb-4 block text-center text-xl font-semibold">
            {"Don't"} have a prescription with you?
          </h4>
          <span className="mb-4 block text-center">
            No worries! Get an instant consultation with our doctors
          </span>
          <button className="razzmatazz-to-transparent px-8 py-2 rounded-lg mx-auto block">
            Consult Now
          </button>
        </div>
        <div className="mt-10">
          <span className="text-xs">
            As per the Government regulations, prescriptions are mandatory for
            certain medicines. We will also verify the prescription before
            delivery the medicines to you
          </span>
        </div>
      </ViewContainer>
      {/* <UploadPrescriptionModal
        setShowModal={setShowUploadModal}
        showModal={showUploadModal}
      /> */}
    </Fragment>
  );
};

export default UploadPrescriptionView;
