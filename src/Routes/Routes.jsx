import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import GurProducts from "../pages/GurProducts/GurProducts/GurProducts";
import SorisaTel from "../pages/SorisaTel/SorisaTel/SorisaTel";
import Registration from "../pages/Login/Registration/Registration";
import Login from "../pages/Login/Login/Login";
import Cart from "../pages/Shared/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import DashboardCart from "../pages/Dashboard/DashboardCart/DashboardCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductBuyContact from "../components/ProductDetails/ProductBuyContact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";

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
      {
        path: '/productDetails/:id',
        element: <ProductDetails/>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/productBuyContact',
        element: <ProductBuyContact/>
      },
      {
        path: '/aboutUs',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      {
        path: "dashboardCart",
        element: <DashboardCart />,
      },
      {
        path: 'userHome',
        element:<UserHome/>
      },

      // admin routes
      {
        path: 'allUser', 
        element: <AllUser/>
      }
    ],
  },
]);
