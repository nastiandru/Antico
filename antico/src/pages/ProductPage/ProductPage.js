import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../products'; 

function ProductPage() {
  const { productId } = useParams();
  const productDetails = products.find(product => product.id.toString() === productId);

  if (!productDetails) {
    return <p>Produkt nie znaleziony.</p>;
  }

  return (
    <div>
      <h2>Szczegóły produktu</h2>
      <p>Nazwa: {productDetails.name}</p>
      <p>Cena: {productDetails.price} zł</p>
    </div>
  );
}

export default ProductPage;
  // const [productDetails, setProductDetails] = useState(null);

  // useEffect(() => {
    // Tutaj możesz wykonać zapytanie do backendu lub użyć innego źródła danych,
    // aby pobrać informacje o produkcie na podstawie `productId`.

    // Przykład zapytania do API:
    // fetch(`/api/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => setProductDetails(data));

    // Upewnij się, że Twoje API zwraca dane produktu na podstawie `productId`.
  // }, [productId]);

  // if (!productDetails) {
  //   // Możesz wyświetlić komunikat "Ładowanie" lub coś podobnego, jeśli dane są w trakcie pobierania.
  //   return <p>Ładowanie...</p>;
  // }
