import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  // if (user) {
  //   navigate("/");
  // }

  const passwordOnBlur = (e) => {
    setPassword(e.target.value);
  };

  const emailOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      navigate(from, {replace:true})
    })
  }

  const formOnSubmit = (e) => {
    e.preventDefault();
    if (error) {
      setError(error);
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold my-8 text-blue-500">
          Please Login First
        </h2>
        <form onSubmit={formOnSubmit}>
          <div className="text-left">
            <label className="block ml-1 text-gray-500 text-lg" htmlFor="Email">
              Email
            </label>
            <input
              className="w-80 h-12 rounded-md"
              onBlur={emailOnBlur}
              type="email"
              name="Email"
              id="656456465"
              required
            />
          </div>
          <div className="text-left">
            <label
              className="block ml-1  text-gray-500 text-lg"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-80 h-12 rounded-md"
              onBlur={passwordOnBlur}
              type="password"
              name="Password"
              autoComplete="on"
              id="53465468"
              required
            />
          </div>
          {error && <p className=" text-red-600 w-80">{error}</p>}
          <input
            className="bg-blue-700 text-white my-2 w-11/12 h-12 rounded-lg hover:bg-blue-500 hover:text-gray-700"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          New to Car Services?{" "}
          <Link className="text-blue-700" to="/signup">
            Create New Account
          </Link>
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-56 mx-auto bg-slate-300 rounded mt-4 h-8 hover:bg-slate-500 hover:text-gray-300"
        >
          <img
            className="w-4 mr-1"
            src="https://i.ibb.co/wSMMKr2/google.png"
            alt=""
          />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
