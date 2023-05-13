import Skeleton from "@/component/skeleton/skeleton";
import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.homePageWrapper}>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
    </div>
  );
}
