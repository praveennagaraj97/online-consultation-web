import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import DatePicker from '../../date-picker';
import { InputProps } from '../../shared/inputs/common-input';

interface ProfileDOBInputProps extends InputProps {
  setDate: (date: Date) => void;
  date: Date | undefined;
}

const ProfileDOBInput: FC<ProfileDOBInputProps> = (props) => {
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
        <DatePicker
          onChange={props.setDate}
          className="w-full focus:outline-none border-0 focus:border-0"
          btnClass="absolute right-0 top-0"
          date={props.date}
          validation={props.validation}
          postionTop={35}
          maxDate={new Date()}
        />
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

export default ProfileDOBInput;
