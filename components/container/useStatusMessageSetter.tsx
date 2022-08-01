import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

type Error = 'error' | 'success' | 'info';

const useMessageStatusSetter = () => {
  const [successmessage, setSuccessMessage] = useState<string | null>(null);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [timeOutIds, setTimeOutIds] = useState<any[]>([]);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);

  useEffect(() => {
    setIsCancelled(false);
    return () => {
      setIsCancelled(true);
      timeOutIds.forEach((timeId) => {
        clearTimeout(timeId);
      });
    };
  }, [timeOutIds]);

  function setter(msg: string, type: Error, displayTime = 3000) {
    return new Promise((resolve, reject) => {
      if (type === 'error') {
        setErrMessage(msg);
        const tid = setTimeout(() => {
          resolve(true);
          setErrMessage(null);
        }, displayTime);

        return setTimeOutIds([...timeOutIds, tid]);
      }

      if (type === 'info') {
        setInfoMessage(msg);
        const tid = setTimeout(() => {
          setInfoMessage(null);
          resolve(true);
        }, displayTime);

        return setTimeOutIds([...timeOutIds, tid]);
      }
      if (type === 'success') {
        setSuccessMessage(msg);
        const tid = setTimeout(() => {
          setSuccessMessage(null);
          resolve(true);
        }, displayTime);

        return setTimeOutIds([...timeOutIds, tid]);
      }
    });
  }

  function shouldDisplayError() {
    if (isCancelled) {
      return false;
    }
    if (successmessage || errMessage || infoMessage) {
      return true;
    }

    return false;
  }

  const StatusTag: FC<{ className?: string }> = ({ className }) => {
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
        {shouldDisplayError()
          ? successmessage || errMessage || infoMessage
          : ''}
      </motion.div>
    );
  };

  return { successmessage, errMessage, infoMessage, setter, StatusTag };
};

export default useMessageStatusSetter;
