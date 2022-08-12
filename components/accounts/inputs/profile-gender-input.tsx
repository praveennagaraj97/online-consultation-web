import { AnimatePresence, motion } from 'framer-motion';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface ProfileGenderInputProps
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

const ProfileGenderInput: FC<ProfileGenderInputProps> = (props) => {
  function inputprops() {
    const clonedProps = { ...props };

    delete clonedProps.validation;
    delete clonedProps.showvalidation;
    delete clonedProps.label;
    delete clonedProps.containerClassName;
    delete clonedProps.children;

    return clonedProps;
  }

  return (
    <div>
      <div
        className={`${
          props.showvalidation
            ? props.validation?.type === 'error' && props.validation.message
              ? 'border-red-500'
              : 'border-green-500'
            : ''
        } p-2 px-4 flex flex-col border w-full rounded-2xl smooth-animate`}
      >
        <label htmlFor={props.name} className="text-gray-400 text-sm mb-0.5">
          {props.title}
        </label>
        <select className="w-full focus:outline-none" {...inputprops()}>
          <option value="">Choose your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
          <option value="na">Prefer not to say</option>
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
                  props.validation?.type === 'error'
                    ? 'text-red-500'
                    : 'text-green-500'
                } text-left block text-sm  ml-1`}
              >
                <small title={props.validation?.message || ''}>
                  {props.validation?.message}
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

export default ProfileGenderInput;
