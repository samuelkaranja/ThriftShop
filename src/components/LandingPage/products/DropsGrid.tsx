import Container from "../../layout/Container";
import type { Product } from "../../../data/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const DropsGrid = ({ products }: Props) => {
  const newProducts = products.filter((product) => product.newDrop === true);

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {newProducts.map((pd) => (
            <ProductCard key={pd.id} product={pd} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DropsGrid;
