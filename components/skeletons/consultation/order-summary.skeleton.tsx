export default function ConsultationOrderSummarySkeleton(): JSX.Element {
  return (
    <div className="col-span-1 shadow-lg rounded-lg sm:p-8 p-4 border h-min">
      <div className="skeleton h-14 w-80 rounded-md"></div>
      <h4 className="sm:mt-14 mt-7 mb-4 text-xl font-semibold">
        Order Summary
      </h4>
      <div className="flex items-center text-lg opacity-70 mb-1 justify-between">
        <div className="skeleton h-7 w-36 rounded-sm"></div>
        <div className="skeleton h-7 w-20 rounded-sm"></div>
      </div>
      <div className="flex items-center text-lg opacity-70 mb-1 justify-between">
        <div className="skeleton h-7 w-36 rounded-sm"></div>
        <div className="skeleton h-7 w-20 rounded-sm"></div>
      </div>
      <div className="flex items-center text-lg opacity-70 mb-1 justify-between">
        <div className="skeleton h-7 w-36 rounded-sm"></div>
        <div className="skeleton h-7 w-20 rounded-sm"></div>
      </div>
      <hr className="my-4 opacity-40" />
      <div className="flex items-center text-lg mb-1 justify-between">
        <div className="skeleton h-7 w-36 rounded-sm"></div>
        <div className="skeleton h-7 w-20 rounded-sm"></div>
      </div>
      <div className="skeleton block mx-auto h-8 w-36 rounded-md sm:mt-10 mt-6 text-center"></div>
    </div>
  );
}
