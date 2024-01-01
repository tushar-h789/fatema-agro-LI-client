import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import profile from "../../../assets/others/profile.png";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsFillCartCheckFill } from "react-icons/bs";


const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(updateUserProfile);
  const handleLogOut = () => {
    loading;
    logOut();
    navigate("/login");
  };

  return (
    <>
      <div className="navbar bg-base-100 grid grid-cols-1  md:grid-cols-3">
        <div className="lg:flex-1 lg:w-3/12 mx-auto md:mx-0">
          <Link>
            <img src={logo} width={100} height={100} alt="" />
          </Link>
        </div>

        <div className="w-6/12 mx-auto md:mx-0 my-3 md:my-0">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="পণ্য সার্চ করুন "
              className="input input-bordered  input-warning lg:max-w-lg"
            />
          </div>
        </div>

        <div className="flex justify-end  mx-auto md:mx-0 ">
          <div className="flex gap-2 font-roboto">
            <div>
              <button className="btn">
              <BsFillCartCheckFill />
                <div className="badge badge-secondary">+0</div>
              </button>
            </div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-warning"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-outline btn-warning">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-outline btn-warning">
                    Registration
                  </button>
                </Link>
              </>
            )}
          </div>

          <div>
            <h2 className="font-bold text-lg mx-2">
              {user ? user.displayName : "Guest"}
            </h2>
          </div>

          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="profile image default" src={profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 font-roboto z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li className="font-bold">{user?.email}</li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
