import React from "react";
import "./hexsImage.css";

interface Props {
  path: string;
  class_name: string;
}

function hexsImage({ path, class_name }: Props) {
  return (
    <div className="home-section__img-container">
      <div className="hexagon"></div>
      <div className="hexagon2"></div>
      <img src={path} alt="cover photo" className={class_name}></img>
      <div className="hexagon0 hexagon1">
        <div className="hexagon-in1">
          <div className="hexagon-in2"></div>
        </div>
      </div>
    </div>
  );
}

export default hexsImage;
