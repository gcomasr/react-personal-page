import React from "react";

interface Props {
  icon: string;
  link: string;
}

function footerIcon({ icon, link }: Props) {
  return (
    <a className="footer__link" href={link} target="_blank">
      <i className={"footer__icon fab " + icon}></i>
    </a>
  );
}

export default footerIcon;
