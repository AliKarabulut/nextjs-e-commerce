import ProductCard from "@/component/product-card/product-card.js";
import SingleImageCard from "@/component/singleImageCard";
import Star from "@/component/star";
import { getSingleProduct } from "@/app/api/singleProducts/route";
import { getLimitedResults } from "@/app/api/similarProducts/route";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./singleProduct.module.css";

const SingleProductPage = async ({ params: { id } }) => {
  const products = await getSingleProduct(id);
  const limitedResults = await getLimitedResults();
  return (
    <div className={styles.singleProductsWrapper}>
      <div className={styles.category}></div>
      <div className={styles.productContainer}>
        <SingleImageCard image={products.image} title={products.title} />
        <div className={styles.productDetailContainer}>
          <h1 className={styles.title}>{products.title}</h1>
          <div className={styles.starWrapper}>
            <Star rate={products.rating.rate}></Star>
            <div>{products.rating.count} Değerlendirme</div>
          </div>
          <div className={styles.price}>{products.price}$</div>
          <div>
            {" "}
            <button className={styles.addButton}>Sepete Ekle</button>
            <button>
              <AiOutlineHeart />
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
            return <ProductCard products={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
