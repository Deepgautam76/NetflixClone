import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const subscribe = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  /**
   * Here we handel the login/logout user(Auth)
   * And add the user into redux store
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    // This also called the celanup function
    // Unsubsribe when compponent unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="container flex justify-between items-center">
      <div>
        <img className="h-20" src={LOGO} alt="Netflix Logo" />
      </div>
      <div className="flex text-white items-center ">
        <div className="p-2 font-bold">
          <span>
            {subscribe?.displayName
              ? `${subscribe?.displayName?.substring(0, 6)}...`
              : "Guest"}
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
