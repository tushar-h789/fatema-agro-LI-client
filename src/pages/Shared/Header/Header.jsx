import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import profile from "../../../assets/others/profile.png";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsFillCartCheckFill } from "react-icons/bs";
import useCart from "../../../hooks/useCart";

const Header = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleLogOut = () => {
    loading;
    logOut();
    navigate("/login");
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchProduct(value);

    // Check if the trimmed value is an empty string
    if (value.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    // Filter products based on the lowercase title including the search value
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    // Update the state with the filtered products
    setFilteredProducts(filtered);
  };

  const clearSearch = () => {
    setSearchProduct("");
    setFilteredProducts([]);
  };

  const handleProductClick = (productId) => {
    // Additional logic to handle the product click, e.g., redirect to the product details page
    // You can use the navigate function from 'react-router-dom' to redirect
    navigate(`/productDetails/${productId}`); // Adjust the path based on your actual route
    clearSearch(); // Clear the search input after redirection
  };

  return (
    <>
      <div className="navbar bg-base-100 flex flex-col md:flex-row items-center">
        <div className="lg:flex-1 lg:w-3/12 mx-auto md:mx-0">
          <Link to="/">
            <img
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="rounded"
            />
          </Link>
        </div>

        <div className="w-3/4">
          {/* search option start */}
          <div className="md:w-6/12 mx-auto md:mx-0 my-3 md:my-0 ">
            <form onSubmit={handleSearch} className="form-control w-full">
              <div className="flex ">
                <input
                  onChange={handleSearch}
                  type="text"
                  name="search"
                  value={searchProduct}
                  placeholder="পণ্য সার্চ করুন "
                  className="input input-bordered  input-warning lg:max-w-lg"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-warning  btn-outline ml-2 font-bold hidden md:block"
                />
              </div>
            </form>
            {filteredProducts.length > 0 && (
              <div
                className={`absolute bg-slate-300  overflow-scroll overflow-x-hidden mb-0 mt-2 h-40 rounded-lg  z-10  md:w-96`}
              >
                {filteredProducts.map((product) => (
                  <ul
                    key={product._id}
                    onClick={() => handleProductClick(product._id)}
                    className="menu bg-slate-200 my-1 rounded-box"
                  >
                    <li>
                    <Link to={`/productDetails/${product._id}`}>
                      <div className="flex items-center ">
                        <img
                          src={product.image}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                        <p>{product.title}</p>
                      </div>
                      
                    </Link>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
          {/* search option end */}

          <div className="flex justify-end items-center mx-auto md:mx-0 ">
            <div className="flex gap-2 items-center font-roboto">
              {/* cart part start */}
              <div>
                <Link to="/dashboard/dashboardCart">
                  <button className="btn">
                    <BsFillCartCheckFill className="mr-2 text-2xl" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                </Link>
              </div>
              {/* cart part end */}
              {/* conditional rendering with LogOut part start */}
              <div className="hidden md:block">
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
                      <button className="btn btn-outline btn-warning">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="btn btn-outline btn-warning">
                        Registration
                      </button>
                    </Link>
                  </>
                )}
              </div>
              {/* conditional rendering with LogOut part end */}
            </div>

            <div className="hidden md:block">
              <h2 className="font-bold text-lg mx-2">
                {user && user.displayName}
              </h2>
            </div>

            {/* inside the profile  part start*/}

            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user ? (
                    <img alt="profile" src={user.photoURL || profile} />
                  ) : (
                    <img alt="profile image default" src={profile} />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 font-roboto z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
              >
                <li>
                  {/* display name start*/}
                  <div>
                    <h2 className="font-bold  mx-2 block md:hidden">
                      {user && user.displayName}
                    </h2>
                  </div>
                  {/* display name end*/}
                </li>
                <li className="font-bold">{user?.email}</li>
                <li>
                  {/* logOut part start*/}
                  <div className="block md:hidden">
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
                          <button className="btn btn-outline btn-warning">
                            Login
                          </button>
                        </Link>
                        <Link to="/register">
                          <button className="btn btn-outline btn-warning">
                            Registration
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                  {/* logOut part end*/}
                </li>
              </ul>
            </div>
            {/* inside the profile  part end*/}
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
