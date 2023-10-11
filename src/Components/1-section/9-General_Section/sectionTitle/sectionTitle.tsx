import React, { ReactNode } from "react";
import "./sectionTitle.css";

interface Props {
  children: ReactNode;
  sectId: string;
  color?: string;
}

function sectionTitle({ children, sectId, color = "" }: Props) {
  return <h1 className={sectId + " section-heading " + color}>{children}</h1>;
}

export default sectionTitle;
