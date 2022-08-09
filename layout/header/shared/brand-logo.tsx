import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo({
  isRootPage,
}: {
  isRootPage: boolean;
}): JSX.Element {
  return (
    <Link href="/">
      <a>
        <div className="relative lg:w-28 w-24 h-full flex justify-start ">
          {isRootPage ? (
            <Image
              src="/assets/logo.svg"
              layout="fill"
              alt="get med go brand"
              loading="eager"
            />
          ) : (
            <Image
              src="/assets/brand/logo-zodiac.svg"
              layout="fill"
              alt="get med go brand"
              loading="eager"
            />
          )}
        </div>
      </a>
    </Link>
  );
}
