import React, { ReactNode } from "react";
import "./downloadFileBtn.css";

interface Props {
  path: string;
  children: ReactNode;
}

function downloadFileBtn({ path, children }: Props) {
  return (
    <a className="btn download_btn" href={path} target="_blank">
      {children}
    </a>
  );
}

export default downloadFileBtn;
