import Image from 'next/image';

export default function AuthBanner(): JSX.Element {
  return (
    <div className="bg-blue-zodiac px-4 w-full h-full rounded-xl rounded-r-none  lg:flex flex-col justify-center hidden">
      <div className="">
        <Image
          src={'/assets/illustrate/login_bg.png'}
          alt=""
          layout="responsive"
          width={490}
          height={390}
          unoptimized={true}
          loading="lazy"
          className=""
        />
      </div>
    </div>
  );
}
