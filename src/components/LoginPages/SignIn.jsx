import React from "react";


//Code of the login form (Signin form)
const SignIn = () => {
  return (
    <div className="flex justify-center items-center w-sm m-auto bg-black/60 rounded-lg  mb-8">
      <div className="p-8 rounded-lg w-96 text-white">
        <form action="">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-red-600 rounded font-bold"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center">
          New to Netflix?
          <a href="/" className="text-white font-bold hover:underline">
            Sign up now.
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
