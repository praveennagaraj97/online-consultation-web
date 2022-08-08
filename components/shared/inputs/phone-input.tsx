import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import CommonInput from './common-input';

interface PhoneInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  validation?: {
    type: 'success' | 'error';
    message?: string;
  };
  showvalidation?: boolean;
  phonecode?: string;
}

const PhoneInput: FC<PhoneInputProps> = (options) => {
  return (
    <div className="relative">
      <div
        className={`p-2 px-3.5 h-12 absolute flex items-center border shadow-md  rounded-lg z-10 ${
          options.disabled ? 'disabled bg-transparent' : ''
        }`}
      >
        {options.phonecode || '+91'}
      </div>

      <CommonInput validation={options.validation} {...options} />
    </div>
  );
};

export default PhoneInput;
