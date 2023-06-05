import { NextResponse } from "next/server";
export async function POST(request) {
  let response = new NextResponse();

  const { username, password } = await request.json();
  try {
    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    const data = await res.json();
    response.cookies.set("id", data.id);
    return response;
  } catch (error) {
    throw new Error("Register failed!");
  }
}
