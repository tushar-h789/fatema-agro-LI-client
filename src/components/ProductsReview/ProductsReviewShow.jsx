import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductsReviewShow = () => {
  const { title, details, image, price, quantity, rating, _id, category } =
    useLoaderData();
  const axiosPublic = useAxiosPublic();

  const { data: review = [], refetch } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosPublic.get("/usersReview");
      return res.data;
    },
  });
  

  const filteredProductReview = review.filter(
    (item) => item.productName === title && item.productQuantity === quantity
  );

  return (
    <div>
      <div className="my-4">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <div className="divider"></div>
        <div className="mx-auto text-center">
          <p className="text-2xl my-2">এই প্রোডাক্টের মোট রেটিং</p>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            readOnly
            className="mx-auto"
          />
        </div>
        <div className="divider"></div>
        <h2 className="text-3xl">
          Total Product Review: {filteredProductReview.length}
        </h2>
        <div className="divider"></div>
        <div>
          {filteredProductReview.map((item) => (
            <ul key={item._id}>
              <li>
                <div className="my-2 border-2 shadow py-2 flex flex-col">
                  <div className="flex">
                    <div className="w-10 rounded-full mr-2 ">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <h4>
                        <strong>Review:</strong> {item.review}
                      </h4>
                    </div>
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

export default ProductsReviewShow;
