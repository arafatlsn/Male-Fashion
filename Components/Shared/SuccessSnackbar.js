import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  successSnackbar,
  successSnackbarMssg,
} from "../../AtomStates/ProductStates";

const SuccessSnackbar = () => {
  const [showSuccussSnackbar, setShowSuccessSnackbar] =
    useRecoilState(successSnackbar);
  const [successText] = useRecoilState(successSnackbarMssg);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnackbar(false);
  };
  return (
    <Snackbar
      open={showSuccussSnackbar}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {successText}
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackbar;
