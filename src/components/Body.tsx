import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName, //by the time of this we do not have display name and photo url because we are updating profile and creating user, so these two needs to set to redux after creation of new user right there.
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser(null));
      }
    });
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
