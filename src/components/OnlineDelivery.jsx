import React from "react";
import Card from "./Card";

export default function () {
  return (
    <div className="max-w-[1200px] mx-auto border items-center">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-semibold">
          Restraunt with online delivery in Ramkola
        </div>
      </div>
      <div>
        <div className="max -w-[1200px] gap-3 flex mx-auto my-4 border  border-red-600">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort by</div>
          <div className="p-3 rounded-md shadow">price</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
