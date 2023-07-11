import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import App from "../App";
import Home from "./home";
import Product from "./product";
import Locations from "./locations/locations";
import Products from "./product/products";
import Error from "./error";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />} errorElement={<Error />}>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/welcome" element={<Home />}></Route> */}
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<Products />}></Route>
      <Route path="/Locations" element={<Locations />}></Route>
    </Route>
  )
);
