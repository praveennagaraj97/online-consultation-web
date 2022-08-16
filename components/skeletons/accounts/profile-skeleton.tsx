import type { FC } from 'react';

const InputBox: FC = () => {
  return (
    <div className=" h-16 border p-2 rounded-xl w-full mb-4">
      <div className="skeleton w-32 h-5 rounded-md mb-1" />
      <div className="skeleton w-full h-6 rounded-md" />
    </div>
  );
};

const ProfileSkeleton: FC = () => {
  return (
    <div>
      <div className="my-8">
        <InputBox />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <InputBox />
        <InputBox />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <InputBox />
        <InputBox />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <InputBox />
      </div>

      <div className="skeleton w-32 mx-auto mt-12 h-8 rounded-md " />
    </div>
  );
};

export default ProfileSkeleton;
