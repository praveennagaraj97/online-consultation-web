import { motion } from 'framer-motion';

export function ConsultantCardSkeleton(): JSX.Element {
  return (
    <div className="flex mt-6 flex-wrap">
      {new Array(8).fill('').map((_, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              staggerChildren: 0.5,
              delayChildren: 0.5,
              staggerDirection: 1,
              delay: 0.2,
            }}
            className="skeleton lg:px-8 px-4 sm:py-3 py-2 rounded-3xl h-11 w-24 m-2"
          />
        );
      })}
    </div>
  );
}
