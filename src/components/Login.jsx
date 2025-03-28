import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const togglecSigninForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg')",
        }}
      >
        <Header />
        {/* Login form content */}
        <div className="flex justify-center items-center w-sm m-auto bg-black/60 rounded-lg  mb-8">
          <div className="p-8 rounded-lg w-96 text-white">
            <form
              action="https://localhost:8080/login"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-3xl font-bold mb-6">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h2>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
                />
              )}
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
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div className="mt-6 text-center cursor-pointer">
              {isSignInForm ? "New to Netflix?" : "Already have Netflix?"}
              <span
                onClick={togglecSigninForm}
                className="text-white font-bold hover:underline"
              >
                {isSignInForm ? " Sign Up now." : " Sign In now."}
              </span>
            </div>
          </div>
        </div>
        {/* Here is end of the login form content */}
        <Footer />
      </div>
    </>
  );
};

export default Login;
