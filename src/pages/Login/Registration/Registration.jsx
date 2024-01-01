import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Registration = () => {
  const { createUser, logOut, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);
    // });
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        logOut();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Fatema Agro | Registration</title>
      </Helmet>
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
                  type="text"
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
                <input
                  className="btn btn-primary text-white font-bold text-lg"
                  type="submit"
                  value="Registration"
                />
              </div>
            </form>
            <div className="text-center pb-6">
              <Link to="/login">
                <p>
                  Already have an account? Please{" "}
                  <span className="font-bold text-orange-500">Login</span>
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
