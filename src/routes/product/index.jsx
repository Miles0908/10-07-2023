import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/routes/ProductStatic.scss";
export default function () {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const onHandleClick = (id) => navigate(`/product/${id}`);

  const onProductRender = () => {
    return products?.map(({ thumbnail, title, id }) => (
      <img
        key={title}
        src={thumbnail}
        alt={title}
        onClick={() => onHandleClick(id)}
      />
    ));
  };

  return (
    <div className="ProductsStatic">
      {products.length ? onProductRender() : <p>Loading...</p>}
    </div>
  );
}
