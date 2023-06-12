import Link from "next/link";
import styles from "./Navbar.module.css";
import Categories from "./Categories";
import LoginButton from "./user/Login";
import SearchBar from "./searchBar";
import { cookies } from "next/headers";
import { store } from "@/stores";
import { userProfile } from "@/stores/user-profile";

const getData = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products/categories");
    return data.json();
  } catch (error) {
    throw new Error("Categories name could not be fetched!");
  }
};
const Navbar = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  if (id) {
    await store.dispatch(userProfile(id.value));
  }

  const { profile } = store.getState().profile;
  const categories = await getData();

  return (
    <div className={styles.navContainer}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          E-Commerce
        </Link>
        <SearchBar></SearchBar>
        <LoginButton profile={profile} />
      </header>
      <Categories categories={categories} />
    </div>
  );
};

export default Navbar;
