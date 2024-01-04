import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const onSubmit = async(data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })

    if(res.data.success){
      //now send the products item data to the server with the image url
      const productsItem ={
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),
        quantity: data.quantity,
        rating: data.rating,
        details: data.details,
        image: res.data.data.display_url
      }
      const productRes = await axiosSecure.post('/products', productsItem)
      console.log(productRes.data);
      if(productRes.data.insertedId){
        reset()
        //show success message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the Products!`,
          showConfirmButton: false,
          timer: 1500
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
            {...register("title")}
            type="text"
            name="title"
            placeholder="name here"
            className="input input-bordered w-full "
          />
        </label>

        <div className="flex gap-6 my-4">
          {/* category */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Select a category
              </option>
              <option value="gur">গুর</option>
              <option value="sorisaTel">সরিসার তেল</option>
            </select>
          </label>

          {/* price */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price")}
              type="number"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="flex gap-6 my-4">
          {/* quantity */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Quantity*</span>
            </div>
            <input
              {...register("quantity")}
              type="number"
              name="quantity"
              placeholder="quantity here"
              className="input input-bordered w-full "
            />
          </label>

          {/* rating */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Rating*</span>
            </div>
            <input
              {...register("rating")}
              type="text"
              name="rating"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* category details */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Category details*</span>
          </div>
          <textarea
          {...register('details')}
          name="details"
            className="textarea textarea-bordered h-24"
            placeholder="details this category"
          ></textarea>
          <input
            {...register("image")}
            name="image"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs my-4"
          />
        </label>

        <button className="btn bg-gradient-to-r from-orange-500  to-pink-500 text-white w-full btn-outline font-bold text-lg">
          Add Item <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
