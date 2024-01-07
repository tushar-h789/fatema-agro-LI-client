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
import UsersContactList from "../pages/Dashboard/UsersContactList/UsersContactList";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpdatedItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import UsersQuestion from "../pages/Dashboard/UsersQuestion/UsersQuestion";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/productBuyContact",
        element: <ProductBuyContact />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      //normal user route
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "dashboardCart",
        element: <DashboardCart />,
      },

      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdatedItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "usersContact",
        element: (
          <AdminRoute>
            <UsersContactList />
          </AdminRoute>
        ),
      },
      {
        path: "orderList",
        element: (
          <AdminRoute>
            <OrderList />
          </AdminRoute>
        ),
      },
      {
        path: "UsersQuestion",
        element: (
          <AdminRoute>
            <UsersQuestion />
          </AdminRoute>
        ),
      },
    ],
  },
]);
