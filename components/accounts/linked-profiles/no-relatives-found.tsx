/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function NoRelativesFound() {
  return (
    <div className="mb-4">
      <div className="mx-auto md:w-96 w-56">
        <img
          src="/assets/illustrate/no-relatives.png"
          alt="..."
          draggable={false}
        />
      </div>
      <h2 className="text-xl text-center mt-3">
        {"We couldn't find any linked profiles for your account."}
      </h2>
      <span className="block text-center mt-2">
        If you have already added a relative account and {"couldn't"} find it,
        Please{' '}
        <Link
          href={{
            pathname: '/report',
            query: { issue: "Couldn't find relative account." },
          }}
        >
          <a className="underline smooth-animate hover:text-blue-zodiac text-razzmatazz">
            contact us.
          </a>
        </Link>
      </span>
    </div>
  );
}
