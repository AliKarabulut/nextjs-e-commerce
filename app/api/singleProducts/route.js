import { notFound } from 'next/navigation';

export async function getSingleProduct(id) {
  try {
    if (!id) {
      throw new Error("Ürün adı boş bırakılamaz");
    }

    const res = await fetch("https://fakestoreapi.com/products/" + id);

    return await res.json();
  } catch (error) {
   notFound();
  }
}
