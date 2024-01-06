import React from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

const ProductsQuestion = () => {
  const { title, details, image, price, quantity, rating, _id, category } =
    useLoaderData();

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
    queryFn: async () => {
      const res = await axiosPublic.get("/usersQuestion");
      return res.data;
    },
  });

  const filterUsersQuestions = question.filter(
    (item) => item.name === title && item.quantity === quantity
  );
  console.log(filterUsersQuestions);

  // question part start
  const onSubmit = async (data) => {
    const questionInfo = {
      question: data.question,
      name: title,
      quantity: quantity,
    };

     axiosPublic.post("/usersQuestion", questionInfo)
     .then(res =>{
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
     })
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl">
          এই প্রোডাক্ট সম্পর্কে প্রশ্ন ও উত্তর: {filterUsersQuestions.length}
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
                className="input input-bordered w-full max-w-3xl"
              />
              {errors.question && (
                <span className="text-white bg-red-500 rounded mt-1">
                  Please enter your question!
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

        <div>
          {filterUsersQuestions.map((userQuestion) => (
            <ul key={userQuestion._id}>
              <li>
                <div className="border p-1 my-2 bg-slate-100 rounded-lg">
                  <p className="font-bold">Name: </p>
                  <p>
                    <strong>Q:</strong> {userQuestion.question}
                  </p>
                  <p>
                    <strong>A:</strong> {userQuestion.answer}
                  </p>
                </div>
              </li>
            </ul>
          ))}
        </div>

        {/* Comments Section */}
        {/* <div>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>{comment.text}</li>
            ))}
          </ul>
        </div> */}

        {/* <div>
          <h3>Add a Comment</h3>
          <form onSubmit={commentSubmit(handleAddComment)}>
            <textarea
              {...commentRegister("comment", { required: true })}
              placeholder="Type your comment here..."
            />
            {errors.comment && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your comment!
              </span>
            )}
            <button type="submit">Submit Comment</button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsQuestion;
