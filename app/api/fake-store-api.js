export async function getAllProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("An error occurred while fetching the data.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Failed to feeeeeetch products: ${error.message}`);
  }
}

export async function getCategoryProduct(category) {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + category
    );

    if (!response.ok) {
      throw new Error("An error occurred while fetching the data.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Failed to feeeeeetch products: ${error.message}`);
  }
}
