import { Link } from "react-router-dom";
import type { Product } from "../../../data/products";
import Badge from "../ui/Badge";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="group mb-3">
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-105 transition"
        />
        <Badge label={product.condition} />
      </div>

      <div className="mt-3 space-y-1">
        <Link
          to={`/product-detail/${product.id}`}
          className="text-md font-medium hover:underline"
        >
          {product.name}
        </Link>
        <p className="text-sm text-gray-500 pt-1">Size: {product.size}</p>
        <p className="font-semibold">Ksh {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
