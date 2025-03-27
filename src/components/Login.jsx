import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SignIn from "./SignIn";

const Login = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg')",
        }}
      >
        <Header />
        <SignIn />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
