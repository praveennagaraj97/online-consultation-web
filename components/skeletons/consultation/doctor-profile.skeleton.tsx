import { FC } from 'react';

const DoctorProfileSkeleton: FC = () => {
  return (
    <div>
      <div className="p-2  overflow-y-auto h-full max-h-[90vh] pb-32">
        <div className="w-28 h-28 rounded-full skeleton mx-auto my-4" />

        <div className="grid grid-cols-1 gap-4">
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Name</strong>
            <div className="skeleton w-10/12 h-5 rounded-sm mt-0.5" />
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Professional title</strong>
            <div className="skeleton w-10/12 h-5 rounded-sm mt-0.5" />
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Speaks</strong>
            <div className="skeleton w-10/12 h-5 rounded-sm mt-0.5" />
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Experience</strong>
            <div className="skeleton w-10/12 h-5 rounded-sm mt-0.5" />
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Education</strong>
            <div className="skeleton w-10/12 h-5 rounded-sm mt-0.5" />
          </div>
          <div className="border rounded-md shadow-md py-1 px-2">
            <strong>Works At</strong>
            <div className="skeleton w-10/12 h-5 rounded-sm mt-0.5" />
            <div className="skeleton w-full h-2 rounded-sm mt-0.5" />
            <div className="skeleton w-full h-2 rounded-sm mt-0.5" />
            <div className="skeleton w-10/12 h-2 rounded-sm mt-0.5" />
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 sm:bottom-5 bottom-2">
        <div className="w-full sm:pt-0 pt-3 border-gray-700/50">
          <button
            role="button"
            disabled
            className="bg-razzmatazz py-2 px-6 rounded-lg mt-3 block w-full text-center"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileSkeleton;
