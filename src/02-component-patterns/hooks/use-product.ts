import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces';

interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [quantity, setQuantity] = useState(initialValues?.quantity || value);

  const isMounted = useRef(false);

  function increaseBy(value: number) {
    let newQuantity = Math.max(quantity + value, 0);

    if (initialValues?.maxQuantity) {
      newQuantity = Math.min(newQuantity, initialValues.maxQuantity);
    }

    setQuantity(newQuantity);

    onChange && onChange({ quantity: newQuantity, product });
  }

  function reset() {
    setQuantity(initialValues?.quantity || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;

    setQuantity(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    quantity,
    isMaxQuantity: initialValues?.maxQuantity === quantity,
    maxQuantity: initialValues?.maxQuantity,
    increaseBy,
    reset,
  };
};
