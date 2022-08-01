import { motion } from 'framer-motion';
import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  validation?: {
    error: boolean;
    message: string;
  };
  label?: string;
}

const CommonInput: FC<InputProps> = (props) => {
  const { validation, label, className } = props;

  return (
    <div className={`w-full ${label ? 'relative' : ''}`}>
      {label ? (
        <label className="absolute top-0 left-0 text-xs px-3 pt-1 opacity-70">
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        {...props}
        className={`${className} ${
          validation?.error ? 'outline-red-400 outline outline-1' : ''
        } ${label ? 'pt-5' : ''}`}
      />

      <motion.small
        animate={validation?.error ? { opacity: 1 } : { opacity: 0 }}
        initial={false}
        className="text-left block text-red-600  mb-1 ml-1"
      >
        {validation?.message}
      </motion.small>
    </div>
  );
};

export default CommonInput;
