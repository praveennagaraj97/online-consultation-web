import { AnimatePresence } from 'framer-motion';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../types/globals';
import { randomString } from '../../utils/helpers';
import { _document } from '../../utils/web.api';

interface PortalProps extends ModalProps {
  children: ReactNode;
}
/**
 * @props PortalProps
 * @returns Client only Portal
 */
const Portal: FC<PortalProps> = ({ children, showModal, disableScroll }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const selector = 'portal-' + randomString(7);

    const _el = _document()?.createElement('div');

    if (_el && selector && !ref.current) {
      _el.id = selector;

      _document()?.body.appendChild(_el);
      ref.current = _el;
    }

    return () => {
      ref.current = null;
      if (_el) {
        _document()?.body.removeChild(_el);
      }
    };
  }, []);

  useEffect(() => {
    if (disableScroll) {
      if (showModal) {
        _document()!.body.style.overflow = 'hidden';
      } else {
        _document()!.body.style.overflow = '';
      }
    }
  }, [disableScroll, showModal]);

  if (!ref.current) {
    return null;
  }

  return createPortal(
    <AnimatePresence exitBeforeEnter>{showModal && children}</AnimatePresence>,
    ref.current
  );
};

export default Portal;
