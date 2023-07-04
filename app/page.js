import ProductCard from "@/component/product-card/product-card.js";
import ProductContainer from "@/component/product-container/product-container";
import SortProducts from "@/component/sortProducts";
import { Fragment } from "react";

const getData = async (search = "") => {
  const searchParams = search ? `?sort=${search.sort}` : null;
  try {
    const data = await fetch(
      `https://fakestoreapi.com/products${searchParams}`
    );
    return data.json();
  } catch (error) {
    throw new Error("Similar products could not be fetched!");
  }
};

const MainPage = async ({ searchParams }) => {
  const products = await getData(searchParams);
  console.log(searchParams.s);
  return (
    <Fragment>
      <SortProducts />
      <ProductContainer>
        {products.map((e) => {
          return <ProductCard products={e} key={e.id}/>;
        })}
      </ProductContainer>
    </Fragment>
  );
};

export default MainPage;
