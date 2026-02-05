import Container from "../../layout/Container";
import Denim from "../../../assets/denim.jpg";
import Hoodie from "../../../assets/BlackHoodie.jpg";
import Jeans from "../../../assets/slimjeans.jpg";
import Shirt from "../../../assets/tshirt.jpg";

const categories = [
  { name: "Hoodies", image: Hoodie },
  { name: "Jeans", image: Jeans },
  { name: "T-Shirts", image: Shirt },
  { name: "Jackets", image: Denim },
];

const Categories = () => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-center text-2xl font-semibold mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative h-40 rounded-xl overflow-hidden group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
