import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="pt-18 pb-28 md:pt-25 md:pb-32 bg-[#fbfcfd]">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl leading-[1.15] md:text-6xl font-extrabold text-gray-900">
            Affordable Thrift <br />
            Fashion For Students
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Hand-picked, cleaned, and ready to wear. Quality thrift clothing
            that fits your style and budget.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-xl text-sm font-medium"
            >
              Shop Now
              <ArrowRight />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3.5 rounded-xl text-sm font-medium"
            >
              <MessageCircle color="black" />
              Order via WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
