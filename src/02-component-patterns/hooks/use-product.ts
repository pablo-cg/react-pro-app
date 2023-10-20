import { useEffect, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces';

interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);

  function increaseBy(value: number) {
    const newCounter = Math.max(counter + value, 0);
    setCounter(newCounter);

    onChange && onChange({ quantity: newCounter, product });
  }

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
