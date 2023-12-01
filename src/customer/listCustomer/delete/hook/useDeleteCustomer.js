import { useState } from "react";
import DeleteCustomerApiService from "../service/DeleteCustomerApiService";

const useDeleteCustomer = (header) => {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const { deleteCustomer } = DeleteCustomerApiService();

  const handleDeleteCustomer = async (id, setAlert) => {
    try {
      while(header === ""){}
      var r = await deleteCustomer(id, header);
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
    handleDeleteCustomer: handleDeleteCustomer,
  };
};

export default useDeleteCustomer;
