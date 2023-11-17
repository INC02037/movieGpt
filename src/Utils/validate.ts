export const checkValidData = (
  fullName: string,
  email: string,
  password: string,
  formType: string
): string => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (formType === "sign up") {
    if (fullName === "" || email === "" || password === "")
      return "Please fill all fields";
  } else {
    if (email === "" || password === "") return "Please fill all fields";
  }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return "Success";
};
