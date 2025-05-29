import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import profile from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="font-semibold text-lg text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-lg text-white">
        <NavLink to="/about">About</NavLink>
      </li>
      {!user && (
        <li className="font-semibold text-lg text-white">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      <li className="font-semibold text-lg text-white">
        <NavLink to="/classSchedule">Class Schedule</NavLink>
      </li>
      <li className="font-semibold text-lg text-white">
        <NavLink to="/blog">Blog Post</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-900 py-8">
      <div className="navbar-start ">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-orange-500 font-bold mr-10 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" normal-case md:text-5xl font-bold text-orange-500">
          GYMASTER
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex flex-col md:flex-row ml-8">
        {user && (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center "
          >
            {isHovered && (
              <p className="absolute right-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs md:text-base px-2 py-1 rounded shadow-lg z-10">
                {user?.email}
              </p>
            )}
            <img className="h-8 w-8 mr-2 rounded-full" src={profile} alt="" />
          </div>
        )}
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className=" md:btn-sm text-sm md:text-lg  px-1 rounded-md block mx-auto font-medium bg-orange-500 text-white ml-5 md:ml-2"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/registration">
              <button className="btn btn-sm bg-orange-500 text-white ml-2">
                Join Us
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
