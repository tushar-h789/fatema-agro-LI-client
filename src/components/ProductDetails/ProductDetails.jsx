import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const { title, details, image, price, quantity, rating, _id, category } =
    useLoaderData();
  const { user } = useAuth();

  // ask question sent DB part start
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const questionInfo = {
      name: user.displayName,
      question: data.question,
    };
    const res = await axiosPublic.post(`/usersQuestion/${_id}`, questionInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your question submit !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };
  // refetch data show

  // answer to the question part start
  const isAdmin = user && user.role === "admin";

  // answer to the question part end

  const { data: question = [], refetch } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      const res = await axiosPublic.get("/usersQuestion");
      console.log(res.data);
      refetch();
      return res.data;
    },
  });

  // ask question sent DB part end
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

  return (
    <div className="p-8">
      <div className="flex items-center gap-20">
        {/* image part start */}

        <div className="">
          <img
            src={image}
            alt="product"
            className="border border-orange-600 rounded-xl"
          />
        </div>
        {/* image part end */}

        {/* order confirmation part start */}
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
        {/* order confirmation part end */}
      </div>

      {/* Description part start */}
      <div className="my-4">
        <h2 className="text-3xl font-bold ">Description</h2>
        <div className="divider"></div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="mr-20 my-2">{details}</p>
        </div>
        <div className="my-4">
          <h2 className="text-3xl font-bold">Reviews</h2>
          <div className="divider"></div>
          {/* rating */}
          <div className="mx-auto text-center">
            <p className="text-2xl my-2">এই প্রোডাক্টের মোট রেটিং</p>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              readOnly
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* Description part end */}
      {/* Users question part start */}
      <div>
        <h2 className="text-2xl">
          এই প্রোডাক্ট সম্পর্কে প্রশ্ন ও উত্তর: {question.length}
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Your question</span>
            </div>
            <div>
              <input
                {...register("question", { required: true })}
                type="text"
                name="question"
                placeholder="Your question here"
                className="input input-bordered w-full max-w-3xl"
              />
              {errors.question && (
                <span className="text-white bg-red-500 rounded mt-1">
                  Please enter your question !
                </span>
              )}
              <input
                className="btn btn-outline max-w-sm"
                type="submit"
                value="Ask Question"
              />
            </div>
          </label>
        </form>
        {/* question show part start */}
        <div>
          {question.map((item) => (
            <ul key={item._id}>
              <li>
                <div className="border p-1 my-2 bg-slate-100 rounded-lg">
                  <p className="font-bold">Name: {item.name}</p>
                  <p>
                    <strong>Q:</strong> {item.question}
                  </p>
                  <p>
                    <strong>A:</strong> {item.answer}
                  </p>
                </div>
              </li>
            </ul>
          ))}
        </div>
        {/* answer show part start */}
        {/* <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isAdmin && ( // conditionally render the input box for admins
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Your answer</span>
              </div>
              <div>
                <input
                  {...register("answer", { required: true })}
                  type="text"
                  name="answer"
                  placeholder="Your answer here"
                  className="input input-bordered w-full max-w-3xl"
                />
                {errors.answer && (
                  <span className="text-white bg-red-500 rounded mt-1">
                    Please enter your answer!
                  </span>
                )}
                <input
                  className="btn btn-outline max-w-sm"
                  type="submit"
                  value="Submit Answer"
                />
              </div>
            </label>
          )}
        </form>
        </div> */}
        {/* question show part end */}
      </div>
      {/* Users question part end */}
    </div>
  );
};

export default ProductDetails;
