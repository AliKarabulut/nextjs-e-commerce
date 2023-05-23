import { getSingleProduct } from "@/app/api/singleProducts/route";
import Star from "@/component/star";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./singleProduct.module.css";
const SingleProductPage = async ({ params: { id } }) => {
  const products = await getSingleProduct(id);
  return (
    <div>
      <div className={styles.category}></div>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.bigImage}>
            <Image
              src={products.image}
              alt={products.title}
              width="200"
              height="200"
            />
          </div>
          <div className={styles.smallImage}>
            <Image
              src={products.image}
              alt={products.title}
              width="200"
              height="200"
            />
          </div>
        </div>
        <div className={styles.productDetailContainer}>
          <div className={styles.title}>{products.title}</div>
          <div>
            <Star rate={products.rating.rate}></Star>
            <div>{products.rating.count} Değerlendirme</div>
          </div>
          <div className={styles.price}>{products.price}$</div>
          <button className={styles.addButton}>Sepete Ekle</button>
          <button>
            <AiOutlineHeart />
          </button>
          <div className={styles.seperator}>
            <hr className={styles.line} />
          </div>
          <div className={styles.description}>{products.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
