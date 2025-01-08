import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Card from "./Card";
export default function TopRestaurant() {
  const [data, setData] = useState([]);
  const fetchTopRestaurant = async ()=>{
    const response = await fetch("/topRestaurant.json");
    const Apidata = await response.json();
    setData(Apidata);
  }

  useEffect(
    ()=>{
      fetchTopRestaurant();
    },[]
  )
  
  return (
    <div className="max-w-[1200px] mx-auto border items-center">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-semibold">
          Top restraunt in Ramkola
        </div>
        <div className="flex">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowCircleRight className="text-[20px]" />
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowCircleLeft className="text-[20px]" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {
          data.map((index , data)=>{
            return <Card {...data} key={index}/>
          })
        }
        <Card />
      </div>
    </div>
  );
}
