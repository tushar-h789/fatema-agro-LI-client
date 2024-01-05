import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { title, image, price, quantity, _id } = item;
  //call useAuth hook
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    // console.log(item, user.email);
    if (user && user.email) {
      //TODO: add cart item to the database
      const cartItem = {
        productId: _id,
        email: user.email,
        title,
        image,
        price,
        quantity
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} কার্ডে যোগ হয়েছে`,
            showConfirmButton: false,
            timer: 2000,
          });
          //refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login then add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card card-compact w-96  bg-base-100 shadow-xl p-2 my-2 mx-auto md:mx-0 md:p-0">
        <Link to={`/productDetails/${item._id}`}>
          <figure className="h-80 rounded-xl">
            <img src={image} alt="products" className="zoom rounded-xl" />
          </figure>
          <div className="card-body font-roboto">
            <h2 className="card-title">{title}</h2>
            <p className="font-bold ">পরিমানঃ {quantity} কেজি</p>
            <p className="font-bold ">
              দামঃ <strong>৳</strong> {price}
            </p>
          </div>
        </Link>
        <div className="my-2">
          <button
            onClick={handleAddToCart}
            className="bg-slate-100 py-1 w-full rounded  text-lg font-semibold hover:bg-slate-300 hover:transition hover:duration-200 hover:ease-in-out bottom-0"
          >
            কার্ডে রাখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
