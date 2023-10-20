import { Props as ProductButtonsProps } from '../components/product-buttons';
import { Props as ProductCardProps } from '../components/product-card';
import { Props as ProductImageProps } from '../components/product-image';
import { Props as ProductTitleProps } from '../components/product-title';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextType {
  increaseBy: (value: number) => void;
  counter: number;
  product: Product;
}

export interface ProductCardHoc {
  (props: ProductCardProps): JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
}
