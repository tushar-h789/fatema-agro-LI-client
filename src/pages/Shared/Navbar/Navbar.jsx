import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";


const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">হোম</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/">খেজুরের গুড়</NavLink>
      </li>
      <li>
        <NavLink to="/">সরিষার তেল</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="">
          <div
            className="absolute"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="btn btn-outline btn-warning">
              সব ক্যাটাগরী
            </button>
            {isDropdownVisible && (
              <ul
                tabIndex={0}
                className="relative menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div className="p-1 ">
                <li><Link to=''>সরিষা তেল</Link></li>
                <li className="my-1"><Link to=''>খেজুর গুড় </Link></li>
                <li ><Link to=''>মসলা- গুড়া মরিচ - হলুদ</Link></li>
                <li className="my-1"><Link to=''>গুড়া</Link></li>
                <li><Link to=''>ঘি</Link></li>
                <li className="my-1"><Link to=''>মধু</Link></li>
                <li><Link to=''>আম</Link></li>
                <li className="my-1"><Link to=''>আচার</Link></li>
                <li><Link to=''>কুমড়া বড়ি</Link></li>
                <li className="my-1"><Link to=''>চাল</Link></li>
                <li><Link to=''>গরু</Link></li>
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
      <div className="navbar-end gap-6 hidden lg:block">
        <div className="flex justify-center items-center gap-1">
            <FaPhone className="text-xl"/>
            <p className="font-semibold">+880 1719355375</p>
        </div>
        <div className="flex justify-center items-center gap-1">
            <AiOutlineCustomerService className="text-2xl"/>
            <h3 className="font-semibold">কাস্টমার কেয়ার</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
