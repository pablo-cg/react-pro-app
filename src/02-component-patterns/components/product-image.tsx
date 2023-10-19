import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './product-card';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);

  const imgSrc = img || product.img || noImage;

  return (
    <img src={imgSrc} alt={'Product Image'} className={styles.productImg} />
  );
};
