import { Link } from "react-router-dom";
import type { Product } from "../../../data/products";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <section>
      <div className="relative rounded-xl overflow-hidden bg-gray-100">
        <span className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full">
          {product.condition}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="mt-3">
        <Link
          to={`/product-detail/${product.id}`}
          className="font-medium hover:underline"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-gray-500">Size: {product.size}</p>
          <p className="text-sm font-semibold">Kshs {product.price}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
