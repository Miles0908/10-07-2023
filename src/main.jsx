import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "./routes/error.jsx";
import Products from "./routes/product/products.jsx";
import ProductStatic from "./routes/product/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/home/index.jsx";
import About from "./routes/about/about.jsx";
import Contacts from "./routes/contacts/contacts.jsx";
import Locations from "./routes/locations/locations.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/welcome",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/product",
        element: <ProductStatic />,
      },
      {
        path: "/product/:id",
        element: <Products />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
