import { useEffect, useState } from 'react';
import { _window } from '../utils/web.api';

/**
 * @description doesn't listen to resize event
 * @returns windowsize
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ height: 0, width: 0 });

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      const window = _window();

      if (window) {
        setWindowSize({ height: window.innerHeight, width: window.innerWidth });
      }
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return windowSize;
}
