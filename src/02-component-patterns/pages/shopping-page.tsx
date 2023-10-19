import { ProductButtons } from '../components/product-buttons';
import { ProductCard } from '../components/product-card';
import { ProductImage } from '../components/product-image';
import { ProductTitle } from '../components/product-title';

const product = {
  id: crypto.randomUUID(),
  title: 'Coffee Mug',
  img: '/coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
