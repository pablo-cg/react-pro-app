import { createContext } from 'react';
import { useProduct } from '../hooks/use-product';
import type { ProductCardProps, ProductContextType } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextType);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
