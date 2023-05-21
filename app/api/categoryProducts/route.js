export async function getCategoryProduct(category) {
  try {
    if (!category) {
      throw new Error("Kategori adı boş bırakılamaz");
    }

    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + category
    );

    return await response.json();;
  } catch (error) {
    throw new Error("Ürünler getirilirken sorun oluştu!");
  }
}
