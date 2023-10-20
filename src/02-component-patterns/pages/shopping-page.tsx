import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

import { products } from '../data/products';
import { useShoppingCart } from '../hooks/use-shopping-cart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { handleAddProduct, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // height: '100%',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            value={shoppingCart?.[product.id]?.quantity || 0}
            onChange={handleAddProduct}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="font-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {/* Forma 1 */}
        {/* {Object.values(shoppingCart).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            value={product.quantity}
            onChange={handleAddProduct}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))} */}

        {/* Forma 2 */}
        {shoppingCart &&
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: '100px' }}
              value={product.quantity}
              onChange={handleAddProduct}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          ))}
      </div>
    </div>
  );
};
