import { cookies } from 'next/headers';

export async function userLogin(username, password) {
  // for demo because fakestoreapi.com does not have a mail and password for login
  if (username === "mail@mail.com" && password === "123456") {
    username = "mor_2314";
    password = "83r5^_";
  }

  try {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await res.json();
    if (data.token) {
      cookies().set('token', 1);
    }
    return data;
  } catch (error) {
    throw new Error("Login failed!");
  }
}
