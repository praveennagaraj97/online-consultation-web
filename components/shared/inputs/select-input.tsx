import { AnimatePresence, motion } from 'framer-motion';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  validation?: {
    type: 'success' | 'error';
    message?: string;
  };
  showvalidation?: boolean;
  label?: string;
  containerClassName?: string;
}

const SelectInput: FC<InputProps> = (props) => {
  const { validation, label, className } = props;

  function inputProps() {
    let clonedProps = { ...props };
    delete clonedProps.validation;
    delete clonedProps.showvalidation;
    delete clonedProps.label;
    delete clonedProps.containerClassName;
    delete clonedProps.children;
    return clonedProps;
  }

  return (
    <div>
      <div className={`w-full ${props.containerClassName}`}>
        {label ? (
          <label className="absolute top-0 left-0 text-xs px-3 pt-1 opacity-70">
            {label}
          </label>
        ) : (
          ''
        )}
        <select
          {...inputProps()}
          className={`${className} animate-smooth border focus:outline-none ${
            props.showvalidation
              ? validation?.type === 'error' && validation.message
                ? 'border-red-500'
                : 'border-green-500'
              : 'input-focus placeholder-blue-zodiac/60 border-gray-500/30'
          } ${label ? 'pt-5' : ''}`}
        >
          {props.children}
        </select>
      </div>
      {props.validation ? (
        <div className="min-h-[24px]">
          <AnimatePresence exitBeforeEnter>
            {props.showvalidation && props.validation?.message && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className={`${
                  validation?.type === 'error'
                    ? 'text-red-500'
                    : 'text-green-500'
                } text-left block text-sm  ml-1`}
              >
                <small title={validation?.message || ''}>
                  {validation?.message}
                </small>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SelectInput;
