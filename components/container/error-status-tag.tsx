import { motion } from 'framer-motion';
import { FC } from 'react';

const ErrorStatusTag: FC<{
  className?: string;
  successmessage?: string | null;
  errMessage?: string | null;
  infoMessage?: string | null;
}> = ({ className, errMessage, infoMessage, successmessage }) => {
  function shouldDisplayError() {
    if (successmessage || errMessage || infoMessage) {
      return true;
    }

    return false;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={shouldDisplayError() ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className={`overflow-hidden  ${errMessage ? 'text-red-600 ' : ''} ${
        successmessage ? 'text-green-600 ' : ''
      } ${infoMessage ? 'text-blue-600 ' : ''}  ${className}`}
    >
      {shouldDisplayError() ? successmessage || errMessage || infoMessage : ''}
    </motion.div>
  );
};

export default ErrorStatusTag;
