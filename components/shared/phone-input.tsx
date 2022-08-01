import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface PhoneInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const PhoneInput: FC<PhoneInputProps> = (options) => {
  return (
    <div className="flex">
      <div
        className={`p-2 px-4 h-12 flex items-center border border-r-0 rounded-lg 
            rounded-r-none  shadow-xl drop-shadow-sm ${
              options.disabled ? 'disabled bg-transparent' : ''
            }`}
      >
        +91
      </div>

      <input type="tel" {...options} />
    </div>
  );
};

export default PhoneInput;
