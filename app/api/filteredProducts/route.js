export async function getFilteredProduct(name) {
  console.log("çağırıldı", name);
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );

    return filteredData;
  } catch (error) {
    throw new Error("Ürünler getirilirken sorun oluştu!");
  }
}
