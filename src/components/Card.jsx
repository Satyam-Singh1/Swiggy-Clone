import React from "react";
import img1 from "../assets/image.jpeg";
import "../index.css";
export default function Card() {
  return (
    <div className=" group w-[273px] shrink-0 grow-0 mb-3 ">
      <div className="group-hover:scale-110  duration-150 h-[182px] rounded-xl overflow-hidden relative">
        <img className="object-cover w-full h-full" src={img1} alt="" />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[30px] font-bold text-white tracking-tighter">
          Items at 79
        </div>
      </div>
    </div>
  );
}
