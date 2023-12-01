import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const FormikTextField = (props) => {
  const [field, meta] = useField(props.name);

  const { value, onChange, onBlur } = field;
  const { error, touched } = meta;

  return (
    <TextField
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={touched && Boolean(error)}
      helperText={touched ? error : ""}
      InputLabelProps={{
        style: {
          color: "black",
          fontSize: 20,
          fontFamily: "serif",
          fontWeight: "bold",
        },
      }}
      InputProps={{
        style: { 
            backgroundColor: "inherit", 
            height: "30", 
            fontSize: 20,
        },
      }}
      FormHelperTextProps={{
        style: {
          width: "max-content",
        },
      }}
      {...props}
    />
  );
};

FormikTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormikTextField;
