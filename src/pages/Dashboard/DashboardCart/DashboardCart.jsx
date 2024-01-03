import React from "react";
import useCart from "../../../hooks/useCart";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashboardCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${item}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div className="flex justify-evenly p-8">
        <h2 className="text-2xl">Items: {cart.length}</h2>
        <h2 className="text-2xl">Total Price: {totalPrice} BDT</h2>
        <button className="btn btn-warning">Pay Naw</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    পরিমানঃ {item.quantity} কেজি
                  </span>
                </td>
                <td>BDT: {item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs bg-orange-500 hover:bg-orange-700 text-white">
                    <FaEdit className="text-lg " />{" "}
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs bg-red-500 hover:bg-red-700 text-white ml-2"
                  >
                    <MdOutlineDeleteOutline className="text-lg" />{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default DashboardCart;
