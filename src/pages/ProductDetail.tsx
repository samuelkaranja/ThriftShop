import { useParams } from "react-router-dom";
import DetailHeader from "../components/ProductDetailPage/Detail/DetailHeader";
import ProductInfo from "../components/ProductDetailPage/Detail/ProductInfo";
import { products } from "../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="py-10">
        <p className="text-center text-gray-500">Product not found</p>
      </section>
    );
  }

  return (
    <section className="py-10">
      <DetailHeader />
      <ProductInfo product={product} />
    </section>
  );
};

export default ProductDetail;
