import Link from 'next/link';
import { FC } from 'react';

const ConsultationForUserSelectCard: FC = () => {
  return (
    <Link href={'/consultation/book-appointment/choose-speciality'}>
      <a
        role="button"
        className="shadow-md shadow-razzmatazz/40
 hover:bg-razzmatazz hover:text-gray-50
 transform transition-colors duration-300
 border border-razzmatazz lg:px-8 px-4 py-3 rounded-3xl"
      >
        Ellie Williams
      </a>
    </Link>
  );
};

export default ConsultationForUserSelectCard;
