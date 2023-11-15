import { useState } from "react";

type formType = "sign in" | "sign up";

const Login = () => {
  const [formType, setFormType] = useState<formType>("sign in");

  const handleToggleFormType = () => {
    formType === "sign in" ? setFormType("sign up") : setFormType("sign in");
  };
  return (
    <>
      <div className="h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg)] flex justify-center items-center ">
        <form className="bg-black bg-opacity-80 w-3/12 h-1/2 flex flex-col z-10 rounded-xl">
          <h1 className="text-white font-bold text-2xl ml-2 my-4">
            {formType === "sign in"
              ? "Sign In"
              : formType === "sign up"
              ? "Sign Up"
              : ""}
          </h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-4 bg-gray-700 rounded-sm text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-4 bg-gray-700 rounded-sm text-white"
          />
          <button className="p-2 mx-4 mt-4 bg-red-600 rounded-md text-white ">
            {formType === "sign in"
              ? "Sign In"
              : formType === "sign up"
              ? "Sign Up"
              : ""}
          </button>
          <h4
            className="text-white ml-5 mt-2 text-xs cursor-pointer hover:underline-offset-1 decoration-white"
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
