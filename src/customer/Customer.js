import React, { useState } from "react";
import AddCustomer from "./addCustomer/AddCustomer";
import ViewAllCustomers from "./listCustomer/ViewAllCustomers";

const Customer = ({ header, isLoading }) => {
  const [addedCustomer, setAddedCustomer] = useState(false);
  if (isLoading) {
    return <h1>Loading.......</h1>;
  }
  return (
    <>
      <AddCustomer header={header} setAddedCustomer={setAddedCustomer}/>
      <ViewAllCustomers header={header} addedCustomer={addedCustomer}/>
    </>
  );
};

export default Customer;
