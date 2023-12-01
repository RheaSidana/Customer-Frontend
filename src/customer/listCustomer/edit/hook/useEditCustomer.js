import { useState } from "react";
import EditCustomerApiService from "../service/EditCustomerApiService";

const useEditCustomer = (header) => {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const { editCustomer } = EditCustomerApiService();

  const handleEditCustomer = async (values, id, setAlert) => {
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
      var r = await editCustomer(id, payload, header);
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
    handleEditCustomer: handleEditCustomer,
  };
};

export default useEditCustomer;
