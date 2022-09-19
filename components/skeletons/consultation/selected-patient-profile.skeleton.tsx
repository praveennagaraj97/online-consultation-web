export default function SelectedPatientProfileSkeleton(): JSX.Element {
  return (
    <div className="shadow-lg px-3 py-6 rounded-lg gap-4 border">
      <h3 className="font-semibold text-lg  mb-4">Patient Profile</h3>
      <div className="flex items-center gap-4 flex-wrap">
        <button className=" py-2 px-6 rounded-md skeleton h-10 w-36" />
        <button className=" py-2 px-6 rounded-md skeleton h-10 w-36" />
        <button className=" py-2 px-6 rounded-md skeleton h-10 w-36" />
      </div>
    </div>
  );
}
