import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface ProfileInputProps {
  inputOptions?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  title: string;
}

const ProfileInput: FC<ProfileInputProps> = ({ inputOptions, title }) => {
  return (
    <div className="p-2 px-4 flex flex-col border w-full rounded-2xl">
      <label
        htmlFor={inputOptions?.name}
        className="text-gray-400 text-sm mb-0.5"
      >
        {title}
      </label>
      <input className="w-full focus:outline-none" {...inputOptions} />
    </div>
  );
};

export default ProfileInput;
