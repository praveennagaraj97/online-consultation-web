import Link from 'next/link';
import { Routes } from '../../routes';

export default function IsNewUser(): JSX.Element {
  return (
    <div className="px-6 mt-8  mb-3">
      <hr className="opacity-25" />
      <p className="flex justify-center pt-3 text-sm">
        New User? Create an account
      </p>
      <Link href={Routes.Register}>
        <a
          className="md:w-1/3 w-10/12 rounded-lg py-1.5 mx-auto block border border-razzmatazz mt-3
             hover:bg-razzmatazz hover:shadow-xl hover:shadow-razzmatazz/40 hover:text-gray-50
              transform transition-all duration-300 hover:scale-105 text-center
             "
          role="button"
        >
          Register
        </a>
      </Link>
    </div>
  );
}
