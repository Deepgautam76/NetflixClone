import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <img
          className="h-20"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="bg-red-600 text-white p-2 rounded-lg">
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Header;
