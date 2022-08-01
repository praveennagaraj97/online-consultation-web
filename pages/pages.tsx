import { NextPage } from 'next';
import Link from 'next/link';
import { Routes } from '../routes';

const Pages: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-semibold mb-5">Preview Pages Paths</h3>

      {Object.keys(Routes).map((each, idx) => {
        return (
          //@ts-ignore
          <Link key={each} href={Routes[each]}>
            <a
              className="block hover:text-blue-500 w-fit"
              target="_blank"
              rel="noreferrer"
            >
              #{idx + 1} {each}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Pages;
