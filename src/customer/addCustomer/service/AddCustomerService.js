import { object, string } from "yup";

export const initialValues = () => {
  return {
    first_name: "",
    last_name: "",
    street: "",
    address: "",
    city: "",
    state: "",
    email: "",
    phone: "",
  };
};

export const loginCreationSchema = object({
  first_name: string("Enter First Name").required("First Name is required"),
  last_name: string("Enter Last Name").required("Last Name is required"),
  street: string("Enter Street"),
  address: string("Enter Address"),
  city: string("Enter City"),
  state: string("Enter State"),
  email: string("Enter Email"),
  phone: string("Enter Phone"),
});
