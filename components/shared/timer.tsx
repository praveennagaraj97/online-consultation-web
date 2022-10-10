import { FC, useEffect, useState } from 'react';

const Timer: FC<{
  sec: number;
  className?: string;
  onTimerComplete?: () => void;
}> = ({ sec, className = '', onTimerComplete = () => {} }) => {
  const [timer, setTime] = useState(sec);

  useEffect(() => {
    let time = sec;
    let tId: any;
    tId = setInterval(() => {
      time -= 1;

      setTime(time);
      if (time === 0) {
        clearInterval(tId);
        onTimerComplete();
      }
    }, 1000);

    return () => {
      clearInterval(tId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sec]);

  return <span className={className}>{timer}</span>;
};

export default Timer;
