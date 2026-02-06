import { ArrowLeft } from "lucide-react";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";

const DetailHeader: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center">
          <ArrowLeft size={18} color="black" />
          <Link
            to="/shop"
            className="ml-1 text-black font-medium hover:underline"
          >
            Back to Shop
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default DetailHeader;
