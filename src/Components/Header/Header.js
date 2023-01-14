import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Contexts/Context";



const Header = () => {
  const {user,logOut } = useContext(AuthContext)

  const logOutHandler = () => {
    logOut()
      .then(() => {
        toast.success("logout success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-red-50 shadow-md px-5 md:px-20 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              {user?.uid ? (
              <>
                <li>
                  <Link to={"/myreview"}>My reviews</Link>
                </li>
                <li>
                  <Link to={"/addservice"}>Add service</Link>
                </li>
                <li>
                  {" "}
                  <Link onClick={logOutHandler}>Logout</Link>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>

                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}

            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="text-2xl font-bold text-orange-400 font-[Poppins]"
            >
             Malithas Photography
            </Link>
          </div>
        </div>

        <div className="navbar-end ">
          <ul className="menu menu-horizontal  hidden md:flex">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={'/blog'}>Blog</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to={"/myreview"}>My reviews</Link>
                </li>
                <li>
                  <Link to={"/addservice"}>Add service</Link>
                </li>
                <li>
                  {" "}
                  <Link onClick={logOutHandler}>Logout</Link>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>

                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
