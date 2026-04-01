import Container from "../../layout/Container";
import Delivery from "./Delivery";
import WhatsappButton from "../ui/WhatsappButton";
import { type Product } from "../../../data/products";
import ProductCard from "../../ShopPage/Shop/ProductCard";
import { useSimilarProducts } from "../../../hooks/useSimilarProducts";

interface Props {
  product: Product;
}

const ProductInfo: React.FC<Props> = ({ product }) => {
  const similar = useSimilarProducts(product, {
    limit: 3,
    shuffle: true,
  });

  return (
    <section className="mt-7">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          <div>
            <img
              src={product.image}
              alt=""
              className="rounded-3xl h-full w-full object-contain"
            />
          </div>

          <div>
            <span className="bg-[#dbeafe] text-blue-900 text-sm font-medium px-4 py-2 rounded-full">
              {product.condition}
            </span>
            <h1 className="text-4xl text-black font-bold mt-5">
              {product.name}
            </h1>
            <h3 className="text-2xl text-black font-medium mt-5">
              Kshs {product.price}
            </h3>
            <div className="mt-5">
              <div className="mb-3">
                <span className="text-gray-600 text-[17px] pr-18">Size:</span>
                <span className="text-black text-[17px] font-medium">
                  {product.size}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-gray-600 text-[17px] pr-7">
                  Category:
                </span>
                <span className="text-black text-[17px] font-medium">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-[17px] pr-6">
                  Condition:
                </span>
                <span className="text-black text-[17px] font-medium">
                  {product.condition}
                </span>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-black text-xl font-bold pb-4">Description</h2>
              <p className="text-gray-600 text-[16px]">{product.description}</p>
            </div>
            <WhatsappButton />
            <Delivery />
          </div>
        </div>

        <div className="mt-30">
          <h1 className="text-2xl text-black font-bold">You may also like</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {similar.map((sm) => (
              <ProductCard key={sm.id} product={sm} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductInfo;
