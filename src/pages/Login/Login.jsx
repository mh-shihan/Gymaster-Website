import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { createSignInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createSignInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content w-1/2 flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  //   type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="cursor-pointer absolute bottom-[37%] right-[3%]"
                  //   onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} */}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 text-white text-2xl">
                Login
              </button>
            </div>
            <p>
              New to this website? Please{" "}
              <Link className="text-blue-600" to="/register">
                Register
              </Link>
            </p>
            {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-600">{successMessage}</p>
        )} */}
          </form>
          {/* <button onClick={handleGoogleLogin} className="btn btn-ghost">
        Login With Google
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
