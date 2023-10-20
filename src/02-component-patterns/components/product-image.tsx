import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './product-card';

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const imgSrc = img || product.img || noImage;

  return (
    <img
      src={imgSrc}
      alt={'Product Image'}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
