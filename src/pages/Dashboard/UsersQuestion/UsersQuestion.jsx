import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { fromJSON } from "postcss";
import Swal from "sweetalert2";

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
      form.reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Submit your answer",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  //   const handleAnswera = async (data) => {
  //     const questionInfo = {
  //       name: user.displayName,
  //       question: data.question,
  //     };

  //     const res = await axiosPublic.post("/usersQuestion", questionInfo);
  //     console.log(res.data);
  //     if (res.data.insertedId) {
  //       refetch()
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Your question submit !",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //     reset()
  //   };

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
              <div className="border p-1 my-2 bg-slate-100 rounded-lg">
                <p className="font-bold">Name: {item.name}</p>
                <p>
                  <strong>Q:</strong> {item.question}
                </p>
                <p>
                  <p>
                    <strong>A: </strong>
                    {item.answer}
                  </p>

                  <div>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-lg">Answer</span>
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
                          className="btn btn-outline"
                        >
                          Answer
                        </button>
                      </div>
                    </label>
                  </div>
                </p>
              </div>
            </li>
          </ul>
        ))}
        {/* {question.map((item) => (
          <ul key={item._id}>
            <li>
              <div className="border p-1 my-2 bg-slate-100 rounded-lg">
                <p className="font-bold">Name: {item.name}</p>
                <p>
                  <strong>Q:</strong> {item.question}
                </p>
                <p>
                  <strong>A:</strong>
                  <div>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text text-lg">Answerffff</span>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="question"
                          placeholder="Your question here"
                          className="input input-bordered w-full max-w-3xl"
                        />

                        <input
                          className="btn btn-outline max-w-sm"
                          type="submit"
                          value="Answer"
                        />
                      </div>
                    </label>
                  </div>
                </p>
              </div>
            </li>
          </ul>
        ))} */}
      </div>
    </div>
  );
};

export default UsersQuestion;
