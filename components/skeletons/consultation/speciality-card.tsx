export default function SpecialityCardSkeleton(): JSX.Element {
  return (
    <div className="p-2 rounded-xl border">
      <div className="w-full h-40 rounded-xl skeleton mb-2"></div>
      <div className="h-5 w-full skeleton rounded-md"></div>
    </div>
  );
}
