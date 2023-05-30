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
      localStorage.setItem("token", data.token);
      // I need id for get cart because i can't get cart with token
      localStorage.setItem("id", 1);
    }
    return data;
  } catch (error) {
    throw new Error("Login failed!");
  }
}
