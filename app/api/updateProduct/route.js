import { NextResponse } from "next/server";

// export async function PUT(request) {
//   const currentDate = new Date();
//   const formattedDate = currentDate.toISOString().split("T")[0];
//   const { id, cartItems } = await request.json();

//   try {
//     const res = await fetch("https://fakestoreapi.com/carts/" + id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId: id,
//         date: formattedDate,
//         products: cartItems,
//       }),
//     });
//     const data = await res.json();
//     return NextResponse.json({ data });
//   } catch (error) {
//     return NextResponse.json({ error: error.message });
//   }
// }

export async function PUT(request) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const { id, products } = await request.json();

  try {
    const res = await fetch("https://fakestoreapi.com/carts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        date: formattedDate,
        products: products,
      }),
    });
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
