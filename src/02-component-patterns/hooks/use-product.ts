import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  function increaseBy(value: number) {
    setCounter((curr) => Math.max(curr + value, 0));
  }

  return { counter, increaseBy };
};
