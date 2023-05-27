export async function userLogin(username, password) {
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

    return await res.json();
  } catch (error) {
    throw new Error("Kayıt olurken bir hata oluştu.");
  }
}
