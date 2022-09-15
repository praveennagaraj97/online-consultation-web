export default function SelectedSlotInfoSkeleton(): JSX.Element {
  return (
    <div className="shadow-lg px-3 py-4 rounded-lg gap-4 border">
      <h3 className="font-semibold text-lg  mb-4">Appointment Date & Time</h3>
      <div className="flex items-center flex-wrap gap-3">
        <button className="rounded-md skeleton w-60 h-10" />
        <div className="skeleton h-6 w-36 rounded-md" />
      </div>
    </div>
  );
}
