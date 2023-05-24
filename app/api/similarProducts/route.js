export async function getLimitedResults() {
    //Api benzer ürünleri listeleyebileceğim bir link sunmuyor
    // bunu simüle edebilmek için limitli ürün çekme linkini kullanacağım
    // kategori ürünlerini çekebilirim ama yeterli ürün yok kategorilerde
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=13");
  
      if (!response.ok) {
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      throw new Error("An error occurred while fetching the data.");
    }
  }
  