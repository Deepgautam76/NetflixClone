import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-sm m-auto bg-black/60 rounded-lg  mb-8">
      <div className="p-8 rounded-lg w-96 text-white">
        <form action="">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <input
            type="text"
            placeholder="Enter the name"
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
          />
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
            Sign up
          </button>
        </form>
        <div className="mt-6 text-center">
          If alredy have Netflix?
          <a href="/" className="text-white font-bold hover:underline">
            Sign In now.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
