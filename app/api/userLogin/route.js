import { NextResponse } from 'next/server';
export async function POST(request) {
  let response = new NextResponse()
  const { username, password } = await request.json();
  try {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });

    const data = await res.json();
    response.cookies.set('token', data.token)
    response.cookies.set('id', 1)
    return response
  } catch (error) {
    throw new Error("Login failed!");
  }
}
