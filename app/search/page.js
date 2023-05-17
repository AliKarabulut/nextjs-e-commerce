"use client";

import { useSearchParams, notFound  } from "next/navigation";
import { getFilteredProduct } from "../api/fake-store-api";
import ProductContainer from "@/component/product-container/product-container";
import ProductCard from "@/component/product-card/product-card.js";


export default async function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("");


  const filteredProducts = await getFilteredProduct(search);
  // console.log(filteredProducts.error)
  // if (filteredProducts.error) {
  //   return notFound();
  // }



  return (
    <ProductContainer>
      {filteredProducts.map((e) => {
        return <ProductCard products={e} />;
      })}
    </ProductContainer>
  );
}
