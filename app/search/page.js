"use client";

import { notFound, useSearchParams } from "next/navigation";
import { getFilteredProduct } from "../api/filteredProducts/route";
import ProductContainer from "@/component/product-container/product-container";
import ProductCard from "@/component/product-card/product-card.js";

export default async function SearchBar() {
  const searchParams = useSearchParams();

  if (!searchParams.has("s")) {
    notFound();
  } else {
    const search = searchParams.get("s");

    const filteredProducts = await getFilteredProduct(search);

    return (
      <ProductContainer>
        {filteredProducts.map((e) => {
          return <ProductCard products={e} />;
        })}
      </ProductContainer>
    );
  }
}
