import React, { ReactNode } from "react";
import "./sectionDesc.css";

interface Props {
  children: ReactNode;
  sectId: string;
}

function sectionDesc({ children, sectId }: Props) {
  return <h1 className={sectId + "-section__desc text-justify"}>{children}</h1>;
}

export default sectionDesc;
