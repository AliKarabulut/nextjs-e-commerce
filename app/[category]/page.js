import ProductCard from "@/component/product-card/product-card.js";
import ProductContainer from "@/component/product-container/product-container";
import SortProducts from "@/component/sortProducts";
import { notFound } from "next/navigation";
import { Fragment } from "react";


const getData = async (category, searchParams) => {
  const search = searchParams ? `?sort=${searchParams.sort}` : null;
  try {
    const data = await fetch(
      `https://fakestoreapi.com/products/category/${category+search}`
    );
    return data.json();
  } catch (error) {
    throw new Error("Similar products could not be fetched!");
  }
};

const Category = async ({ params: { category }, searchParams }) => {
  const products = await getData(category, searchParams);

  if (products.length === 0 ) {
   notFound()
  }

  return (
    <Fragment>
      <SortProducts />
      <ProductContainer>
        {products.map((e) => {
          return <ProductCard products={e} />;
        })}
      </ProductContainer>
    </Fragment>
  );
};

export default Category;
