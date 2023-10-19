import { createContext } from 'react';
import { useProduct } from '../hooks/use-product';
import type {
  ProductCardHoc,
  ProductCardProps,
  ProductContextType,
} from '../interfaces';
import { ProductButtons } from './product-buttons';
import { ProductImage } from './product-image';
import { ProductTitle } from './product-title';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextType);
const { Provider } = ProductContext;

const ProductCardHOC = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export const ProductCard: ProductCardHoc = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
