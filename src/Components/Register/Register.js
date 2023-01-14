import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Context";
import "./Register.css";

const Register = () => {
  const {createUser, updateNameAndPhoto, registerWithGoogle, loading,} = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [userInfo, setUserInfo] = useState({ name: "",  photoURL: "",  email: "",  password: ""});
  const [error, setError] = useState({ emailError: "", passwordError: "",   generalError: "" });

  
 

  //store user name error
  const userNameHandler = (e) => {
    const name = e.target.value;
    setUserInfo({ ...userInfo, name: name });
  };

  // user photo url
  const photURLHandler = (e) => {
    const photoURL = e.target.value;
    setUserInfo({ ...userInfo, photoURL: photoURL });
  };

  //email store  and handle errro
  const userEmailHandler = (e) => {
    const email = e.target.value;

    if (email === "") {
      setError({ ...error, emailError: "Email must not be empty" });
      setUserInfo({ ...userInfo, email: "" });
    } else if (
      !email.match(
        /^[a-z0-9][a-z0-9-_]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
      )
    ) {
      setError({
        ...error,
        emailError: "Please provide a valid email address",
      });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setError({ ...error, emailError: "" });
      setUserInfo({ ...userInfo, email: email });
    }
  };

  // password validation
  const passwordHandler = (e) => {
    const password = e.target.value;

    if (password === "") {
      setError({ ...error, passwordError: "Password must not be empty " });

      setUserInfo({ ...userInfo, password: "" });
    } else if (password.length < 6) {
      setError({
        ...error,
        passwordError: "Password at lest 6 characters length ",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({ ...error, passwordError: "" });
      setUserInfo({ ...userInfo, password: password });
    }
  };

  // google register handler 
  const googleHander = () => {
    registerWithGoogle()
    .then((result) => {
      toast.success("User register success");
      navigate("/");
    });
  };

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInfo);
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        updateNameAndPhoto(userInfo.name, userInfo.photoURL)
          .then(() => {
            toast.success("User register success");
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            setError({ ...error, generalError: error.message });
          });
      })
      .catch((error) => setError({ ...error, generalError: error.message }));
  };

  // set loading
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div>
      <Helmet>
        <title>Malithas Photography - Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div>
        <div className="card-body md:w-[450px] mx-auto shadow-lg mt-10 ">
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered text-black"
                required
                onChange={userNameHandler}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo Url</span>
              </label>

              <input
                type="text"
                name="photoURL"
                placeholder="photo url"
                className="input input-bordered text-black"
                required
                onChange={photURLHandler}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered text-black"
                onChange={userEmailHandler}
                required
              />
              {error.emailError && (
                <label className="label">
                  <p className="label-text-alt link text-red-400 link-hover">
                    {error.emailError}
                  </p>
                </label>
              )}
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
              {error.passwordError && (
                <label className="label">
                  <p className="label-text-alt link text-red-400 link-hover">
                    {error.passwordError}
                  </p>
                </label>
              )}

              {error.generalError && (
                <label className="label">
                  <p className="label-text-alt link text-red-400 font-bold link-hover">
                    {error.generalError}
                  </p>
                </label>
              )}

              <label className="label">
                <span>
                  <small>
                    Already have an account ?
                    <Link to={"/login"} className="text-blue">
                      Login
                    </Link>
                  </small>
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>

          <div className="flex gap-1 pl-24">
            <div className="w-2/3  bg-accent  rounded-md hover:bg-green-300">
              <button
                onClick={googleHander}
                className="py-2 flex items-center"
              >
                <p className="ml-2 md:ml-4">
                  Sign Up  With<span className="inline-block">Google</span>
                </p>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
