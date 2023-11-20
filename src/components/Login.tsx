import { useState, useRef } from "react";
import { checkValidData } from "../Utils/validate";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

type formType = "sign in" | "sign up";

const Login = () => {
  const [formType, setFormType] = useState<formType>("sign in");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fullName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  let fullNameValue: string = "";
  let emailValue: string = "";
  let passwordValue: string = "";

  const handleToggleFormType = () => {
    formType === "sign in" ? setFormType("sign up") : setFormType("sign in");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (fullName.current !== null) {
      fullNameValue = fullName.current.value;
    }
    if (email.current !== null) {
      emailValue = email.current.value;
    }

    if (password.current !== null) {
      passwordValue = password.current.value;
    }
    e.preventDefault();
    const message = checkValidData(
      fullNameValue,
      emailValue,
      passwordValue,
      formType
    );

    setErrorMessage(message === "Success" ? "" : message);
    if (message === "Success") {
      //create a new user
      if (formType === "sign up") {
        //signup logic
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        //sign in logic
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const customErrorMessage =
              errorCode === "auth/invalid-login-credentials"
                ? "Either Email or Password you have enterd is Incorrect!"
                : "";
            setErrorMessage(customErrorMessage);
          });
      }
    }
  };

  return (
    <>
      <div className="h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg)] flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-80 w-3/12 2xl:w-2/12 flex flex-col z-10 rounded-xl"
        >
          <div className="flex justify-between">
            <h1 className="text-white font-bold text-2xl ml-2 my-4 w-4/12">
              {formType === "sign in"
                ? "Sign In"
                : formType === "sign up"
                ? "Sign Up"
                : ""}
            </h1>
            <p className="text-red-600 font-bold mr-2 my-5 w-8/12 ">
              {errorMessage}
            </p>
          </div>
          {formType === "sign up" && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-2 m-3 bg-gray-700 rounded-sm text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 m-3 bg-gray-700 rounded-sm text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-3 bg-gray-700 rounded-sm text-white"
          />
          <button
            type="submit"
            className="p-2 mx-4 mt-5 bg-red-600 rounded-md text-white "
          >
            {formType === "sign in"
              ? "Sign In"
              : formType === "sign up"
              ? "Sign Up"
              : ""}
          </button>
          <h4
            className="text-white ml-5 my-2 text-xs cursor-pointer hover:underline "
            onClick={handleToggleFormType}
          >
            {formType === "sign in"
              ? "New to Netflix? Sign Up Now"
              : formType === "sign up"
              ? "Already a user? Sign In Now"
              : ""}
          </h4>
        </form>
      </div>
    </>
  );
};

export default Login;
