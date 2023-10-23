import { createContext } from 'react';
import { useProduct } from '../hooks/use-product';
import type {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextType,
} from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextType);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  className,
  initialValues,
  product,
  style,
  value,
  children,
  onChange,
}: Props) => {
  const { isMaxQuantity, maxQuantity, quantity, increaseBy, reset } =
    useProduct({
      initialValues,
      product,
      value,
      onChange,
    });

  return (
    <Provider value={{ product, quantity, increaseBy, maxQuantity }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          isMaxQuantity,
          maxQuantity,
          product,
          quantity,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
