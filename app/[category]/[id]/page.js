import ProductCard from "@/component/product-card/product-card.js";
import SingleImageCard from "@/component/singleImageCard";
import Star from "@/component/star";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./singleProduct.module.css";
import AddCartButton from "@/component/addCartButton";

const getSingleProduct = async (id) => {
  try {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    return data.json();
  } catch (error) {
    throw new Error("Product could not be fetched!");
  }
};

const getSimilarProducts = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products?limit=13");
    return data.json();
  } catch (error) {
    throw new Error("Similar products could not be fetched!");
  }
};

const SingleProductPage = async ({ params: { id } }) => {
  const products = await getSingleProduct(id);
  const limitedResults = await getSimilarProducts();

  return (
    <div className={styles.singleProductsWrapper}>
      <div className={styles.productContainer}>
        <SingleImageCard image={products.image} title={products.title} />
        <div className={styles.productDetailContainer}>
          <h1 className={styles.title}>{products.title}</h1>
          <div className={styles.starWrapper}>
            <Star rate={products.rating.rate}></Star>
            <div>{products.rating.count} Rating</div>
          </div>
          <div className={styles.price}>{products.price}$</div>
          <div className={styles.butonWrapper}>
            {" "}
            <AddCartButton productId={products.id} />
            <button>
              <AiOutlineHeart className={styles.addFavorites} />
            </button>
          </div>
          <div className={styles.seperator}>
            <hr className={styles.line} />
          </div>
          <div className={styles.description}>{products.description}</div>
        </div>
      </div>
      <div className={styles.smilarProductsContainer}>
        <hr className={styles.line} />
        <h2 className={styles.smilarTitle}>Benzer Ürünler</h2>
        <div className={styles.similarProducts}>
          {" "}
          {limitedResults.map((e) => {
            return <ProductCard products={e} key={e.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
