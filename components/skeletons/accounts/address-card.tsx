export default function AddressCardSkeleton(): JSX.Element {
  return (
    <div className="border shadow-lg rounded-xl py-3 px-4">
      <div className="flex gap-x-2 space-x-2">
        <div className="w-full">
          <div className="skeleton w-full h-5 rounded-md mb-1" />
          <div className="skeleton w-full h-2 rounded-md mb-0.5" />
          <div className="skeleton w-full h-2 rounded-md mb-2" />

          <div className="skeleton w-full h-4 rounded-md mb-1" />
          <div className="skeleton w-full h-4 rounded-md mb-1" />
          <div className="skeleton w-full h-4 rounded-md mb-1" />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="skeleton w-5 h-5 rounded-md mb-1" />
          <div className="skeleton w-5 h-5 rounded-md mb-1" />
        </div>
      </div>
    </div>
  );
}
