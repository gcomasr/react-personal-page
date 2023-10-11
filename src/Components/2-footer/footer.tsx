import React from "react";
import FooterIcon from "./footerIcon";
import FooterText from "./footerText";
import "./footer.css";

function footer() {
  return (
    <footer>
      <FooterText></FooterText>

      <nav className="footer__nav">
        <FooterIcon
          link="https://es.linkedin.com/in/guillemcr"
          icon="fa-linkedin"
        ></FooterIcon>
        <FooterIcon
          link="https://github.com/gcomasr"
          icon="fa-github"
        ></FooterIcon>
      </nav>
    </footer>
  );
}

export default footer;
