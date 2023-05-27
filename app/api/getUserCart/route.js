import { getSingleProduct } from "../singleProducts/route";

export async function getUserCart() {
  const products = [];
  try {
    const response = await fetch("https://fakestoreapi.com/carts/user/3");

    if (!response.ok) {
      throw new Error("An error occurred while fetching the data.");
    }

    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      data[i].products.forEach((item) => {
        const product = {};
        product.productId = item.productId;
        product.quantity = item.quantity;
        product.date = new Date(data[i].date).toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        product.image = "item.image;";
        product.title = " item.title;";
        products.push(product);
      });
    }
  } catch (error) {
    throw new Error("An error occurred while fetching the data.");
  }
  return products;
}

export async function getUserCartWithImage() {
  const products = await getUserCart();
  try {
    for (let product of products) {
      const response = await getSingleProduct(product.productId);
      product.image = response.image;
      product.title = response.title;
      product.price = response.price;
    }
  } catch (error) {
    throw new Error("An error occurred while fetching the data.");
  }

  return products;
}
