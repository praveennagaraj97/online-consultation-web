import { FC } from 'react';

const AppointmentTimeSlotPickerSkeleton: FC = () => {
  return (
    <div className="shadow-lg px-3 py-8 rounded-lg border">
      <div className="flex items-center gap-4 justify-center text-razzmatazz font-semibold mt-3 mb-6">
        <div className="skeleton w-4 h-4 rounded-md" />
        <div className="flex items-center gap-2">
          <div className="skeleton w-4 h-4 rounded-md" />
          <div className="skeleton w-24 h-4 rounded-md" />
        </div>
        <div className="skeleton w-4 h-4 rounded-md" />
      </div>

      <div className="mb-3">
        <div
          className={`grid grid-cols-6 place-content-between items-center px-2 py-5 border-b`}
        >
          <div className="skeleton w-24 h-5 rounded-md col-span-2" />
          <div className="skeleton w-full h-5 rounded-md col-span-3" />
          <div className="skeleton w-4 h-5 rounded-md ml-auto col-span-1" />
        </div>
      </div>
      <div className="mb-3">
        <div
          className={`grid grid-cols-6 place-content-between items-center px-2 py-5 border-b`}
        >
          <div className="skeleton w-24 h-5 rounded-md col-span-2" />
          <div className="skeleton w-full h-5 rounded-md col-span-3" />
          <div className="skeleton w-4 h-5 rounded-md ml-auto col-span-1" />
        </div>
      </div>
      <div className="mb-3">
        <div
          className={`grid grid-cols-6 place-content-between items-center px-2 py-5 border-b`}
        >
          <div className="skeleton w-24 h-5 rounded-md col-span-2" />
          <div className="skeleton w-full h-5 rounded-md col-span-3" />
          <div className="skeleton w-4 h-5 rounded-md ml-auto col-span-1" />
        </div>
      </div>

      <button className="skeleton w-28 h-8 mx-auto block rounded-md mt-6" />
    </div>
  );
};

export default AppointmentTimeSlotPickerSkeleton;
