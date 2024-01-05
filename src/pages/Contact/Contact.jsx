import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Contact = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const contactInfo = {
      name : data.name,
      email : data.email,
      number: data.number,
      comments: data.comments
    };
    axiosPublic.post("/contact", contactInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title:
            "অনুগ্রহ করে অপেক্ষা করুন। আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে, ধন্যবাদ!",
          showClass: {
            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
          },
          hideClass: {
            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
          },
        });
      }
    });
    reset();
  };

  // const handleOrderConfirm = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const number = form.number.value;
  //   const comments = form.comments.value;

  //   const contactInfo = {
  //     name,
  //     email,
  //     number,
  //     comments,
  //   };
  //   axiosPublic.post("/contact", contactInfo).then((res) => {
  //     console.log(res.data);
  //     if (res.data.insertedId) {
  //       Swal.fire({
  //         title:
  //           "অনুগ্রহ করে অপেক্ষা করুন। আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে, ধন্যবাদ!",
  //         showClass: {
  //           popup: `
  //                       animate__animated
  //                       animate__fadeInUp
  //                       animate__faster
  //                     `,
  //         },
  //         hideClass: {
  //           popup: `
  //                       animate__animated
  //                       animate__fadeOutDown
  //                       animate__faster
  //                     `,
  //         },
  //       });
  //     }
  //   });
  //   form.reset();
  // };

  return (
    <div className="my-20 px-4">
      <h2 className="text-center text-3xl my-4 font-bold">
        আমাদের সাথে যোগাযোগ করতে ফর্মটি পূরণ করুন
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-evenly gap-2 md:gap-0 items-center mt-6">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">নাম</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="type your name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your name !
              </span>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ইমেইল </span>
            </div>
            <input
              {...register("email", { required: true })}
              type="text"
              name="email"
              placeholder="type your email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your email !
              </span>
            )}
          </label>
        </div>

        <div className="flex justify-evenly my-4 gap-2 md:gap-0 items-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">নাম্বার</span>
            </div>
            <input
              {...register("number", { required: true })}
              type="text"
              name="number"
              placeholder="type your number"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.number && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please enter your phone number !
              </span>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">আপনার মন্তব্য</span>
            </div>
            <input
              {...register("comments", { required: true })}
              type="text"
              name="comments"
              placeholder="type your comments"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.comments && (
              <span className="text-white bg-red-500 rounded mt-1">
                Please fill up this field !
              </span>
            )}
          </label>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="জমা দিন"
            className="btn  btn-outline w-full max-w-2xl hover:bg-slate-300 hover:text-slate-950"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
