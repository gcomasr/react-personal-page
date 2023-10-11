import React, { ReactNode } from "react";
import PreSection from "./9-General_Section/preSection/preSection";
import "./section.css";

interface Props {
  sect_id: string;
  children: ReactNode;
}

function section({ sect_id, children }: Props) {
  return (
    <>
      {/* {sections.map((section) => { */}
      <PreSection preSect_id={sect_id}></PreSection>;{/* })} */}
      <a className="anchor" id={sect_id + "_anchor"}></a>
      {/* {sections.map((section) => { */}
      <section id={sect_id + "-section"} className="section-container">
        {children}
      </section>
      ;{/* })} */}
    </>
  );
}

export default section;
