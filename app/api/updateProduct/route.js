import { NextResponse } from "next/server";

export async function PATCH(request) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const { id, productId, quantity } = await request.json();

  try {
    const res = await fetch("https://fakestoreapi.com/carts/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        date: formattedDate,
        products: [{ productId: productId, quantity: quantity }],
      }),
    });
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    throw new Error("Register failed!");
  }
}
