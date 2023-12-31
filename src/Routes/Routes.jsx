import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import GurProducts from "../pages/GurProducts/GurProducts/GurProducts";
import SorisaTel from "../pages/SorisaTel/SorisaTel/SorisaTel";
import Registration from "../pages/Login/Registration/Registration";
import Login from "../pages/Login/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gur",
        element: <GurProducts />,
      },
      {
        path: "/sorisaTel",
        element: <SorisaTel />,
      },
    ],
  },
]);
