import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const Login = () => {
  const {loginUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/';
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    loginUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        navigate(from, {replace: true})
      }, 1500);
    })
  };

  return (
    <div>
      <Helmet>
        <title>Fatema Agro | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white font-bold text-lg">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center pb-6">
              <Link to="/register">
                <p className="mb-4">
                  Are not have an account? Please{" "}
                  <span className="font-bold text-orange-500">Registration</span>
                </p>
              </Link>
              <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
