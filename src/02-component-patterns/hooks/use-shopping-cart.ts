import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCard] = useState<
    Record<string, ProductInCart> // <- { [key:string]: ProductInCart }
  >({});

  function handleAddProduct({ product, quantity }: onChangeArgs) {
    setShoppingCard((currentCart) => {
      const productInCart: ProductInCart = currentCart[product.id] || {
        ...product,
        quantity: 0,
      };

      if (Math.max(productInCart.quantity + quantity, 0) > 0) {
        productInCart.quantity += quantity;

        return {
          ...currentCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: deletedProduct, ...cart } = currentCart;
      return cart;

      // if (!quantity) {
      //   const { [product.id]: deletedProduct, ...cart } = currentCart;
      //   return cart;
      // }
      // return {
      //   ...currentCart,
      //   [product.id]: { ...product, quantity },
      // };
    });
  }
  return { shoppingCart, handleAddProduct };
};
