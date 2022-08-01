import { FaFilePrescription } from 'react-icons/fa';

export default function SummaryCard(): JSX.Element {
  return (
    <div className="grid grid-cols-3 py-3 px-2 border-b">
      <div>
        <div className="flex items-center gap-1">
          <p>Dolo 650mg Tablet</p>
          <FaFilePrescription className="text-razzmatazz" />
        </div>
        <small>10 tablets in Strip</small>
      </div>
      <div className="flex items-center justify-center">
        <span className="opacity-70">Qty 01</span>
      </div>
      <div className="flex items-center justify-end">
        <div>
          <span className="text-right line-through decoration-red-400  block">
            MRP ₹ 149
          </span>
          <span className="text-right font-semibold block">₹ 143</span>
        </div>
      </div>
    </div>
  );
}
