import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container flex justify-between items-center p-5">
      <div>
        <NavLink to="/">
          <img
            className="h-20"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
        </NavLink>
      </div>
      <div className="flex text-white items-center ">
        <div className="p-2 font-bold">
          <span>User Name</span>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="../../Assets/Imeges/profilAvtar.jpg"
            alt="Profile Avtar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
