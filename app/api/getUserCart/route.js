export async function getUserCartWithImage(id) {
  try {
    const response = await fetch("https://fakestoreapi.com/carts/user/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching the data.");
  }
}
