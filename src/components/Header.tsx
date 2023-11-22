import netflixLogo from "../assets/netflixLogo.png";
import userLogo from "../assets/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";

interface UserType {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}
interface RootState {
  user: UserType;
}
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store?.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
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
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <div>
        <img className="w-56" src={netflixLogo} alt="netflixLogo" />
      </div>
      {user && (
        <div className="absoulte flex items-center mr-4">
          <img className="w-16 h-16 m-4" src={user?.photoURL} alt="userLogo" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
