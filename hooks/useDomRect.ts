import { useEffect, useState } from 'react';
import { _window } from '../utils/web.api';

export const useDomRect = (
  containerRef: React.MutableRefObject<HTMLElement | null>
) => {
  const [domRect, setDomRect] = useState<DOMRect>();

  useEffect(() => {
    setDomRect(containerRef.current?.getBoundingClientRect());

    _window()?.addEventListener('scroll', () => {
      setDomRect(containerRef.current?.getBoundingClientRect());
    });

    _window()?.addEventListener('resize', () => {
      setDomRect(containerRef.current?.getBoundingClientRect());
    });

    return () => {
      _window()?.removeEventListener('scroll', () => {
        setDomRect(undefined);
      });
      _window()?.removeEventListener('resize', () => {
        setDomRect(undefined);
      });
    };
  }, [containerRef]);

  return { domRect };
};
