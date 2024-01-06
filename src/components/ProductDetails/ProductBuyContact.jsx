import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductBuyContact = () => {
  const axiosPublic = useAxiosPublic();

  const handleOrderConfirm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const quantity = form.quantity.value;
    const address = form.address.value;

    const orderInfo = {
      name,
      email,
      number,
      quantity,
      address,
    };
    axiosPublic.post("/orderConfirm", orderInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "আপনার ওর্ডার সম্পূর্ণ হয়েছে!",
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
    <div className="my-10">
      <h2 className="text-center text-3xl my-4 font-bold">
        ওর্ডার কনফার্ম করতে নিচের বক্স পূরণ করুন
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
              required
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
              required
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
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">পরিমান</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="type quantity"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>

        <div className="my-4">
          <label className="form-control w-full max-w-4xl mx-auto">
            <div className="label">
              <span className="label-text">আপনার পুরো ঠিকানা</span>
            </div>
            <input
              type="text"
              name="address"
              placeholder="address"
              className="input input-bordered w-full "
              required
            />
          </label>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="ওর্ডার কনফার্ম করুন"
            className="btn btn-outline w-full max-w-4xl"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductBuyContact;
