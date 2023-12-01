import { useState } from "react";
import useAddCustomerApi from "../service/AddCustomerApiService";

const useAddCustomer = () => {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const {postAddCustomer} = useAddCustomerApi();

  const handleAddCustomer = async (values, setAlert, header) => {
    const payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      street: values.street,
      address: values.address,
      city: values.city,
      state: values.state,
      email: values.email,
      phone: values.phone,
    };

    try {
      while(header === ""){}
      var r = await postAddCustomer(payload, header);
      setResponse(r);
      setAlert(true);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(JSON.stringify(err.response.data.error));
      } else {
        throw err;
      }
    }
  };
  return {
    error: error,
    response: response,
    handleAddCustomer: handleAddCustomer,
  };
};

export default useAddCustomer;
