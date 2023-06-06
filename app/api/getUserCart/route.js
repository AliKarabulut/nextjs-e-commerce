export async function getUserCartWithImage(id) {
  const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
  const data = await response.json();
  try {
    for (let obj of data) {
      for (let product of obj.products) {
        const productResponse = await fetch(
          `https://fakestoreapi.com/products/${product.productId}`
        );
        const productData = await productResponse.json();
        product.image = productData.image;
        product.title = productData.title;
        product.price = productData.price;
      }
    }
  } catch (error) {
    throw new Error("An error occurred while fetching the data.");
  }
  return data;
}
