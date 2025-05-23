import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const subscribe = useSelector((store) => store.user);
  const [searchText, setSearchText] = useState("");
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
    // Unsubsribe when compponent unmounts(usesd cleanup function)
    return () => unsubscribe();
  }, []);

  /**
   * Implemented the seach functionality
   */
  const handleSeach = () => {
  };

  return (
    <div className="absolute z-1 container flex justify-between items-center bg-gradient-to-b from-black opacity-60">
      <div>
        <img className="h-20" src={LOGO} alt="Netflix Logo" />
      </div>
      <div className="flex text-white items-center ">
        <div className="p-2 font-bold">
          <span>
            {subscribe?.displayName
              ? subscribe?.dispplayName?.length > 6
                ? `${
                    subscribe?.displayName?.charAt(0)?.toUpperCase() +
                    subscribe?.displayName?.slice(1, 5)
                  }...`
                : `${
                    subscribe?.displayName?.charAt(0)?.toUpperCase() +
                    subscribe?.displayName?.slice(1)
                  }`
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
          <div className="flex">
            <div>
              <input
                className="p-2 px-4 m-2 rounded-2xl bg-purple-600 text-white hover:scale-101"
                type="text"
                name="search"
                id="search"
                placeholder="Search here"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="p-2 px-4 m-2 bg-purple-600 text-white rounded-xl cursor-pointer hover:scale-95"
                onClick={handleSeach}
              >
                Search
              </button>
            </div>
            <div>
              <button
                onClick={handleSignOutClick}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded ml-2 m-2 cursor-pointer hover:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
