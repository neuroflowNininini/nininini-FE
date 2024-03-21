import { useEffect, useState } from 'react';

export const useTimer = (totalSeconds: number) => {
  const [remainSeconds, setRemainSeconds] = useState(totalSeconds);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    const timerId = setInterval(() => {
      setRemainSeconds((remainSeconds: number) => remainSeconds - 1);
    }, 1000);

    if (remainSeconds === 0) {
      clearInterval(timerId);
      setStart(false);
    }
    return () => clearInterval(timerId);
  }, [remainSeconds, start]);

  const startTimer = () => {
    setStart(true);
    setRemainSeconds(totalSeconds);
  };

  return { remainSeconds, startTimer };
};
