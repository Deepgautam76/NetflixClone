import React from "react";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center w-sm m-auto bg-black/60 rounded-lg ">
      <div className="p-8 rounded-lg w-96 text-white">
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
        <button className="w-full p-3 bg-red-600 rounded font-bold">
          Sign In
        </button>
        <div className="text-center my-4">OR</div>
        <button className="w-full p-3 bg-gray-700 rounded font-bold">
          Use a sign-in code
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <label>Remember me</label>
        </div>
        <div className="mt-6 text-center">
          New to Netflix?{" "}
          <a href="/" className="text-white font-bold hover:underline">
            Sign up now.
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
