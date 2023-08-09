import React from "react";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Nav from "./components/Nav";
import HomeShop from "./pages/HomeShop";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
// import Cart from "./pages/Cart1";
import { productsData, techsData } from "./api/Api";
import Product from "./components/Product";
// import Login from "./pages/Login";
import Shops from "./pages/Shops";
import HomeTech from "./pages/HomeTech";
import Tech from "./components/Tech";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

// БУДЕТ ОТОБРАЖАТЬСЯ НА КАЖДОЙ СТРАНИЦЕ

const Layout = () => {
  return (
    <div>
      <Nav />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/shop",
        element: <HomeShop />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },

      {
        path: "/tech",
        element: <HomeTech />,
        loader: techsData,
      },
      {
        path: "product/:id",
        element: <Tech />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
      {/* <Header />
      <Home />
      <Footer /> */}
    </div>
  );
}

export default App;
