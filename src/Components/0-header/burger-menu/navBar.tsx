import React, { useState } from "react";
import "./burgerMenu.css";

interface Props {
  items: string[];
}

function navBar({ items }: Props) {
  const [isSelected, setIsSelected] = useState(-1);
  const [isOpen, setIsOpen] = useState(true);

  const setOpenState = () => {
    setIsOpen(!isOpen);
    isOpen
      ? document.querySelector(".menu-list")?.classList.remove("menu__hidden")
      : document.querySelector(".menu-list")?.classList.add("menu__hidden");
  };

  return (
    <>
      {/* MENU BURGER DIV */}
      <div
        className={isOpen ? "menu-btn" : "menu-btn-open"}
        onClick={() => setOpenState()}
      >
        <div className="menu-burger"></div>
      </div>
      {/* MENU BURGER DIV */}

      {/* MENU NAVBAR LIST */}
      <ul className="menu-list menu__hidden">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setIsSelected(index);
              // close the menu and toogle the menu icon
              screen.width < 600 && setIsOpen(!isOpen),
                document
                  .querySelector(".menu-list")
                  ?.classList.add("menu__hidden");
            }}
          >
            <a
              className={
                isSelected === index ? "nav__link active" : "nav__link"
              }
              href={"#" + item.toLowerCase() + "_anchor"}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* MENU NAVBAR LIST */}
    </>
  );
}

export default navBar;
