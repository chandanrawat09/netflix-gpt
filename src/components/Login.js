import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="backround"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="
          Full Name"
            className="p-4 my-4 w-full bg-gray-900"
          />
        )}
        <input
          type="text"
          placeholder="
        Email Address"
          className="p-4 my-4 w-full bg-gray-900"
        />

        <input
          type="Password"
          placeholder="
        Password"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already registred ? Sign in"}{" "}
        </p>
      </form>
    </div>
  );
};
export default Login;
