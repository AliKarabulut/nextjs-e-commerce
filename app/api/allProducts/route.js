export async function getAllProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching the data.");
  }
}
