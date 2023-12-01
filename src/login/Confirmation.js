import { Dialog, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const LoginConfirmation = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Dialog style={{marginRight: "500px"}} open={open} onClose={handleClose}>
        <Snackbar
          open={open}
          onClose={handleClose}
          data-testid="alert"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Logged In Successfully!!
          </Alert>
        </Snackbar>
      </Dialog>
    </>
  );
};
export default LoginConfirmation;