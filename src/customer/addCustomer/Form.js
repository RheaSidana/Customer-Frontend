import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Typography, Paper } from "@mui/material";
import {
  initialValues,
  loginCreationSchema,
} from "./service/AddCustomerService";
import FormikTextField from "./../../formik/formikTextField/FormikTextField";
import FormikButton from "./../../formik/formikButton/FormikButton";
import AddCustomerConfirmation from "./Confirmation";
import useAddCustomer from "./hook/useAddCustomer";

const AddCustomerForm = ({ header, setAddedCustomer }) => {
  const [addCustomer, setAddCustomer] = useState(initialValues);
  const [showAddCustomerConfirmation, setShowAddCustomerConfirmation] =
    useState(false);
  const { error, handleAddCustomer } = useAddCustomer();

  const handleSubmit = (values, { resetForm }) => {
    handleAddCustomer(values, setShowAddCustomerConfirmation, header);
    setAddedCustomer(true);
    resetForm();
  };

  return (
    <>
      <Paper
        elevation={0}
        style={{
          height: "auto",
          minWidth: "100%",
          backgroundColor: "inherit",
        }}
      >
        <Formik
          enableReinitialize={true}
          initialValues={addCustomer}
          validationSchema={loginCreationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            style={{
              minWidth: "100%",
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: '"Lucida Handwriting", cursive',
                fontWeight: 800,
              }}
            >
              Add Customer
            </Typography>
            <div style={{ height: "2.5em" }}></div>
            <FormikTextField
              margin="dense"
              name="first_name"
              label="First Name"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="last_name"
              label="Last Name"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="street"
              label="Street"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="address"
              label="Address"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="city"
              label="City"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="state"
              label="State"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="email"
              label="Email"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="phone"
              label="Phone"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikButton btnText="Add" type="submit" bg={"#d9a823"} />
            <Typography
              variant="body1"
              color="error"
              style={{ marginTop: "28px", fontSize: "0.75rem" }}
            >
              {error}
            </Typography>
          </Form>
        </Formik>
      </Paper>
      <AddCustomerConfirmation
        open={showAddCustomerConfirmation}
        onClose={() => {
          setShowAddCustomerConfirmation(false);
        }}
      />
    </>
  );
};

export default AddCustomerForm;
