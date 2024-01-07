import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { user } = useAuth();
  const [isAdmin] = useAdmin();

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const navOptions = (
    <>
      <li className="font-roboto">
        <NavLink to="/">হোম</NavLink>
      </li>
      <li className="mx-2 font-roboto">
        <NavLink to="/gur">খেজুরের গুড়</NavLink>
      </li>
      <li className="font-roboto">
        <NavLink to="/sorisaTel">সরিষার তেল</NavLink>
      </li>
      <li className="font-roboto">
        <NavLink to="/cart">কার্ড</NavLink>
      </li>
      <li className="font-roboto font-semibold">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <div className="hidden md:block">
        {user && isAdmin && (
          <li className="font-roboto font-bold">
            <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
          </li>
        )}
        {user && !isAdmin && (
          <li className="font-roboto font-bold">
            <NavLink to="/dashboard/userHome">Dashboard</NavLink>
          </li>
        )}
      </div>
    </>
  );

  return (
    <div className="navbar bg-slate-100 rounded flex items-center">
      <div className="navbar-start flex items-center">
        <div
          className="absolute"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="btn btn-outline">সকল ক্যাটাগরী</button>

          <div className="absolute w-52">
            {isDropdownVisible && (
              <ul
                tabIndex={0}
                className="relative menu menu-sm dropdown-content  z-[1] p-2  bg-slate-100 "
              >
                <div className="p-1 ">
                  <li>
                    <Link to="/sorisaTel">সরিষা তেল</Link>
                  </li>
                  <li className="my-1">
                    <Link to="/gur">খেজুর গুড় </Link>
                  </li>
                  <li>
                    <Link to="">মসলা- গুড়া মরিচ - হলুদ</Link>
                  </li>
                  <li className="my-1">
                    <Link to="">গুড়া</Link>
                  </li>
                  <li>
                    <Link to="">ঘি</Link>
                  </li>
                  <li className="my-1">
                    <Link to="">মধু</Link>
                  </li>
                  <li>
                    <Link to="">আম</Link>
                  </li>
                  <li className="my-1">
                    <Link to="">আচার</Link>
                  </li>
                  <li>
                    <Link to="">কুমড়া বড়ি</Link>
                  </li>
                  <li className="my-1">
                    <Link to="">চাল</Link>
                  </li>
                  <li>
                    <Link to="">গরু</Link>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </div>
        
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="md:hidden block navbar-end text-end mr-2">
          {user && isAdmin && (
            <button className="font-roboto font-bold btn btn-outline">
              <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
            </button>
          )}
          {user && !isAdmin && (
            <button className="font-roboto font-bold">
              <NavLink to="/dashboard/userHome">Dashboard</NavLink>
            </button>
          )}
        </div>


      <div className="navbar-end lg:flex gap-6 hidden ">
        <div className="flex justify-center items-center gap-1">
          <FaPhone className="text-xl" />
          <a className="font-semibold font-roboto" href="tel:+8801719355375">
            +8801719355375
          </a>
        </div>
        <div className="flex justify-center items-center gap-1">
          <AiOutlineCustomerService className="text-2xl" />
          <Link to="/contact">
            <h3 className="font-semibold font-roboto">কাস্টমার কেয়ার</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
