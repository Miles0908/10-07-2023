import { useEffect, useState } from "react";
import { useLocation , useNavigate, useParams} from "react-router-dom";
import "../../styles/routes/product.scss"

export default function Products() {
    const navigate= useNavigate();
  const location = useLocation();
  const params = useParams();
  const [productData,setProductData]=useState({})

  const onHandleCLick= ()=>{
     navigate("/product")
  }

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${params.id}`)
    .then((res) => res.json())
    .then((data) => setProductData(data));
}, []);

  return <div className="Products">{productData.title}
  <img src={productData.thumbnail} alt={productData.title} />
  <p>{productData.price}$</p>
  <button className="Products__btn" onClick={onHandleCLick}>indietro</button>
  </div>;
 
}
