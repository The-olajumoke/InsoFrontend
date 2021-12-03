import React, { useState } from "react";

import SignUp1 from "../components/SignUp/SignUp1";
import Page from "../components/SignUp/Page";
function SignUpModal() {
  const [activeModal, setactiveModal] = useState("signUp1");
  return (
    <Page>
      <SignUp1 activeModal={activeModal} setactiveModal={setactiveModal} />
    </Page>
  );
}

export default SignUpModal;
