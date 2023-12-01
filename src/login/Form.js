import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Typography, Paper } from "@mui/material";
import { initialValues, loginCreationSchema } from "./service/LoginService";
import FormikTextField from "../formik/formikTextField/FormikTextField";
import FormikButton from "../formik/formikButton/FormikButton";
import LoginConfirmation from "./Confirmation";
import useLogin from "./hook/useLogin";

const LoginForm = ({ setIsLoggedIn, setHeader }) => {
  const [login, setLogin] = useState(initialValues);
  const [showLoginConfirmation, setShowLoginConfirmation] = useState(false);
  const { error, handleLoginUser } = useLogin(setHeader);

  const handleSubmit = (values) => {
    handleLoginUser(values, setShowLoginConfirmation, setIsLoggedIn);
    setLogin({ ...login });
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
          initialValues={login}
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
              Login Page
            </Typography>
            <div style={{ height: "2.5em" }}></div>
            <FormikTextField
              margin="dense"
              name="loginID"
              label="Login Id"
              color="secondary"
              style={{ minWidth: "80%" }}
            />
            <FormikTextField
              margin="dense"
              name="password"
              label="Password"
              style={{ minWidth: "80%" }}
              color="secondary"
              type="password"
            />
            <FormikButton
              btnText="Submit"
              type="submit"
              color="#d9a823"
              bg={"#d9a823"}
            />
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
      <LoginConfirmation
        open={showLoginConfirmation}
        onClose={() => {
          setShowLoginConfirmation(false);
        }}
      />
    </>
  );
};

export default LoginForm;
