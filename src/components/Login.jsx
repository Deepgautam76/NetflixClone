import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkEmail, checkPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessageOfEmail, setErrorMessageOfEmail] = useState(null);
  const [errorMessageOfPassword, setErrorMessageOfPassword] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitClick = () => {
    //Validate the form data
    const EmailMessage = checkEmail(email.current.value);
    const passwordMessage = checkPassword(password.current.value);
    setErrorMessageOfEmail(EmailMessage);
    setErrorMessageOfPassword(passwordMessage);

    /**
     * Submit form on firebase for SignIn/SignUp
     */
    if (!isSignInForm) {
      //Signed up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessageOfEmail(errorMessage + errorCode);
        });
    } else {
      //Signed In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessageOfEmail(errorMessage + errorCode);
        });
    }
  };

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
        <div className="container flex justify-center items-center max-w-sm m-auto bg-black/60 rounded-lg  mb-8">
          <div className="p-8 rounded-lg w-96 text-white">
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-3xl font-bold mb-6">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h2>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email or mobile number"
                className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none"
              />
              <p className="text-red-700 font-bold">{errorMessageOfEmail}</p>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-6 bg-gray-800 rounded focus:outline-none"
              />
              <p className="text-red-700 font-bold">{errorMessageOfPassword}</p>
              <button
                onClick={handleSubmitClick}
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
        <Footer />
      </div>
    </>
  );
};

export default Login;
