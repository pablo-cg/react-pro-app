import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
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
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            quantity: 0,
            maxQuantity: 5,
          }}
        >
          {({ reset, increaseBy, quantity, isMaxQuantity }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="font-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>

              {!isMaxQuantity && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>{quantity}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
