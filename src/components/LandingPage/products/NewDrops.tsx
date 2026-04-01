import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import { ArrowRight } from "lucide-react";
import DropsGrid from "./DropsGrid";
import { products } from "../../../data/products";

const NewDrops = () => {
  return (
    <section className="py-8">
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

        <DropsGrid products={products} />
      </Container>
    </section>
  );
};

export default NewDrops;
