import { useState } from "react";
import { products, type Category } from "../data/products";
import ShopHeader from "../components/ShopPage/Shop/ShopHeader";
import CategoryTabs from "../components/ShopPage/Shop/CategoryTabs";
import ProductGrid from "../components/ShopPage/Shop/ProductGrid";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-10">
      <ShopHeader />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <ProductGrid products={filteredProducts} />
    </section>
  );
};

export default Shop;
