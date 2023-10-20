import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCard] = useState<
    Record<string, ProductInCart> // <- { [key:string]: ProductInCart }
  >({});

  function handleAddProduct({ product, quantity }: onChangeArgs) {
    setShoppingCard((currentCart) => {
      if (!quantity) {
        const { [product.id]: deletedProduct, ...cart } = currentCart;
        return cart;
      }
      return {
        ...currentCart,
        [product.id]: { ...product, quantity },
      };
    });
  }
  return { shoppingCart, handleAddProduct };
};
