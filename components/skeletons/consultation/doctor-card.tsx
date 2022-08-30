export default function DoctorCardSkeleton(): JSX.Element {
  return (
    <div
      className="shadow-lg rounded-lg border py-4 px-6
        md:grid grid-cols-3"
    >
      <div className="flex col-span-2 space-x-5 items-center">
        <div className="sm:w-48 sm:mb-0 mb-4">
          <div className="relative overflow-hidden h-48 w-48 rounded-full border  skeleton"></div>
        </div>
        <div className="h-full flex flex-col pt-2 w-full    overflow-hidden">
          <div className="skeleton rounded-lg  h-7 w-40 mb-1"></div>
          <div className="skeleton rounded-lg  h-6 w-36"></div>
          <div className="mt-2 grid lg:grid-cols-2 grid-cols-1 gap-x-4 ">
            <div className="flex items-center gap-1 my-1">
              <div className="w-5 h-5 rounded-full skeleton"></div>
              <div className="skeleton h-6 w-36 rounded-lg"></div>
            </div>
            <div className="flex items-center gap-1 my-1">
              <div className="w-5 h-5 rounded-full skeleton"></div>
              <div className="skeleton h-6 w-36 rounded-lg"></div>
            </div>
            <div className="flex items-center gap-1 my-1">
              <div className="w-5 h-5 rounded-full skeleton"></div>
              <div className="skeleton h-6 w-36 rounded-lg"></div>
            </div>
            <div className="flex items-center gap-1 my-1">
              <div className="w-5 h-5 rounded-full skeleton"></div>
              <div className="skeleton h-6 w-36 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-end items-center md:mt-0 mt-5">
        <div>
          <div className="skeleton h-6 w-36 rounded-lg"></div>
          <div className="flex items-center gap-2 my-1">
            <div className="w-5 h-5 rounded-full skeleton"></div>
            <div className="skeleton h-6 w-36 rounded-lg"></div>
          </div>
          <div className="w-full h-10 rounded-xl skeleton mt-4"></div>
        </div>
      </div>
    </div>
  );
}
