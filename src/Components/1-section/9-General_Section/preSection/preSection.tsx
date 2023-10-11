import React from "react";
import "./preSection.css";

interface Props {
  preSect_id: string;
  pos?: string;
}

function preSection({ preSect_id, pos = "pre-" }: Props) {
  return (
    <section id={pos + preSect_id} className="preSect_container"></section>
  );
}

export default preSection;
