import React, { useState } from "react";
import { Modal, Box, Card, CardContent, Typography } from "@mui/material";
import FormikButton from "../../../formik/formikButton/FormikButton";
import DeleteCustomerConfirmation from "./Confirmation";
import useDeleteCustomer from "./hook/useDeleteCustomer";

const DeleteCustomer = ({ openDelete, setOpenDelete, row, header }) => {
  const [showDeleteCustomerConfirmation, setShowDeleteCustomerConfirmation] =
    useState(false);
  const { handleDeleteCustomer } = useDeleteCustomer(header);

  const handleClose = () => {
    setOpenDelete(false);
  };

  const handleYesDeleteCustomer = () => {
    handleDeleteCustomer(row.id, setShowDeleteCustomerConfirmation);
  };

  return (
    <Modal
      open={openDelete}
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
            // backgroundColor: "#edcd91",
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
            <Typography
              variant="h3"
              style={{
                textAlign: "center",
                fontFamily: '"Lucida Handwriting", cursive',
                fontWeight: 800,
              }}
            >
              Are you sure you want to delete?
            </Typography>
            <div
              style={{
                minWidth: "60%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <FormikButton
                btnText="Yes"
                type="submit"
                bg={"#11f005"}
                onClick={() => {
                  handleYesDeleteCustomer();
                }}
              />
              <FormikButton
                btnText="No"
                type="submit"
                bg={"#d1113e"}
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
            <DeleteCustomerConfirmation
              open={showDeleteCustomerConfirmation}
              onClose={() => {
                setShowDeleteCustomerConfirmation(false);
                handleClose();
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default DeleteCustomer;
