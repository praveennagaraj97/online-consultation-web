export default function LinkedProfileCardSkeleton() {
  return (
    <div className="border drop-shadow-xl shadow-lg rounded-xl py-3 px-4">
      <div className="grid grid-cols-2 gap-x-6 mb-1">
        <div className="skeleton w-full h-5 rounded-md mb-1" />
        <div className="skeleton w-full h-5 rounded-md mb-1" />
      </div>
      <div className="grid grid-cols-2 gap-x-6 mb-1">
        <div className="skeleton w-full h-5 rounded-md mb-1" />
        <div className="skeleton w-full h-5 rounded-md mb-1" />
      </div>
      <div className="grid grid-cols-2 gap-x-6 mb-1">
        <div className="skeleton w-full h-5 rounded-md mb-1" />
        <div className="skeleton w-full h-5 rounded-md mb-1" />
      </div>
      <div className="grid grid-cols-2 gap-x-6 mb-1">
        <div className="skeleton w-full h-5 rounded-md mb-1" />
        <div className="skeleton w-full h-5 rounded-md mb-1" />
      </div>
      <div className="flex justify-end gap-2 mt-3">
        <div className="skeleton w-6 h-6 rounded-md mb-1" />
        <div className="skeleton w-6 h-6 rounded-md mb-1" />
      </div>
    </div>
  );
}
