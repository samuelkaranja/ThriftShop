import type { Product } from "../../../data/products";
import Container from "../../layout/Container";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;
