import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import GurProducts from "../pages/GurProducts/GurProducts/GurProducts";
import SorisaTel from "../pages/SorisaTel/SorisaTel/SorisaTel";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/gur',
          element: <GurProducts/>
        },
        {
          path: '/sorisaTel',
          element: <SorisaTel/>
        }
    ]
  },
]);