export default function DoctorProfileInfoSkeleton(): JSX.Element {
  return (
    <div className="shadow-lg px-3 py-4 rounded-lg border">
      <div className="rounded-lg">
        <div className="flex sm:flex-row flex-col gap-4 items-center">
          <div className="skeleton h-36 w-36 min-w-[144px] min-h-[144px]  rounded-full " />
          <div className="flex justify-between w-full">
            <div>
              <div className="h-8 skeleton rounded-md w-36 mb-1" />
              <div className="h-6 skeleton rounded-md w-36 mb-1" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 opacity-30" />
      <div className="mt-2 grid lg:grid-cols-2 grid-cols-1 gap-x-4 ">
        <div className="flex items-center gap-1 my-1">
          <div className="h-6 skeleton rounded-md w-5" />
          <div className="h-6 skeleton rounded-md w-36" />
        </div>
        <div className="flex items-center gap-1 my-1">
          <div className="h-6 skeleton rounded-md w-5" />
          <div className="h-6 skeleton rounded-md w-36" />
        </div>
        <div className="flex items-center gap-1 my-1">
          <div className="h-6 skeleton rounded-md w-5" />
          <div className="h-6 skeleton rounded-md w-36" />
        </div>
        <div className="flex items-center gap-1 my-1">
          <div className="h-6 skeleton rounded-md w-5" />
          <div className="h-6 skeleton rounded-md w-36" />
        </div>
      </div>
    </div>
  );
}
