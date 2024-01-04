import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();

  const handleOrderConfirm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const comments = form.comments.value;

    const contactInfo = {
      name,
      email,
      number,
      comments,
    };
    axiosPublic.post("/contact", contactInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "অনুগ্রহ করে অপেক্ষা করুন। আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে, ধন্যবাদ!",
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
    form.reset();
  };

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl my-4 font-bold">
        আমাদের সাথে যোগাযোগ করতে ফর্মটি পূরণ করুন
      </h2>
      <form onSubmit={handleOrderConfirm}>
        <div className="flex justify-evenly mt-6">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">নাম</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="type your name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">ইমেইল </span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="type your email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="flex justify-evenly my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">নাম্বার</span>
            </div>
            <input
              type="text"
              name="number"
              placeholder="type your number"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">আপনার মন্তব্য</span>
            </div>
            <input
              type="text"
              name="comments"
              placeholder="type your comments"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="জমা দিন"
            className="btn btn-warning btn-outline w-full max-w-2xl"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
