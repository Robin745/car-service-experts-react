import React, { useState } from "react";
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const emailOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnBlur = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordOnBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  const formOnSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Both password didn't match");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate(from, {replace:true})
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  if (user) {
    navigate('/');
  }
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold my-8 text-blue-500">
          Please Sign Up
        </h2>
        <form onSubmit={formOnSubmit}>
          <div className="text-left">
            <label className="block ml-1 text-gray-500 text-lg" htmlFor="Email">
              Name
            </label>
            <input
              className="w-80 h-12 rounded-md"
              type="text"
              name="Name"
              id="6564564f564dfd65"
              required
            />
          </div>
          <div className="text-left">
            <label className="block ml-1 text-gray-500 text-lg" htmlFor="Email">
              Email
            </label>
            <input
              className="w-80 h-12 rounded-md"
              onBlur={emailOnBlur}
              type="email"
              name="Email"
              id="656456f5445dfsdf465"
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
              id="5346544dfg6246548"
              required
            />
          </div>
          <div className="text-left">
            <label
              className="block ml-1  text-gray-500 text-lg"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-80 h-12 rounded-md"
              onBlur={confirmPasswordOnBlur}
              type="password"
              name="Password"
              autoComplete="on"
              id="5346546246554545848"
              required
            />
          </div>
          {error && <p className=" text-red-600">{error}</p>}
          <input
            className="bg-blue-700 text-white my-2 w-11/12 h-12 rounded-lg hover:bg-blue-500 hover:text-gray-700"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-700" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
