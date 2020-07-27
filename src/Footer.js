import React, { useState } from "react";
import Sitename from "./SiteName";


function Footer(props) {




  return (

    <div>
      <br />
      --- Footer ----
      Your feedback is very important for us -- &nbsp; &nbsp; &nbsp;Thanks &nbsp;
      {props.menu}&nbsp;
      <Sitename />

    </div>
  )

};
export default Footer;
