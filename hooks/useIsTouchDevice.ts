import { useEffect, useState } from 'react';
import { _isTouchDevice } from '../utils/web.api';

const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      setIsTouchDevice(_isTouchDevice());
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return { isTouchDevice };
};

export default useIsTouchDevice;
