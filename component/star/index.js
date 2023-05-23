import { AiFillStar } from "react-icons/ai";
import styles from "./star.module.css";

const Star = ({ rate }) => {
  const yellow = rate * 20;
  const fullStars = Math.floor(yellow / 20);
  const hasHalfStar = yellow % 20 !== 0;

  return (
    <div  className={styles.ratingWrapper}>
      <div className={styles.rating}>
        <div className={styles.starWrapper}>
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} className={styles.star} />
          ))}
        </div>
        <div className={styles.starWrapper}>
          {[...Array(fullStars)].map((_, index) => (
            <AiFillStar key={index} className={styles.fullStar} />
          ))}
          {hasHalfStar ? (
            <div
              className={styles.halfStar}
              style={{ "--width": (yellow % 20) + "%" }}
            >
              <AiFillStar className={styles.fullStar} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Star;
