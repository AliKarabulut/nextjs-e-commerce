import { notFound } from "next/navigation";
import ProductContainer from "@/component/product-container/product-container";
import ProductCard from "@/component/product-card/product-card.js";
import SortProducts from "@/component/sortProducts";
import { Fragment } from "react";

const getData = async (searchParams) => {
  if (!searchParams) {
    notFound();
  }
  try {
    const response = await fetch(`https://fakestoreapi.com/products${searchParams.sort ? `?sort=${searchParams.sort}` : ""}`);
    const data = await response.json();

    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(searchParams.s.toLowerCase())
    );

    return filteredData;
  } catch (error) {
    throw new Error("Filtered products could not be fetched!");
  }
};

export default async function SearchBar({ searchParams }) {
  console.log(searchParams.s)
  if (!searchParams) {
    notFound();
  }
  const filteredProducts = await getData(searchParams);

  return (
    <Fragment>
      <SortProducts params={"?s="+ searchParams.s}/>
      <ProductContainer>
        {filteredProducts.map((e) => {
          return <ProductCard products={e} />;
        })}
      </ProductContainer>
    </Fragment>
  );
}
