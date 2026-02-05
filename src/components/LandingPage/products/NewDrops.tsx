import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import Denim from "../../../assets/denim.jpg";
import Hoodie from "../../../assets/BlackHoodie.jpg";
import Jeans from "../../../assets/slimjeans.jpg";
import Shirt from "../../../assets/tshirt.jpg";

const NewDrops = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold mb-1">New Drops</h2>
            <p className="text-gray-500 text-sm">Fresh arrivals this week</p>
          </div>
          <Link
            to="/shop"
            className="flex items-center text-sm font-medium hover:underline"
          >
            View All
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            image={Denim}
            title="Vintage Denim Jacket"
            size="M"
            price="Ksh 1,200"
            tag="Like New"
          />
          <ProductCard
            image={Hoodie}
            title="Black Hoodie"
            size="L"
            price="Ksh 800"
            tag="Good"
          />
          <ProductCard
            image={Jeans}
            title="Slim Fit Jeans"
            size="32"
            price="Ksh 900"
            tag="New"
          />
          <ProductCard
            image={Shirt}
            title="Graphic T-Shirt"
            size="S"
            price="Ksh 400"
            tag="New"
          />
        </div>
      </Container>
    </section>
  );
};

export default NewDrops;
