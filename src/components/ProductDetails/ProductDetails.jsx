import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import ProductsReview from "../ProductsReview/ProductsReview";
import ProductsReviewShow from "../ProductsReview/ProductsReviewShow";
import ProductsQuestion from "../ProductsQuestion/ProductsQuestion";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const { title, details, image, price, quantity, rating, _id, category } =
    useLoaderData();

 
  // question part end

  // review part start

  // review part end

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const updatePrice = price * count;
  const updateQuantity = quantity * count;

  // comments part start
  // const { data: comments = [], refetch } = useQuery({
  //   queryKey: ["comment"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/products/${_id}/comments`);
  //     return res.data;
  //   },
  // });

  // const { register: commentRegister, handleSubmit: commentSubmit } = useForm();
  // const handleAddComment = async (commentData) => {
  //   const newComment = commentData.comment;
  //   const res = await axiosPublic.post(`/products/${_id}/comments`, {
  //     text: newComment,
  //   });
  //   if (res.data.insertedId) {
  //     refetch();
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Your comment submitted!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };
  // comments part end

  return (
    <div className="p-8">
      <div className="flex items-center gap-20">
        {/* products details part start */}
        <div className="">
          <img
            src={image}
            alt="product"
            className="border border-orange-600 rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg">
            দামঃ <strong className="">{updatePrice}</strong> টাকা
          </p>
          <p>
            পরিমানঃ <strong>{updateQuantity} কেজি</strong>
          </p>

          <div className=" mt-10">
            <button
              onClick={handleDecrement}
              className="btn btn-sm btn-outline"
            >
              <FaMinus />{" "}
            </button>
            <button className="btn btn-sm btn-outline px-10 mx-2 text-lg">
              {count}
            </button>

            <button
              onClick={handleIncrement}
              className="btn btn-sm btn-outline"
            >
              <FaPlus />{" "}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/productBuyContact">
              <button className="btn  btn-outline mt-2 px-14">
                এখান থেকেই কিনুন
              </button>
            </Link>
          </div>
        </div>

        {/* products details part end */}
      </div>

      {/* description part start */}
      <div className="my-4">
        <h2 className="text-3xl font-bold ">Description</h2>
        <div className="divider"></div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="mr-20 my-2">{details}</p>
        </div>
        {/* star review start */}
        <ProductsReviewShow />
        {/* star review end */}
      </div>
      {/* description part end */}

      <div className="divider"></div>

      {/* Users question part start */}
      <ProductsQuestion />
      {/* your reviews part start */}
      <ProductsReview />
      {/* your reviews part end */}
    </div>
  );
};

export default ProductDetails;
