import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Context";
import "./Login.css";

const Login = () => {
  const { logIn, logInWithGoogle, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";



  // set user info
  const [userInfo, setUserInfo] = useState({email: "", password: "" });

  // // store email and password error
  // const [error, setError] = useState({
  //   emailError: "",
  //   passwordError: "",
  //   generalError: "",
  // });

  // password validation
  const passwordHandler = (e) => {
    const password = e.target.value;

    // if (password === "") {
    //   setError({ ...error, passwordError: "Password can not be empty " });
    //   setUserInfo({ ...userInfo, password: "" });
    // } else if (password.length < 6) {
    //   setError({
    //     ...error,
    //     passwordError: "Password at lest 6 characters length ",
    //   });
    //   setUserInfo({ ...userInfo, password: "" });
    // } else {
    //   setError({ ...error, passwordError: "" });
    //   setUserInfo({ ...userInfo, password: password });
    // }

    setUserInfo({ ...userInfo, password: password });
  };

  // email error handle 
  const emailHandler = (e) => {
    const email = e.target.value;


    setUserInfo({ ...userInfo, email: email });
  };

  //from submit handler

  const submitHandler = (e) => {
    e.preventDefault();

    logIn(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // store token in localstorage
            localStorage.setItem("alishanToken", data.token);
            toast.success("Login success");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  const googleLoginHandler = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // store token in localstorage
            localStorage.setItem("alishanToken", data.token);
            toast.success("Login success");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };


  // set loading

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  return (

    <div className=" h-[500px] md:h-[600px]">
      <Helmet>
        <title>Malithas Photography - Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="md:h-600">
        <div className="card-body md:w-[450px] mx-auto shadow-lg mt-10 ">
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered text-black"
                required
                onChange={emailHandler}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-black"
                onChange={passwordHandler}
              />


              <label className="label">
                <span>
                  <small>
                    Don't have account ?
                    <Link to={"/register"} className="text-blue-600">
                      Register
                    </Link>
                  </small>
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn hover:bg-sky-500">Login</button>
            </div>
          </form>

          <div className="flex gap-1 pl-20">
            <div className="w-2/3  bg-accent  rounded-md hover:bg-green-300">
              <button
                onClick={googleLoginHandler}
                className="py-2 flex items-center"
              >
                <p className="ml-2 md:ml-4">
                  LogIn with <span className="inline-block">Google</span>
                </p>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
