import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const ProductsReview = () => {
  const { title, quantity, category } = useLoaderData();
  const [, refetch] = useCart();

  const axiosPublic = useAxiosPublic();

  const handleReview = async (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const name = form.name.value;
    const email = form.email.value;
    console.log(review, name, email);

    const usersReviewInfo = {
      name: name,
      email: email,
      review: review,
      productName: title,
      productQuantity: quantity,
      productCategory: category,
    };

    axiosPublic.post("/usersReview", usersReviewInfo).then((res) => {
      if (res.data.insertedId) {
        refetch();
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your review submit!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <h2 className="text-2xl">আপনার মতামত জানানঃ</h2>
      <div className="divider"></div>
      <h2>
        {" "}
        <strong>Product Name:</strong> {title} - {quantity} KG
      </h2>
      <form onSubmit={handleReview}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg">Your review*</span>
          </div>
          <textarea
            type="text"
            name="review"
            placeholder="Your review here"
            className="textarea textarea-warning w-full py-10"
          />

          <div className="flex w-full items-center gap-2">
            <div className="w-full max-w-lg">
              <div className="label">
                <span className="label-text text-lg ">Your Name*</span>
              </div>

              <input
                type="text"
                name="name"
                placeholder="Your name here"
                className="input input-bordered input-warning w-full max-w-lg"
                required
              />
            </div>

            <div className="w-full max-w-lg">
              <div className="label">
                <span className="label-text text-lg">Your email*</span>
              </div>

              <input
                type="text"
                name="email"
                placeholder="Your email here"
                className="input input-bordered input-warning w-full max-w-lg"
              />
            </div>
          </div>

          <input
            className="btn btn-outline max-w-sm my-2"
            type="submit"
            value="Submit Review"
          />
        </label>
      </form>
    </div>
  );
};

export default ProductsReview;
