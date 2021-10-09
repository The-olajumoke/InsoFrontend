// import React from "react";
// import PopIcon from "./PopIcon";

// function NotiPopUp({ icon, text }) {
//   return (
//     <div className="notipopup">
//       <PopIcon />
//       <div>
//         <h2>Unable to post discussion.</h2>
//         <h3>No text found in discussion text field.</h3>
//       </div>
//     </div>
//   );
// }

// export default NotiPopUp;
import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { BiCheckCircle } from "react-icons/bi";
import { AlertTitle } from "@mui/material";
import Slide from "@mui/material/Slide";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({text,title}) {
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
      {/* <Button variant="outlined"
       onClick={handleClick}
       >
        Open success snackbar
      </Button> */}
      <Snackbar
        // anchorOrigin={["bottom", "center"]}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <div className="ring notipopup">
          <Alert
            sx={{ width: "100%" }}
            onClose={handleClose}
            icon={
              <BiCheckCircle
                fontSize="30px"
                color="#04BE00"
                severity="success"
              />
            }
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
