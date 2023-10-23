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
  quantity: number;
  maxQuantity?: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHoc {
  (props: ProductCardProps): JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  quantity: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export interface InitialValues {
  quantity?: number;
  maxQuantity?: number;
}

export interface ProductCardHandlers {
  isMaxQuantity: boolean;
  maxQuantity?: number;
  product: Product;
  quantity: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}
