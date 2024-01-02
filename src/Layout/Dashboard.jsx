import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBookDead, FaHome } from "react-icons/fa";
import { FaBars, FaBook, FaCartShopping, FaFileContract } from "react-icons/fa6";
import DashboardCart from "../pages/Dashboard/DashboardCart/DashboardCart";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet/>
          
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="text-lg font-bold mt-2">
              <NavLink to='/dashboard/userHome'><FaHome className="text-2xl"/> User Home</NavLink>
            </li>
            <li className="text-lg font-bold mt-2">
              <NavLink to='/dashboard/paymentHistory'><FaBook className="text-2xl"/> Payment History</NavLink>
            </li>
            <li className="text-lg font-bold mt-2">
              <NavLink to='/dashboard/dashboardCart'><FaCartShopping className="text-2xl"/> My Cart <button className="btn btn-warning btn-sm">{cart.length}</button></NavLink>
            </li>
            <li className="text-lg font-bold mt-2">
              <NavLink to='/dashboard/userHome'><FaBookDead className="text-2xl"/> My Booking</NavLink>
            </li>
            
          <div className="divider"></div>
          <li className="text-lg font-bold mt-2">
              <NavLink to='/'><FaHome className="text-2xl"/> Home</NavLink>
            </li>
          <li className="text-lg font-bold mt-2">
              <NavLink to='/contact'><FaFileContract className="text-2xl"/> Contact</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
