import { useMemo } from "react";
import { products, type Product } from "../data/products";

interface Options {
  limit?: number;
  shuffle?: boolean;
}

export const useSimilarProducts = (
  currentProduct: Product,
  options: Options = {},
) => {
  const { limit = 3, shuffle = true } = options;

  const similarProducts = useMemo(() => {
    let filtered = products.filter(
      (pd) =>
        pd.category === currentProduct.category && pd.id !== currentProduct.id,
    );

    // Optional: shuffle
    if (shuffle) {
      filtered = [...filtered].sort(() => 0.5 - Math.random());
    }

    // Limit results
    return filtered.slice(0, limit);
  }, [currentProduct, limit, shuffle]);

  return similarProducts;
};
