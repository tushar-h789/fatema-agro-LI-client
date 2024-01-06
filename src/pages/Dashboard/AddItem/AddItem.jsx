import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();


  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      //now send the products item data to the server with the image url
      const productsItem = {
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),
        quantity: data.quantity,
        rating: data.rating,
        details: data.details,
        image: res.data.data.display_url,
      };
      const productRes = await axiosSecure.post("/products", productsItem);
      console.log(productRes.data);
      if (productRes.data.insertedId) {
        reset();
        //show success message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the Products!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log(res.data);
  };

  return (
    <div className="my-4 p-8">
      <SectionTitle title="Add items" subTitle="What's new?"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Name*</span>
          </div>
          <input
            {...register("title", { required: true })}
            type="text"
            name="title"
            placeholder="name here"
            className="input input-bordered w-full "
          />
          {errors.title && (
            <span className="text-white bg-red-500 rounded mt-1">
              Please enter product name !
            </span>
          )}
        </label>

        <div className="flex gap-6 my-4">
          {/* category */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
            defaultValue='default'
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              {errors.category && (
                <span className="text-white bg-red-500 rounded mt-1">
                  Please select your category !
                </span>
              )}
              <option disabled value='default'>
                Select a category
              </option>
              <option  value="খেজুর গুড়">খেজুর গুড়</option>
              <option value="সরিষার তেল">সরিষার তেল</option>
            </select>
          </label>

          {/* price */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="number"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.price && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your price !
              </span>
            )}
          </label>
        </div>
        <div className="flex gap-6 my-4">
          {/* quantity */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Quantity*</span>
            </div>
            <input
              {...register("quantity", { required: true })}
              type="number"
              name="quantity"
              placeholder="quantity here"
              className="input input-bordered w-full "
            />
            {errors.quantity && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your quantity !
              </span>
            )}
          </label>

          {/* rating */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Rating*</span>
            </div>
            <input
              {...register("rating", { required: true })}
              type="text"
              name="rating"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.rating && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your rating !
              </span>
            )}
          </label>
        </div>
        {/* category details */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Category details*</span>
          </div>
          <textarea
            {...register("details", { required: true })}
            name="details"
            className="textarea textarea-bordered h-24"
            placeholder="details this category"
          ></textarea>
          {errors.details && (
            <span className="text-white bg-red-500 rounded mt-1">
              Please enter your rating !
            </span>
          )}
          <input
            {...register("image", { required: true })}
            name="image"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs my-4"
          />
          {errors.image && (
            <span className="text-white bg-red-500 rounded mt-1">
              Please enter your image !
            </span>
          )}
        </label>

        <button className="btn bg-gradient-to-r w-full btn-outline font-bold text-lg">
          Add Item <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
