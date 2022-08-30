import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import type { FC, ReactNode } from 'react';

const AnchorTwist: FC<
  { children: ReactNode; className?: string } & LinkProps
> = ({
  children,
  href,
  as,
  locale,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  className = 'hover:text-pink-500 cursor-pointer ',
}) => {
  return (
    <Link
      href={href}
      as={as}
      locale={locale}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a>
        <motion.span
          whileHover={{ rotateX: [0, 45, 0] }}
          whileTap={{ rotateX: [0, 45, 0] }}
          transition={{
            type: 'keyframes',
            ease: 'easeIn',
          }}
          className={`${className} block smooth-animate`}
        >
          {children}
        </motion.span>
      </a>
    </Link>
  );
};

export default AnchorTwist;
