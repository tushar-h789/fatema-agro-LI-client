import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Name is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s)/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password less then 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password must be One Upper case, One lower case, One digit,
                    One special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white font-bold text-lg">
                  Registration
                </button>
              </div>
            </form>
            <div className="text-center pb-6">
              <Link to="/login">
                <p>
                  Already have an account? Please{" "}
                  <span className="font-bold text-orange-500">
                    Login
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
