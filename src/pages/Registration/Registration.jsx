import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const nameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    nameRef?.current?.focus();
  }, []);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(name, email, password);

    // Password Requirement

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@#$%^&+=!]/.test(password);

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters or longer");
      return;
    } else if (!hasUpperCase) {
      setErrorMessage("Password must contain at least one upper case letter");
      return;
    } else if (!hasLowerCase) {
      setErrorMessage("Password must contain at least one lower case letter");
      return;
    } else if (!hasDigit) {
      setErrorMessage("Password must contain at least one digit");
      return;
    } else if (!hasSpecialChar) {
      setErrorMessage("Password must contain at least one special character");
      return;
    }

    // Create User Function
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/");
        setSuccessMessage(
          swal("Good job!", "You have successfully registered", "success")
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorMessage(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content w-1/2 flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-500">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                ref={nameRef}
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="cursor-pointer absolute bottom-[37%] right-[3%]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 text-white text-2xl">
                Register
              </button>
            </div>
            <p>
              Already have account. Please{" "}
              <Link className="text-blue-600" to="/login">
                Login
              </Link>
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
