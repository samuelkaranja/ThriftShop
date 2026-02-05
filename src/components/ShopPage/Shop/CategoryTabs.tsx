import type { Category } from "../../../data/products";
import Container from "../../layout/Container";

const categories: Category[] = [
  "All",
  "Hoodies",
  "Jeans",
  "T-Shirts",
  "Jackets",
];

interface Props {
  active: Category;
  onChange: (cat: Category) => void;
}

const CategoryTabs = ({ active, onChange }: Props) => {
  return (
    <section>
      <Container>
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`px-4 py-2 rounded-full text-sm transition
            ${
              active === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryTabs;
