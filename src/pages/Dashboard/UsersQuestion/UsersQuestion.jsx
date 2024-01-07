import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import profile from "../../../assets/others/profile.png";
import { MdDelete } from "react-icons/md";

const UsersQuestion = () => {
  const axiosSecure = useAxiosSecure();
  const [typeAnswer, setTypeAnswer] = useState("");

  const { data: question = [], refetch } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      const res = await axiosSecure.get("/usersQuestion");
      return res.data;
    },
  });

  const handleAnswer = async (item) => {
    const answer = {
      name: item.name,
      question: item.question,
      answer: typeAnswer,
    };
    console.log(item);
    const res = await axiosSecure.patch(`/usersQuestion/${item._id}`, answer);
    console.log(res.data);
    if (res.data.matchedCount > 0) {
      refetch();
      setTypeAnswer([]);
      form.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Submit your answer",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeleteQuestion = (item) => {
    console.log(item);
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
        axiosSecure.delete(`/usersQuestion/${item._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This Question has been deleted !",
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-8">
      <SectionTitle
        title="Users Question"
        subTitle="Uses Question and Answer here"
      ></SectionTitle>
      <h2 className="text-xl font-semibold my-4">
        Total Question: {question.length}
      </h2>
      <div>
        {question.map((item) => (
          <ul key={item._id}>
            <li>
              <div className="border px-2 py-2 my-2 bg-slate-100 rounded-lg shadow">
                <p className="font-bold">Name: {item.name}</p>
                <div className="flex items-center gap-2">
                  <img
                    alt="profile image default"
                    src={profile}
                    className="rounded-full w-10 h-10"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <strong>Q:</strong> {item.question}
                    </div>
                    <button
                      onClick={() => handleDeleteQuestion(item)}
                      className="btn btn-error mr-8 btn-outline hover:text-white bg-slate-200"
                    >
                      <MdDelete className="text-2xl " />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    alt="profile image default"
                    src={profile}
                    className="rounded-full w-10 h-10"
                  />
                  <strong>A:</strong> {item.answer}
                </div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-lg font-bold">Answer</span>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setTypeAnswer(e.target.value)}
                      type="text"
                      name="question"
                      placeholder="Your question here"
                      className="input input-bordered w-full max-w-3xl"
                      required
                    />

                    <button
                      onClick={() => handleAnswer(item)}
                      className="btn btn-outline mt-2 md:mt-2 md:ml-2 ml-0 "
                    >
                      Answer
                    </button>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UsersQuestion;
