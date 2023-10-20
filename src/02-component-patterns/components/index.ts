import { ProductCardHoc } from '../interfaces';
import { ProductButtons } from './product-buttons';
import { ProductCard as Card } from './product-card';
import { ProductImage } from './product-image';
import { ProductTitle } from './product-title';

export { ProductButtons } from './product-buttons';
export { ProductImage } from './product-image';
export { ProductTitle } from './product-title';

export const ProductCard: ProductCardHoc = Object.assign(Card, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
