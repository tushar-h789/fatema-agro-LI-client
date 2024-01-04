import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { user } = useAuth();

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
      {user && (
        <li className="font-roboto font-bold">
          <NavLink to="/dashboard/dashboardCart">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="">
          <div
            className="absolute"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="btn btn-outline btn-warning font-roboto">
              সকল ক্যাটাগরী
            </button>
            {isDropdownVisible && (
              <ul
                tabIndex={0}
                className="relative menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div className="p-1 font-roboto">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* {navOptions} */}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end lg:flex gap-6 hidden lg:block">
        <div className="flex justify-center items-center gap-1">
          <FaPhone className="text-xl" />
          <p className="font-semibold font-roboto">+880 1719355375</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <AiOutlineCustomerService className="text-2xl" />
          <h3 className="font-semibold font-roboto">কাস্টমার কেয়ার</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
