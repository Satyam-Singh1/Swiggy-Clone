import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import logo from "../assets/download.png";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  function showSideMenu() {
    setToggle(true);
  }
  const hideSideMenu = () => {
    setToggle(false);
  };
  const links = [
    {
      icon: <FaSearch />,
      name: "Search",
    },
    {
      icon: <TbDiscount />,
      name: "Discount",
      sup: "New",
    },
    {
      icon: "",
      name: "Help",
    },
    {
      icon: "",
      name: "Cart",
    },
    {
      icon: "",
      name: "Sign in",
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] bg-white h-full absolute duration-[400]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl sticky top-0 z-[9999] bg-white">
        <div className="max-w-[1200px] mx-auto border flex items-center  ">
          <div className="w-[100px] border">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <div>
            <span className=" font-bold border-b border-black">Ramkola </span>{" "}
            Kushinagar, Up
            <RxCaretDown
              onClick={showSideMenu}
              className="inline font-bold
           text-[0.9rem] text-[#fc8019]"
            />
          </div>
          <nav className="flex list-none gap-7 ml-auto font-semibold text-[19px]">
            {/* We can also use inline on place of flex but the icons are not alligned */}
            {/* No need to do like this 
            <li className="flex items-center gap-2">
              <TbDiscount />
              Offers
            </li>
            <li>Help</li>
            <li>Sign in</li>
            <li>Cart</li> */}

            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 hover:text-[#fc8019]"
                >
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
