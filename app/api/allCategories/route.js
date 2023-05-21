export async function getAllCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    return await response.json();
  } catch (error) {
    throw new Error("Kategoriler alınırken sorun oluştu!");
  }
}
