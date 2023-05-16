import Skeleton from "@/component/skeleton/skeleton";
import ProductContainer from "@/component/product-container/product-container";

export default function Loading() {
  return (
    <ProductContainer>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
    </ProductContainer>
  );
}
