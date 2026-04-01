import { Link } from "react-router-dom";
import type { Product } from "../../../data/products";
import Badge from "../ui/Badge";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="group mb-3">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
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
          className="text-[17px] font-bold hover:underline"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-1">
          <p className="text-[16px] text-gray-500">Size: {product.size}</p>
          <p className="font-semibold">Ksh {product.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
