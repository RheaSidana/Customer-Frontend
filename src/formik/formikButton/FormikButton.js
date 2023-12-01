import React from "react";
import { Button } from "@mui/material";

const FormikButton = (props) => {
  const bg = props.bg;
    
  return (
    <Button
      data-testid={props.testId}
      style={{
        // backgroundColor: "#d9a823",
        backgroundColor: `${bg}`,
        color: "black",
        marginTop: "1em",
        fontFamily: "Roboto",
        fontSize: "25px",
        textTransform: "none",
        padding: "5px 20px 5px 20px",
        borderRadius: "10px",
      }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.btnText}
    </Button>
  );
};

export default FormikButton;
