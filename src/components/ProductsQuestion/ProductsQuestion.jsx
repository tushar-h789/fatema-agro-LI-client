import React from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import profile from "../../assets/others/profile.png";
import useAuth from "../../hooks/useAuth";

const ProductsQuestion = () => {
  const { title, quantity } = useLoaderData();
  const { user, loading } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  //fetch questions
  const { data: question = [], refetch } = useQuery({
    queryKey: ["question"],
    enabled: loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/usersQuestion");
      return res.data;
    },
  });

  const filterUsersQuestions = question.filter(
    (item) => item.name === title && item.quantity === quantity
  );
  // console.log(filterUsersQuestions);
  // question part start
  const onSubmit = async (data) => {
    const questionInfo = {
      question: data.question,
      name: title,
      quantity: quantity,
    };

    const res = await axiosPublic.post("/usersQuestion", questionInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      refetch();
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your question submit!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl">
          এই পণ্য সম্পর্কে প্রশ্ন ও উত্তর: {filterUsersQuestions.length}
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Your question:</span>
            </div>
            <div>
              <input
                {...register("question", { required: true })}
                type="text"
                name="question"
                placeholder="Your question here"
                className="input input-bordered w-full max-w-3xl bg-slate-100"
              />
              {errors.question && (
                <span className="text-white bg-red-500 rounded mt-1">
                  Please enter your question!
                </span>
              )}
              <input
                className="btn btn-outline max-w-sm my-2 md:my-0 md:ml-2 bg-slate-100"
                type="submit"
                value="Ask Question"
              />
            </div>
          </label>
        </form>

        <div>
          {filterUsersQuestions.map((userQuestion) => (
            <ul key={userQuestion._id}>
              <li>
                <div className="border px-2 py-2 my-2 bg-slate-100 rounded-lg shadow">
                  <p className="font-bold">{user?.displayName}</p>
                  <div className="flex items-center gap-2">
                    <img
                      alt="profile image default"
                      src={profile}
                      className="rounded-full w-10 h-10"
                    />
                    <div>
                      <strong>Q:</strong> {userQuestion.question}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      alt="profile image default"
                      src={profile}
                      className="rounded-full w-10 h-10"
                    />
                    <strong>A:</strong> {userQuestion.answer}
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsQuestion;
