import { useState } from 'react';

interface UseNumberCounter {
  defaultCount?: number;
  min?: number;
  max?: number;
  step?: number;
}
export const useNumberCounter = ({
  defaultCount = 1,
  min = 1,
  max,
  step = 1,
}: UseNumberCounter = {}) => {
  const [count, setCount] = useState(defaultCount);

  const onDecrease = () => {
    setCount((count) => (count - step < min ? min : count - step));
  };

  const onIncrease = () => {
    setCount((count) => (max && count + step > max ? max : count + step));
  };

  return { count, onDecrease, onIncrease };
};
