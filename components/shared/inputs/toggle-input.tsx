import { motion } from 'framer-motion';
import { FC, MouseEventHandler } from 'react';

import { AiOutlineMinusCircle } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';

const ToggleInput: FC<{
  state: boolean;
  onclick?: MouseEventHandler<HTMLDivElement>;
}> = ({ state, onclick }) => {
  return (
    <div
      role="checkbox"
      aria-checked
      onClick={onclick}
      className={`w-8 h-5 flex items-center  ${
        state ? 'bg-green-500' : 'bg-red-500'
      }  rounded-full p-1 cursor-pointer`}
    >
      <motion.div
        animate={!state ? { x: -2 } : { x: 10 }}
        initial={false}
        className={`bg-white  w-4 h-4 rounded-full shadow-md`}
      >
        {!state ? (
          <AiOutlineMinusCircle className="text-black w-4 h-4" />
        ) : (
          <GrStatusGood className="text-black  w-4 h-4" />
        )}
      </motion.div>
    </div>
  );
};

export default ToggleInput;
