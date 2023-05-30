export async function userRegister(username, password) {
  // I have to do hardcode body because fakestoreapi.com want body like this but we have just email and password for register
  try {
    const res = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: username,
        username: "johnd",
        password: password,
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    });

    const data = await res.json();
    if (data.id) {
      localStorage.setItem("id", data.id);
    }
    return data 
  } catch (error) {
    throw new Error("Register failed!");
  }
}
