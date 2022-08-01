import { FC } from 'react';
import { FaFilePrescription } from 'react-icons/fa';

const PrescriptionCard: FC = () => {
  return (
    <div className="w-full border py-4 px-6 rounded-lg">
      <div className="flex justify-between mb-2">
        <span>Consultation ID</span>
        <span className="font-semibold">#20210730APT00178</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Consultation Date</span>
        <span className="font-semibold">3:00 PM, 24 Julv 2021</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Consulted</span>
        <span className="font-semibold text-razzmatazz"> Dr. Satish Babu</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Patient</span>
        <span className="font-semibold">Cyril Chacko</span>
      </div>
      <div className="flex mt-6 justify-between  items-center">
        <button
          className="flex gap-2 border border-blue-zodiac rounded-lg px-4 py-2 items-center
          hover:bg-blue-zodiac hover:text-gray-50
        "
        >
          <FaFilePrescription />
          <span>View Prescription</span>
        </button>
        <button className="flex gap-2 bg-razzmatazz text-gray-50 rounded-lg px-4 py-2 items-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PrescriptionCard;
