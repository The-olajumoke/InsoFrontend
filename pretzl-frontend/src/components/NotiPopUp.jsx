import React from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { AlertTitle } from "@mui/material";
import Slide from "@mui/material/Slide";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({text,title,severity,icon}) {
  const [open, setOpen] = React.useState(true);
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
     
      <Snackbar
     
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <div className="ring notipopup">
          <Alert
            sx={{ width: "100%" }}
            onClose={handleClose}
            icon={icon}
            variant="outline"
            // color="#fff"
          >
            <AlertTitle>{title}</AlertTitle>
          {text}
          </Alert>

          <br />
        </div>
      </Snackbar>
    </Stack>
  );
}
