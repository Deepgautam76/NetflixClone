import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const subscribe = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  
  /**
   * Here we handel the login/logout user(Auth)
   * And add the user into redux store
   */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="container flex justify-between items-center">
      <div>
        <img
          className="h-20"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="flex text-white items-center ">
        <div className="p-2 font-bold">
          <span>
            {subscribe?.displayName ? subscribe.displayName : "Guest"}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-10 w-10 mr-2 ml-2 rounded-full object-cover"
            src={subscribe?.photoURL ? subscribe.photoURL : "/ProfileAvtar.jpg"}
            alt="Profile"
          />
        </div>
        {subscribe?.uid && (
          <div>
            <button
              onClick={handleSignOutClick}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded ml-2 m-2 cursor-pointer hover:scale-95"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
