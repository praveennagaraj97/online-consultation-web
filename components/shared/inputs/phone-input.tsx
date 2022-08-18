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
  phonecodeclassname: string;
}

const PhoneInput: FC<PhoneInputProps> = (props) => {
  return (
    <div className="relative">
      <div
        className={`${
          props.phonecodeclassname
        } absolute flex items-center border shadow-md  rounded-lg z-10 ${
          props.disabled ? 'disabled bg-transparent' : ''
        }`}
      >
        {props.phonecode || '+91'}
      </div>

      <CommonInput validation={props.validation} {...props} />
    </div>
  );
};

export default PhoneInput;
