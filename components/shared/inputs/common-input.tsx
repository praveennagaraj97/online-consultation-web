import { motion } from 'framer-motion';
import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  validation?: {
    type: 'success' | 'error';
    message: string;
  };
  showvalidation?: boolean;
  label?: string;
}

const CommonInput: FC<InputProps> = (props) => {
  const { validation, label, className } = props;

  function inputProps() {
    let clonedProps = { ...props };
    delete clonedProps.validation;
    delete clonedProps.showvalidation;
    delete clonedProps.label;
    return clonedProps;
  }

  return (
    <div className={`w-full relative`}>
      {label ? (
        <label className="absolute top-0 left-0 text-xs px-3 pt-1 opacity-70">
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        {...inputProps()}
        className={`${className} ${
          props.showvalidation
            ? validation?.type === 'error'
              ? 'outline-red-500 outline outline-1'
              : 'outline-green-500 outline outline-1'
            : ''
        } ${label ? 'pt-5' : ''}`}
      />

      <motion.div
        animate={props.showvalidation ? { opacity: 1 } : { opacity: 0 }}
        initial={false}
        className={`${
          validation?.type === 'error' ? 'text-red-500' : 'text-green-500'
        } text-left block  ml-1 absolute -bottom-1.5`}
      >
        <small className="cut-text-1">{validation?.message}</small>
      </motion.div>
    </div>
  );
};

export default CommonInput;
