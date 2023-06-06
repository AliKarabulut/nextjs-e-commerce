export async function getUserCart(id) {
  const products = [];
  try {
    const response = await fetch("https://fakestoreapi.com/carts/user/" + id);

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

export async function getUserCartWithImage(id) {
  const products = await getUserCart(id);
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  try {
    for (let product of products) {
      product.image = data.image;
      product.title = data.title;
      product.price = data.price;
    }
  } catch (error) {
    throw new Error("An error occurred while fetching the data.");
  }
  return products;
}
