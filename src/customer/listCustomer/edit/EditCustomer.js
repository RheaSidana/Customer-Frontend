import React from "react";
import { Modal, Box, Card, CardContent } from "@mui/material";
import EditCustomerForm from "./Form";

const EditCustomer = ({ openEdit, setOpenEdit, row, header }) => {
  const handleClose = () => {
    setOpenEdit(false);
  };
  return (
    <Modal
      open={openEdit}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "inherit",
          border: "2px solid #000",
          p: 2,
          minWidth: "60%",
          padding: "1em",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#f0b64a",
            color: "black",
            height: "100%",
            minWidth: "90%",
            borderRadius: 15,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1em 1em",
          }}
        >
          <CardContent
            sx={{
              minWidth: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EditCustomerForm row={row} handleClose={handleClose} header={header}/>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default EditCustomer;
