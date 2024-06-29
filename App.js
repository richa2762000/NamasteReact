import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header/Header";
import Body from "./src/Component/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Component/About/About";
import Contact from "./src/Component/Contact/Contact";
import Error from "./src/Component/Error";
import Cart from "./src/Component/Cart/Cart";
import Restlist from "./src/Component/Restaurant/DifferentRestList/Restlist";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", //:resid is dynamic so it can be change according to the rest
        element: <Restlist />,
      },
    ],
    errorElement: <Error />,
  },
  // if we dont want to show header so we don't need to add that particular page in the childern.
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
