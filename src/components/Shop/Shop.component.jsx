import { useContext } from "react";
import './shop.styles.scss';

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  //   console.log(shopData);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
