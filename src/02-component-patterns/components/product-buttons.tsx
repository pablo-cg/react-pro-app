import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './product-card';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { maxQuantity, quantity, increaseBy } = useContext(ProductContext);

  const isMaxQuantity = useCallback(
    () => quantity === maxQuantity,
    [quantity, maxQuantity]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {quantity} </div>
      <button
        className={`${styles.buttonAdd} ${isMaxQuantity() && styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
