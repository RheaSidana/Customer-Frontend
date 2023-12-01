import { object, string } from "yup";

export const initialValues = () => {
  return {
    loginID: "",
    password: "",
  };
};

export const loginCreationSchema = object({
    loginID: string("Enter Login Id").required(
        "Login Id is required"
    ),
    password: string("Enter Password").required(
      "Password is required"
    ),
  });