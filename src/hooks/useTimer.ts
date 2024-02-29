import { useEffect, useState } from 'react';

export const useTimer = (totalSeconds: number) => {
  const [remainSeconds, setRemainSeconds] = useState(totalSeconds);
  const [timerMM, setTimerMM] = useState<string>(Math.floor(remainSeconds / 60).toString());
  const [timerSS, setTimerSS] = useState<string>((remainSeconds % 60).toString());

  useEffect(() => {
    setTimerMM(Math.floor(remainSeconds / 60).toString());
    setTimerSS((remainSeconds % 60).toString());

    const timerId = setInterval(() => {
      setRemainSeconds((remainSeconds: number) => remainSeconds - 1);
    }, 1000);

    if (remainSeconds === 0) {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [remainSeconds]);

  return { remainSeconds, timerMM, timerSS };
};
